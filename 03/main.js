//Canvas
const canvas = document.querySelector("canvas.webgl");
//Sizes
const sizes = {
  width: 800,
  height: 600,
};

//Scene
const scene = new THREE.Scene();

//Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3; //distance from the screen
scene.add(camera);

//Renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(sizes.width, sizes.height);

// Needs to call this render function to render the scene
renderer.render(scene, camera);
