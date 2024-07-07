# <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Laptop.webp" alt="Laptop" width="35" /> &nbsp; _Environment Map_ &nbsp; <img src="https://skillicons.dev/icons?i=threejs" height="35" alt="threejs logo"  />  

<!----------------------------------------- Description ---------------------------------------->
### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Bubbles.png" alt="Bubbles" width="40" height="40" />&nbsp; _Description_

> To begin with, it is important to note that, this project have been sourced from an exceptional `Three.js Journey` Course. <br/>
 
### 👤 Instructed by a _proficient_ and _expert educator_ <a href="https://threejs-journey.com/" target="_blank"> _"Bruno Simon"_ </a>. 

 <br/>

> ### Introduction to Environment Map
Environment map is a texture that simulates the surrounding environment and is used to create realistic reflections and lighting on 3D objects. It provides a way to make surfaces appear as if they are reflecting the environment around them, even though the environment itself may not be rendered in the scene. <br/> <br/>

> ### Why Use an Environment Map?
1. _Realism_ : <br/>
   By simulating reflections and lighting from the environment, objects appear more realistic.
     
2. _Performance_ : <br/>
   Instead of rendering the full environment, you can use a precomputed environment map to achieve realistic effects, which is computationally cheaper.
     
3. _Lighting_ : <br/>
   It can be used to create ambient lighting that affects the color and brightness of the objects, enhancing the overall visual quality.
  
 <br/>

> ### Types of Environment Maps 
There are different types of environment maps, each with specific characteristics and use cases:
### 1. `  Cube Maps : `  <br/>
   Cube Maps are a type of environment map consisting of six square textures that represent the six faces of a cube. Each face corresponds to one of the six directions (positive X, negative X, positive Y, negative Y, positive Z, negative Z).
   - Usage: Commonly used for reflections, skyboxes, and dynamic environment mapping.
   - Advantages :
     - _Realistic Reflections_: Provides high-quality reflections for shiny or metallic surfaces.
     - _Easy Integration_: Well-supported in most 3D engines and rendering systems.
     - _Dynamic Updates_: Can be updated dynamically to reflect changes in the environment.
   - Disadvantages :
     - _Memory Usage_: Requires six images, which can be memory-intensive.
     - _Seams_: Potential for visible seams where the cube faces meet if not handled properly.
     
### 2. `  Equirectangular Maps : `  <br/>
  Equirectangular Maps are a single, continuous texture that represents a 360-degree panorama. They map a spherical environment onto a 2D image using an equirectangular projection.
   - Usage:  Often used for HDRI (High Dynamic Range Imaging) lighting and as a source for creating cube maps.
  - Advantages :
     - _Simplicity_: Easier to manage and store compared to six separate images.
     - _No Seams_: No seams, as it is a single continuous image.
     - _HDRI Support_: Frequently used in HDRI for realistic lighting and reflections.
   - Disadvantages :
     - _Distortion_: Potential for distortion, especially at the poles.
     - _Conversion_: Sometimes needs to be converted to a cube map for certain applications.
         
### 3. `  Spherical Harmonics (SH) : `  <br/>
   Spherical Harmonics (SH) are a mathematical representation used to approximate complex lighting environments. SH captures the distribution of light over a sphere and is particularly effective for ambient lighting and diffuse reflections.
   - Usage: Common in real-time applications where performance is critical.
  - Advantages :
     - _Performance_: Efficient for real-time rendering with low computational cost.
     - _Smooth Lighting_: Provides smooth and soft lighting effects, ideal for diffuse surfaces.
     - _Compact Representation_: Requires less memory compared to cube maps and equirectangular maps.

   - Disadvantages :
     - _Low Detail_: Not suitable for high-frequency details or sharp reflections.
     - _Complex Setup_: Requires mathematical understanding and implementation.

 <br/>

 > ### Comparison Table:

