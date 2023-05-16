window.onload = function () {
    //tworzenie sceny
    const scene = new THREE.Scene();
    const spaceTexture = new THREE.TextureLoader().load("textures/space.jpg");
    scene.background = spaceTexture;

    //tworzenie kamery
    const camera = new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,100000);

    //ustawienia kamery 
    camera.position.set(0,20,50);//.setLength(15);

    //tworzenie renderu i ustawienie jego wlasciwosci 
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x202020);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild(renderer.domElement);


    //dodanie kontroli orbitalnej
    const controls = new THREE.OrbitControls(camera,renderer.domElement);

    //dodanie outputu zeby pokazalo sie na stronie 
    document.getElementById("webgl").appendChild(renderer.domElement);


    //stworzenie swiatla ambient 
    //const ambientLight = new THREE.AmbientLight(0x494949,2);
    //scene.add( ambientLight );

    //stworzenie swiatla punktowego z ambientem 
    let light = new THREE.PointLight();
    scene.add(light, new THREE.AmbientLight(0xffffff, 0.5));
    
    //tworzenie orbit
    const materialo = new THREE.MeshBasicMaterial({color:0xffffff, side: THREE.DoubleSide});
    //orbita merkurego
    const geometryo1 = new THREE.RingGeometry(77,76.5,52);
    const orbitm = new THREE.Mesh(geometryo1 , materialo);
    scene.add(orbitm);
    //orbita ziemi 
    const geometryo2 = new THREE.RingGeometry(171,170.5,52);
    const orbite = new THREE.Mesh(geometryo2 , materialo);
    scene.add(orbite);
    //orbita venus
    const geometryo3 = new THREE.RingGeometry(121,120.5,52);
    const orbitv = new THREE.Mesh(geometryo3 , materialo);
    scene.add(orbitv);
    //orbita marsa
    const geometryo4 = new THREE.RingGeometry(216,215.5,52);
    const orbitma = new THREE.Mesh(geometryo4 , materialo);
    scene.add(orbitma);
    //orbita jupitera
    const geometryo5 = new THREE.RingGeometry(261,260.5,52);
    const orbitj = new THREE.Mesh(geometryo5 , materialo);
    scene.add(orbitj);
    // orbita saturna
    const geometryo6 = new THREE.RingGeometry(316,315.5,52);
    const orbits = new THREE.Mesh(geometryo6 , materialo);
    scene.add(orbits);
    //orbita uranu
    const geometryo7 = new THREE.RingGeometry(351,350.5,52);
    const orbitu = new THREE.Mesh(geometryo7 , materialo);
    scene.add(orbitu);
    //orbita neptuna
    const geometryo8 = new THREE.RingGeometry(381,380.5,52);
    const orbitn = new THREE.Mesh(geometryo8 , materialo);
    scene.add(orbitn);

    //tworzenie slonca
    const geometrys = new THREE.SphereGeometry( 35, 32, 16 );
    const sun_texture = new THREE.TextureLoader().load("textures/sun-texture.png");
    const materials = new THREE.MeshBasicMaterial( { color: 0xffffff,map:sun_texture} );
    const sun = new THREE.Mesh( geometrys, materials );
    sun.position.set(0,0,0);
    sun.receiveshadow = true;
    sun.castShadow = true;
    scene.add( sun );

    //tworzenie ziemi
    const geometrye = new THREE.SphereGeometry(10,25,8);
    const earth_texture = new THREE.TextureLoader().load("textures/earth-texture.jpg");
    const materiale = new THREE.MeshLambertMaterial( {color: 0xffffff,map:earth_texture } );
    const earth = new THREE.Mesh(geometrye,materiale);
    earth.position.set(170,0,5);
    earth.receiveShadow = true;
    earth.castShadow = true;

    //tworzenie ksiezyca oraz ksiezyca
    const geometrym = new THREE.SphereGeometry(3,15,6);
    const moon_texture = new THREE.TextureLoader().load("textures/moon-texture.png");
    const materialm = new THREE.MeshLambertMaterial({color:0xffffff,map:moon_texture});
    const moon = new THREE.Mesh(geometrym,materialm);
    moon.position.set(15,0,5);
    moon.receiveShadow = true ;
    moon.castShadow = true ;
    //scene.add(moon);
    earth.add(moon);
    scene.add(earth);

    //tworzenie merkurego
    const geometrymer = new THREE.SphereGeometry(8,15,16);
    const mercury_texture = new THREE.TextureLoader().load("textures/mercury-texture.jpg");
    const materialmer = new THREE.MeshLambertMaterial({color: 0xffffff,map:mercury_texture});
    const mercury = new THREE.Mesh(geometrymer,materialmer);
    mercury.position.set(75,0,5)
    scene.add(mercury);

    //tworzenie venus
    const geometryv = new THREE.SphereGeometry(17,15,6);
    const venus_texture = new THREE.TextureLoader().load("textures/venus-texture.jpg");
    const materialv = new THREE.MeshLambertMaterial({color:0xffffff, map:venus_texture});
    const venus = new THREE.Mesh(geometryv,materialv);
    venus.position.set(120,0,5);
    scene.add(venus);

    //tworzenie marsa
    const mars_texture = new THREE.TextureLoader().load("textures/mars-texture.jpg");
    const materialmar = new THREE.MeshLambertMaterial({color:0xffffff,map:mars_texture });
    const mars = new THREE.Mesh(geometrymer,materialmar);
    mars.position.set(215,0,5);
    scene.add(mars);

    //tworzenie jupitera
    const geometryj = new THREE.SphereGeometry(25,15,6);
    const jupiter_texture = new THREE.TextureLoader().load("textures/jupiter-texture.jpg");
    const materialj = new THREE.MeshLambertMaterial({color:0xffffff,map:jupiter_texture});
    const jupiter = new THREE.Mesh(geometryj,materialj);
    jupiter.position.set(260,0,5);
    scene.add(jupiter);

    //tworzenie saturna oraz jego pierscienia
    const saturn_texture = new THREE.TextureLoader().load("textures/saturn-texture.jpg");
    const materialsa = new THREE.MeshLambertMaterial({color:0xffffff,map:saturn_texture});
    const saturn = new THREE.Mesh(geometryv,materialsa);
    saturn.position.set(315,0,5);
    const geometryps = new THREE.RingGeometry(30,25,32);
    const materialps = new THREE.MeshBasicMaterial({color:0xc96208,side: THREE.DoubleSide });
    const pierscien = new THREE.Mesh(geometryps, materialps);
    pierscien.position.set(0,0,0);
    saturn.add(pierscien);
    scene.add(saturn);

    //tworzenie uranu 
    const geometryu = new THREE.SphereGeometry(9,15,6);
    const uran_texture = new THREE.TextureLoader().load("textures/uran-texture.jpg");
    const materialu = new THREE.MeshLambertMaterial({color:0xffffff,map:uran_texture});
    const uranus = new THREE.Mesh(geometryu,materialu);
    uranus.position.set(350,0,5);
    scene.add(uranus);

    //tworzenie neptuna
    const neptun_texture = new THREE.TextureLoader().load("textures/neptun-texture.jpg");
    const materialn = new THREE.MeshLambertMaterial({color:0xffffff,map:neptun_texture});
    const neptune = new THREE.Mesh(geometrymer,materialn);
    neptune.position.set(380,0,5);
    scene.add(neptune);

    camera.position.z = 650;


    const animate = function () {
        renderer.render(scene, camera);

        requestAnimationFrame( animate );

        earth.rotation.z += 0.01;
        earth.rotation.x += 0.01;
        earth.position.set(
            170*Math.cos(earth.rotation.x),
            170*Math.sin(earth.rotation.x),
            0.0
        );

        moon.rotation.x += 0.001;
        moon.position.set(
            20*Math.cos(moon.rotation.x),
            20*Math.sin(moon.rotation.x),
            0.0
        );

        mercury.rotation.x += 0.007;
        mercury.position.set(
            75*Math.cos(mercury.rotation.x),
            75*Math.sin(mercury.rotation.x),
            0.0
        );

        venus.rotation.x += 0.02;
        venus.position.set(
            120*Math.cos(venus.rotation.x),
            120*Math.sin(venus.rotation.x),
            0.0
        );

        mars.rotation.x += 0.003;
        mars.position.set(
            215*Math.cos(mars.rotation.x),
            215*Math.sin(mars.rotation.x),
            0.0
        );

        jupiter.rotation.x += 0.009;
        jupiter.position.set(
            260*Math.cos(jupiter.rotation.x),
            260*Math.sin(jupiter.rotation.x),
            0.0
        );

        saturn.rotation.x += 0.006;
        saturn.position.set(
            315*Math.cos(saturn.rotation.x),
            315*Math.sin(saturn.rotation.x),
            0.0
        );

        uranus.rotation.x += 0.01;
        uranus.position.set(
            350*Math.cos(uranus.rotation.x),
            350*Math.sin(uranus.rotation.x),
            0.0
        );

        neptune.rotation.x += 0.007;
        neptune.position.set(
            380*Math.cos(neptune.rotation.x),
            380*Math.sin(neptune.rotation.x),
            0.0
        );
        

        controls.update();
    };

    animate();

   



}