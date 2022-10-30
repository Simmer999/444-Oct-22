import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.127/build/three.module.js'
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.127/examples/jsm/controls/OrbitControls.js';

let container, stats;
let camera, scene, renderer, orbit, controls;
let mesh, texture, tv; 
let sphere01, sphere02, sphere03, sphere04, sphere05, sphere06, sphere07, sphere08, sphere09; 
let sphere10, sphere11, sphere12, sphere13, sphere14, sphere15, sphere16, sphere17, sphere18;
let sphere19, sphere20, sphere21, sphere22, sphere23, sphere24, sphere25, sphere26, sphere27;

const clock = new THREE.Clock();

init();
animate();

function init() {

    container = document.getElementById( 'container' );

//Scene ============================================================================================
        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0x220000 );
        // scene.fog = new THREE.FogExp2( 0xefd1b5, 0.0025 );// FOG ======================================

//Camera ===========================================================================================
        camera = new THREE.PerspectiveCamera( 20, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.set( -5, 0, 80 );
        camera.lookAt( -1, 0, 0 );//<<--------------------

//Renderer =========================================================================================
        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );
    
//Geometries =======================================================================================
    //tv ===========================================================================================
        const tvGeom = new THREE.BoxGeometry(2.5, 1.5, .1);
        const tvMatl = new THREE.MeshStandardMaterial( { color: 0xffffff })
        tv = new THREE.Mesh(tvGeom, tvMatl)
        tv.position.set(-1.5, 0, 1)
        scene.add(tv)
    //Cubes ========================================================================================
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshStandardMaterial( { color: 0x000055 } );
        sphere01 = new THREE.Mesh( geometry, material );
        sphere01.position.set( 0, 0, 0 )
        // scene.add( sphere01 );
        sphere02 = new THREE.Mesh( geometry, material );
        sphere02.position.set( 10, 0, 0 )
        // scene.add( sphere02 );
        sphere03 = new THREE.Mesh( geometry, material );
        sphere03.position.set( -10, 0, 0 )
        // scene.add( sphere03 );
        sphere04 = new THREE.Mesh( geometry, material );
        sphere04.position.set( 0, 10, 0 )
        // scene.add( sphere04 );
        sphere05 = new THREE.Mesh( geometry, material );
        sphere05.position.set( 0, -10, 0 )
        // scene.add( sphere05 );
        sphere06 = new THREE.Mesh( geometry, material );
        sphere06.position.set( 10, -10, 0 )
        // scene.add( sphere06 );
        sphere07 = new THREE.Mesh( geometry, material );
        sphere07.position.set( 10, 10, 0 )
        // scene.add( sphere07 );
        sphere08 = new THREE.Mesh( geometry, material );
        sphere08.position.set( -10, 10, 0 )
        // scene.add( sphere08 );
        sphere09 = new THREE.Mesh( geometry, material );
        sphere09.position.set( -10, -10, 0 )
        // scene.add( sphere09 );

        sphere10 = new THREE.Mesh( geometry, material );
        sphere10.position.set( 0, 0, 10 )
        // scene.add( sphere10 );
        sphere11 = new THREE.Mesh( geometry, material );
        sphere11.position.set( 10, 0, 10 )
        // scene.add( sphere11 );
        sphere12 = new THREE.Mesh( geometry, material );
        sphere12.position.set( -10, 0, 10 )
        // scene.add( sphere12 );
        sphere13 = new THREE.Mesh( geometry, material );
        sphere13.position.set( 0, 10, 10 )
        // scene.add( sphere13 );
        sphere14 = new THREE.Mesh( geometry, material );
        sphere14.position.set( 0, -10, 10 )
        // scene.add( sphere14 );
        sphere15 = new THREE.Mesh( geometry, material );
        sphere15.position.set( 10, -10, 10 )
        // scene.add( sphere15 );
        sphere16 = new THREE.Mesh( geometry, material );
        sphere16.position.set( 10, 10, 10 )
        // scene.add( sphere16 );
        sphere17 = new THREE.Mesh( geometry, material );
        sphere17.position.set( -10, 10, 10 )
        // scene.add( sphere17 );
        sphere18 = new THREE.Mesh( geometry, material );
        sphere18.position.set( -10, -10, 10 )
        // scene.add( sphere18 );

        sphere19 = new THREE.Mesh( geometry, material );
        sphere19.position.set( 0, 0, -10 )
        // scene.add( sphere19 );
        sphere20 = new THREE.Mesh( geometry, material );
        sphere20.position.set( 10, 0, -10 )
        // scene.add( sphere20 );
        sphere21 = new THREE.Mesh( geometry, material );
        sphere21.position.set( -10, 0, -10 )
        // scene.add( sphere21 );
        sphere22 = new THREE.Mesh( geometry, material );
        sphere22.position.set( 0, 10, -10 )
        // scene.add( sphere22 );
        sphere23 = new THREE.Mesh( geometry, material );
        sphere23.position.set( 10, -10, -10 )//-----------
        // scene.add( sphere23 );
        sphere24 = new THREE.Mesh( geometry, material );
        sphere24.position.set( 0, -10, -10 )//------------
        // scene.add( sphere24 );
        sphere25 = new THREE.Mesh( geometry, material );
        sphere25.position.set( 10, 10, -10 )
        // scene.add( sphere25 );
        sphere26 = new THREE.Mesh( geometry, material );
        sphere26.position.set( -10, 10, -10 )
        // scene.add( sphere26 );
        sphere27 = new THREE.Mesh( geometry, material );
        sphere27.position.set( -10, -10, -10 )
        // scene.add( sphere27 );

        const group01 = new THREE.Group();
        group01.add( sphere01, sphere02, sphere03, sphere04, sphere05, sphere06, sphere07, sphere08, sphere09 );
        group01.add( sphere10, sphere11, sphere12, sphere13, sphere14, sphere15, sphere16, sphere17, sphere18 );
        group01.add( sphere19, sphere20, sphere21, sphere22, sphere23, sphere24, sphere25, sphere26, sphere27 );
        group01.position.set( 0, 0, 0 )

        scene.add( group01 );

