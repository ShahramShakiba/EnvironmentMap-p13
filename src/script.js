import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';
import * as THREE from 'three';
import { EXRLoader } from 'three/examples/jsm/Addons.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { RGBELoader } from 'three/examples/jsm/Addons.js';

const canvas = document.querySelector('canvas.webgl');
const gui = new GUI();
const scene = new THREE.Scene();
const gltfLoader = new GLTFLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader();
const rgbeLoader = new RGBELoader();
const exrLoader = new EXRLoader();

let width = window.innerWidth;
let height = window.innerHeight;

//================= Environment Map ====================
scene.environmentIntensity = 1;
scene.backgroundBlurriness = 0;
scene.backgroundIntensity = 1;
// scene.backgroundRotation.y = 1;
// scene.environmentRotation.y = 1;

//============= LDR (Low Dynamic Range) Cube Texture
// const environmentMap = cubeTextureLoader.load([
//   './environmentMaps/0/px.png',
//   './environmentMaps/0/nx.png',
//   './environmentMaps/0/py.png',
//   './environmentMaps/0/ny.png',
//   './environmentMaps/0/pz.png',
//   './environmentMaps/0/nz.png',
// ]);

// scene.environment = environmentMap;
// scene.background = environmentMap;

//============ HDR-High Dynamic Range (RGBE) Equirectangular
// rgbeLoader.load('./environmentMaps/blender-2k.hdr', (environmentMap) => {
//   environmentMap.mapping = THREE.EquirectangularReflectionMapping;
//   // console.log(environmentMap);

//   // scene.background = environmentMap;
//   scene.environment = environmentMap;
// });

//============ HDR (EXR) Equirectangular
exrLoader.load('./environmentMaps/nvidiaCanvas-4k.exr', (environmentMap) => {
  environmentMap.mapping = THREE.EquirectangularReflectionMapping;
  // console.log(environmentMap);

   scene.background = environmentMap;
  scene.environment = environmentMap;
});

//======= Debug GUI
gui.add(scene, 'environmentIntensity').min(0).max(10).step(0.001);
gui.add(scene, 'backgroundBlurriness').min(0).max(1).step(0.001);
gui.add(scene, 'backgroundIntensity').min(0).max(10).step(0.001);
gui
  .add(scene.backgroundRotation, 'y')
  .min(0)
  .max(10)
  .step(0.001)
  .name('backgroundRotation');
gui
  .add(scene.environmentRotation, 'y')
  .min(0)
  .max(10)
  .step(0.001)
  .name('environmentRotation'); // Showcasing a Product

//==================== Torus Knot ======================
const torusKnot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(1, 0.4, 100, 16),
  new THREE.MeshStandardMaterial({
    roughness: 0.3,
    metalness: 1,
    color: 0xaaaaaa,
  })
);
torusKnot.position.y = 4;
torusKnot.position.x = -5;
scene.add(torusKnot);

//====================== Models ========================
gltfLoader.load('./models/FlightHelmet/glTF/FlightHelmet.gltf', (gltf) => {
  // console.log(gltf);
  gltf.scene.scale.set(10, 10, 10);
  scene.add(gltf.scene);
});

//===================== Camera =========================
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
camera.position.set(4, 5, 8);
scene.add(camera);

//================ Orbit Controls ======================
const controls = new OrbitControls(camera, canvas);
controls.target.y = 3.5;
controls.enableDamping = true;

//==================== Renderer ========================
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//================ Resize Listener ====================
window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//=================== Animate =======================
const clock = new THREE.Clock();
const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
