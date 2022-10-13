var besma = document.getElementById('boundary1');
boundary1.addEventListener('mousemove', function () {
   besma.style.backgroundColor = 'red';
})
var boundary = document.getElementsByClassName('boundary');
for (let index = 0; index < boundary.length; index++) {
    boundary[index].addEventListener('mouseover', function () {
          for (let index = 0; index < boundary.length; index++) {
             boundary[index].style.backgroundColor = 'red';
          }
    })
 }
false = false ;

 function alert () {
    if (lose ) {
       alert('you win');      
    }

document.getElementById('end').addEventListener('click', alert )}
document.getElementById('start').addEventListener("click", 

function(){
    for (let index = 0; index < boundary.length; index++) {
        boundary[index].style.backgroundColor = '#eeeeee';
    }
    lose = false;
    
}
);
if (lose==true) {
    document.getElementById('status').textContent = 'you lost'
}
    else {
    document.getElementById('status').textContent = ' you win'
}
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
      
    }
}