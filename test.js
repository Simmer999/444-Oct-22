window.addEventListener('move', function() {
    // console.log(camera.position)
    switch(position) {
        case 0:
                moveCamera(0, 0, 1);
                // rotateCamera(0.3, 1.65, -0.3);
                rotateCamera(0, 0, 0);
                position = 0;
        }
        
    });