| Aspect             | Cube Maps                           | Equirectangular Maps              | Spherical Harmonics (SH)           |
|--------------------|-------------------------------------|-----------------------------------|-------------------------------------|
| **Detail**         | High                                | High                              | Low                                 |
| **Performance**    | Moderate                            | Moderate                          | High                                |
| **Memory Usage**   | High (six images)                   | Moderate (single image)           | Low (mathematical coefficients)     |
| **Ease of Use**    | Widely supported, but more complex  | Simple and straightforward        | Complex setup, but efficient usage  |
| **Best For**       | Sharp reflections, dynamic updates  | HDRI lighting, seamless panoramas | Ambient lighting, diffuse surfaces  |

<br/>

> ### When and Where to Use Environment Maps
Blender is often used in conjunction with three.js (a popular JavaScript library for 3D graphics on the web) due to several key reasons: <br/>
1. Reflective Surfaces : <br/>
   Use environment maps on materials that require reflections, such as metals, water, glass, and polished surfaces.

2. Ambient Lighting : <br/>
   Use them to create ambient lighting that enhances the scene's realism by providing indirect light.

3. Skylighting : <br/>
   To simulate the effect of the sky and surroundings on the objects in your scene.
   
4. Indoor Scenes : <br/>
   They can be used to reflect the interior environment for objects like furniture, glossy floors, and decorative items.

<br/><br/>

> [!IMPORTANT]
>> ### Benefits of Using Environment Maps :
>> 1. Enhanced Realism : <br/>  Environment maps provide realistic reflections and lighting, which are crucial for high-quality visual effects.
>> 2. Efficient Rendering : <br/> Precomputed environment maps reduce the computational load compared to real-time environment rendering.
>> 3. Versatility : <br/> They can be used in various scenarios, from outdoor scenes with sky reflections to indoor environments with complex lighting setups.
>> 4. Improved Visuals : <br/> They contribute to more visually appealing and immersive scenes, enhancing the overall user experience.


<br/>

<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Eyes.png" alt="Eyes" width="25" height="25" /> Feel free to delve into the code as it has been written in a straightforward manner for easy understanding.
<br/> <br/> <br/> 

<!-------- try it live -------->
#### _Give it a go in real-time and give me a Star_ &nbsp; <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Glowing%20Star.png" alt="Glowing Star" width="25"  /> <a href="https://environment-map-shahram.netlify.app/" target="_blank"> &nbsp; _Environment Map_ </a> 

<br/>

<!--------- Video --------->
<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Clapper%20Board.webp" alt="Clapper Board" width="35" /> &nbsp; Real time environment map rendering!

https://github.com/ShahramShakiba/EnvironmentMap-p13/assets/110089830/aeb6efcf-c1fa-4f2d-a00c-c914d48aa423

  <br/> 

***

<!--======================= Social Media ===========================-->
 ## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Detective%20Light%20Skin%20Tone.png" alt="Man Detective Light Skin Tone" width="65" /> Find me around the Web  
<a href="https://www.linkedin.com/in/shahramshakiba/" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="52" height="40" alt="linkedin logo"  />
  </a> &nbsp;&nbsp;&nbsp;
  <a href="https://t.me/ShahramShakibaa" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/telegram/default.svg" width="52" height="40" alt="telegram logo"  />
  </a> &nbsp;&nbsp;&nbsp;
  <a href="https://wa.me/message/LM2IMM3ABZ7ZM1" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/whatsapp/default.svg" width="52" height="40" alt="whatsapp logo"  />
  </a> &nbsp;&nbsp;&nbsp;
  <a href="https://instagram.com/shahram.shakibaa?igshid=MzNlNGNkZWQ4Mg==" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/instagram/default.svg" width="52" height="40" alt="instagram logo"  />
  </a> &nbsp;&nbsp;&nbsp;
  <a href="https://twitter.com/ShahramShakibaa" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/twitter/default.svg" width="52" height="40" alt="twitter logo"  />
  </a>
