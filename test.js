window.addEventListener('mouseup', function() {
    // console.log(camera.position)
    switch(position) {
        case 0:
            moveCamera(-1.8, 1.6, 5);
            rotateCamera(0, 0.1, 0);
            position = 1; //Guy in blue wearing a wig.
            break;
        case 1:
            moveCamera(2.8, 0, 3.6);
            rotateCamera(0, -2, 0);
            position = 2;
            break;
            case 5:
                moveCamera(0.5, 0.8, 10);
                rotateCamera(0.3, 1.65, -0.3);
                position = 0;
        }
        
    });