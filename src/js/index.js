/* import THREE library along with a simple css used
 * to eliminate margins on the page
 */
import * as THREE from 'three';
require('../css/style.css');

/* in this index file I will accumulate files created
 * during Milano Live Code threeJS lessons
 * decomment blocks of code to visualize the relative creation
 * at the bottom of the file lives a not very complex app used as experiment
 */

// decomment this to use the 006 lesson's code
//require('./006-scene-essentials.js');

// decomment this to use the 007 lesson's code
//require('./007-populate-the-scene.js');

// Decomment these lines to start a not very complex app
import CrazyScene from './App/crazyScene.js';
const crazyScene = new CrazyScene();
const maxCubes = 60;
const distribution = 15;
for (let i = 0; i < maxCubes; i++) {
  const newPosition = new THREE.Vector3(
    Math.random() * distribution - distribution * 0.5,
    Math.random() * distribution - distribution * 0.5,
    Math.random() * distribution - distribution * 0.5
  );
  const newSize = (Math.random() + 0.65) * 0.45;
  crazyScene.addCube(newPosition, newSize);
}
crazyScene.startRender();
