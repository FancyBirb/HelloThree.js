const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
            //öoght and helper 
            const light = new THREE.SpotLight(0xffffff);
            const lighthelper = new THREE.SpotLightHelper(light);
            light.position.set(0,5,0);
            // grid helper
            const gridhelper = new THREE.GridHelper(10, 10);
			
            
            const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

            //geometry and material
			const geometry = new THREE.BoxGeometry( 1, 1, 2 );
			const material = new THREE.MeshStandardMaterial( { color: 0xFFFF30} );
			const cube = new THREE.Mesh( geometry, material );
			// the adding 
            scene.add( cube,light , /*lighthelper,*/gridhelper);

            // camera position
			camera.position.z = 5;
            // lets me move the mouse
            const control = new THREE.OrbitControls(camera, renderer.domElement);
			
            // here comes that boy shit what up 
            function animate() {
				
                requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();

            // Stars
            function addStar(){
                const geometry = new THREE.SphereGeometry(0.25);
                const material = new THREE.MeshBasicMaterial({color: 0xffffff});
                const star = new THREE.Mesh(geometry, material);
                        // random position from helper
                        //star.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
                        //scene.add(star);
                const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(1000));

                star.position.set(x,y,z);
                scene.add(star);
               
            }

            Array(2000).fill().forEach(addStar);
            
            
            function addSingelstar(){
                const geometry = new THREE.SphereGeometry(0.5);
                const material = new THREE.MeshBasicMaterial({color: 0xFFFF00});
                const star = new THREE.Mesh(geometry, material);
                star.position.set(0,6,0);
                scene.add(star);
            }
            addSingelstar();
