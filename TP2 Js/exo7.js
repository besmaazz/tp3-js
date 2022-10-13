var playing = false ;
 var boundary = document.getElementsByClassName('boundary');

document.getElementById('maze').addEventListener('mouseleave', exo7)

function exo7 () {
    if (playing) {
      
        for (let index = 0; index < boundary.length; index++) {
            boundary[index].addEventListener('mouseover', function () {
                for (let index = 0; index < boundary.length; index++) {
                    boundary[index].style.backgroundColor = 'red';
                }
            })
        }
        alert('Dont cheat')
      
    }}