//Lights ===========================================================================================
        const intensity = 1.5
        const light1 = new THREE.PointLight( 0xffffff, 10, 100 )
            light1.position.y = intensity
        const light2 = new THREE.PointLight( 0xffffff, 10, 100 )
            light2.position.z = intensity 
        const light3 = new THREE.PointLight( 0xffffff, 10, 100 )
        light3.position.z = intensity 
        scene.add( light1, light2, light3 )
        light1.position.x = 20
        light2.position.y = 20

//Controls =========================================================================================
        orbit = new OrbitControls(camera, renderer.domElement)
        // controls = new FirstPersonControls( camera, renderer.domElement );
        // controls.movementSpeed = 5;
        // controls.lookSpeed = 0.0;

//Stats ============================================================================================
        // stats = new Stats();
        // container.appendChild( stats.dom );

 window.addEventListener( 'resize', onWindowResize );
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
function animate() {
    sphere01.rotation.x += 0.01;
    sphere01.rotation.y += 0.01;
    sphere02.rotation.x += 0.01;
    sphere02.rotation.y += 0.01;
    sphere03.rotation.x += 0.01;
    sphere03.rotation.y += 0.01;
    sphere04.rotation.x += 0.01;
    sphere04.rotation.y += 0.01;
    sphere05.rotation.x += 0.01;
    sphere05.rotation.y += 0.01;
    sphere06.rotation.x += 0.01;
    sphere06.rotation.y += 0.01;
    sphere07.rotation.x += 0.01;
    sphere07.rotation.y += 0.01;
    sphere08.rotation.x += 0.01;
    sphere08.rotation.y += 0.01;
    sphere09.rotation.x += 0.01;
    sphere09.rotation.y += 0.01;
    sphere10.rotation.x += 0.01;
    sphere10.rotation.y += 0.01;    
    sphere11.rotation.x += 0.01;    
    sphere11.rotation.y += 0.01;   
    sphere12.rotation.x += 0.01;   
    sphere12.rotation.y += 0.01;    
    sphere13.rotation.x += 0.01;   
    sphere13.rotation.y += 0.01;    
    sphere14.rotation.x += 0.01;    
    sphere14.rotation.y += 0.01;    
    sphere15.rotation.x += 0.01;    
    sphere15.rotation.y += 0.01;   
    sphere16.rotation.x += 0.01;    
    sphere16.rotation.y += 0.01;    
    sphere17.rotation.x += 0.01;    
    sphere17.rotation.y += 0.01;    
    sphere18.rotation.x += 0.01;    
    sphere18.rotation.y += 0.01;    ;
    sphere19.rotation.x += 0.01;
    sphere19.rotation.y += 0.01;
    sphere20.rotation.x += 0.01;
    sphere20.rotation.y += 0.01;
    sphere21.rotation.x += 0.01;
    sphere21.rotation.y += 0.01;
    sphere22.rotation.x += 0.01;
    sphere22.rotation.y += 0.01;
    sphere23.rotation.x += 0.01;
    sphere23.rotation.y += 0.01;
    sphere24.rotation.x += 0.01;
    sphere24.rotation.y += 0.01;
    sphere25.rotation.x += 0.01;
    sphere25.rotation.y += 0.01;
    sphere26.rotation.x += 0.01;
    sphere26.rotation.y += 0.01;
    sphere27.rotation.x += 0.01;
    sphere27.rotation.y += 0.01;

    requestAnimationFrame( animate );
    render();
    cameraPath()
    tvAppear()
    // stats.update();

}
// camera.position.set( -5, 0, 80 );
camera.lookAt( -1, 0, 0 );
const tl = gsap.timeline();
const duration = 1.5;
const ease = "none";
let position = 0;

function cameraPath() {
    window.addEventListener('load', function () {
        tl
        .to(camera.position, {
            x: -1.5,
            y: 0,
            z: 7,
            duration,
            ease,
            onUpdate: function() {
                camera.lookAt(-1.5, 0, 0);
            }
        })
    })
}
function tvAppear() {
    window.addEventListener('load', function() {
        tl
        .from(tv.opacity, {
            duration,
            ease: "power.in"
        })
    })
}
function render() {
    renderer.render( scene, camera );
}
//Particles =========================================================================================
const particleGeometry = new THREE.BufferGeometry 
const particlesCount = 5000
const particlesMaterial = new THREE.PointsMaterial( { 
    size: 0.005
} );
const positionArray = new Float32Array(particlesCount * 3)

for( let i = 0; i < particlesCount * 3; i++) {
    positionArray[i] = (Math.random() - 0.5) * 100
}

particleGeometry.setAttribute('position', 
    new THREE.BufferAttribute(positionArray, 3))     

const particleMesh = new THREE.Points(particleGeometry, particlesMaterial)
scene.add( particleMesh )
//======================================================================================================