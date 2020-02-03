var renderer, scene, camera, mesh;

init();
animate();

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function init(){
  // on initialise le moteur de rendu
  renderer = new THREE.WebGLRenderer();

  // si WebGL ne fonctionne pas sur votre navigateur vous pouvez utiliser le moteur de rendu Canvas à la place
  // renderer = new THREE.CanvasRenderer();
  renderer.setSize( window.innerWidth * 0.7, window.innerHeight *0.8 );
  console.log(window.innerWidth);
  document.getElementById('container').appendChild(renderer.domElement);

  // on initialise la scène
  scene = new THREE.Scene();

  // on initialise la camera que l’on place ensuite sur la scène
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.set(0, 0, 1000);
  scene.add(camera);

  // on créé un  cube au quel on définie un matériau puis on l’ajoute à la scène
  mesh = new THREE.Mesh(  );

  scene.add( mesh );


scene.background
  for(let i=0; i<14; i++) {
    geometry = new THREE.CubeGeometry( getRandomArbitrary(100, 1000), getRandomArbitrary(100,1500), getRandomArbitrary(100, 1000) );
    material = new THREE.MeshBasicMaterial( { color: '#07485C', wireframe: true } );
    mesh[i] = new THREE.Mesh( geometry, material );
    scene.add( mesh[i]);
  }

}



function animate(){


  requestAnimationFrame( animate );
  for(let i=0; i<14; i++) {
    mesh[i].rotation.x += getRandomArbitrary(0.001,0.006);
    mesh[i].rotation.y += getRandomArbitrary(0.001,0.006);
  }



  // on effectue le rendu de la scène
  renderer.setClearColor( '#F9C0AD', 1);
  renderer.render( scene, camera );

}
