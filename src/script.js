import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';
import * as THREE from 'three';
import { EXRLoader } from 'three/examples/jsm/Addons.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { RGBELoader } from 'three/examples/jsm/Addons.js';
import { GroundedSkybox } from 'three/examples/jsm/Addons.js';

const canvas = document.querySelector('canvas.webgl');
const gui = new GUI();
const scene = new THREE.Scene();

const gltfLoader = new GLTFLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader();
const rgbeLoader = new RGBELoader();
const exrLoader = new EXRLoader();
const textureLoader = new THREE.TextureLoader();

let width = window.innerWidth;
let height = window.innerHeight;

//================= Environment Map ====================
scene.environmentIntensity = 1;
// scene.backgroundBlurriness = 0;
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
// exrLoader.load('./environmentMaps/nvidiaCanvas-4k.exr', (environmentMap) => {
//   environmentMap.mapping = THREE.EquirectangularReflectionMapping;
//   // console.log(environmentMap);

//    scene.background = environmentMap;
//   scene.environment = environmentMap;
// });

//============ LDR Equirectangular - Skybox AI
// const environmentMap = textureLoader.load(
//   './environmentMaps/blockadesLabsSkybox/interior_views_cozy_wood_cabin_with_cauldron_and_p.jpg'
// );
// environmentMap.mapping = THREE.EquirectangularReflectionMapping;
// environmentMap.colorSpace = THREE.SRGBColorSpace;

// scene.background = environmentMap;
// scene.environment = environmentMap;

//============ HDR-High Dynamic Range (RGBE) Equirectangular
// rgbeLoader.load('./environmentMaps/2/2k.hdr', (environmentMap) => {
//   environmentMap.mapping = THREE.EquirectangularReflectionMapping;

//   scene.environment = environmentMap;

//   const skybox = new GroundedSkybox(environmentMap, 15, 70);
//   // skybox.material.wireframe = true;
//   skybox.position.y = 15;
//   scene.add(skybox);
// });

//============ Real time Environment Map ================
const environmentMap = textureLoader.load(
  './environmentMaps/blockadesLabsSkybox/interior_views_cozy_wood_cabin_with_cauldron_and_p.jpg'
);
environmentMap.mapping = THREE.EquirectangularReflectionMapping;
environmentMap.colorSpace = THREE.SRGBColorSpace;

scene.background = environmentMap;

const holyDonut = new THREE.Mesh(
  new THREE.TorusGeometry(9, 0.7),
  new THREE.MeshBasicMaterial({
    color: new THREE.Color(10, 4, 2),
  })
);
holyDonut.position.y = 3.5;
holyDonut.layers.enable(1); // see the "holyDonut" 
scene.add(holyDonut);

//=========== Cube render target - cube texture - holyDonut creates light on the model - it's like cubeTextureLoader, loading 6 image for positive & negative x-y-z, doing 6 render on each frame - it's a lot in terms of performance

const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(128, {
  // type: THREE.FloatType, // uses 32 bits to store a wide range of values - to have the same behavior as an HDR

  type: THREE.HalfFloatType, // uses only 16 bits - performance
});

scene.environment = cubeRenderTarget.texture; // this texture is still empty we need to add a render - add a camera to render the light

//=========== Cube Camera
const cubeCamera = new THREE.CubeCamera(0.1, 100, cubeRenderTarget);

cubeCamera.layers.set(1); // default is 0
// layers: declare only for things that you can see in camera - cube camera only see the "holyDonut" and not rendering torus and the model

//========== Debug GUI
gui.add(scene, 'environmentIntensity').min(0).max(10).step(0.001);
// gui.add(scene, 'backgroundBlurriness').min(0).max(1).step(0.001);
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
    roughness: 0,
    metalness: 1,
    color: 0xaaaaaa,
  })
);
torusKnot.position.y = 4;
torusKnot.position.x = -4;
scene.add(torusKnot);

//====================== Models ========================
gltfLoader.load('./models/FlightHelmet/glTF/FlightHelmet.gltf', (gltf) => {
  // console.log(gltf);
  gltf.scene.scale.set(10, 10, 10);
  gltf.scene.position.x = 3;
  scene.add(gltf.scene);
});

//===================== Camera =========================
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
camera.position.set(8, 5, 14);
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

  //======== Real time Environment Map
  if (holyDonut) {
    holyDonut.rotation.x = Math.sin(elapsedTime) * 2.1;

    cubeCamera.update(renderer, scene);
  }

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
