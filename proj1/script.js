var renderer, scene, camera, mesh;
  var isMouseDown = false;

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
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementById('container').appendChild(renderer.domElement);

    
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    
  
    function init(){
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
    }

    function onMouseDown(){
        isMouseDown = true;
    }

    function onMouseUp(){
        isMouseDown = false;
    }

    // on initialise la scène
    scene = new THREE.Scene();

    // on initialise la camera que l’on place ensuite sur la scène
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set(0, 0, 1000);
    scene.add(camera);

    // on créé un  cube au quel on définie un matériau puis on l’ajoute à la scène
    mesh = new THREE.Mesh(  );

    scene.add( mesh );



    for(let i=0; i<14; i++) {
        geometry = new THREE.CubeGeometry( getRandomArbitrary(100, 1000), getRandomArbitrary(100,1000), getRandomArbitrary(100, 1000) );
        material = new THREE.MeshBasicMaterial( { color: 'white', wireframe: true } );
        mesh[i] = new THREE.Mesh( geometry, material );
        scene.add( mesh[i]);
    }

}



function animate(){


    requestAnimationFrame( animate );
    if(!isMouseDown){
        for(let i=0; i<14; i++) {
            mesh[i].rotation.x += getRandomArbitrary(0.001,0.006);
            mesh[i].rotation.y += getRandomArbitrary(0.001,0.006);
        }
    }



    // on effectue le rendu de la scène
    renderer.render( scene, camera );
}
