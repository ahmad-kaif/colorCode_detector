const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const body = document.querySelector('body');
// console.log(body);
// console.log(start);
// console.log(stop);

const change_color = function(){
    let random_color = `${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`;
    body.style.backgroundColor = `rgb(${random_color})`;

}
let stopit;
start.addEventListener('click',function(){
    stopit = setInterval(change_color,1000);
    stopid = null // this makes a code bit optimised
    document.querySelector('.result').innerHTML = ''

})
stop.addEventListener('click',function(){
    clearInterval(stopit);
    document.querySelector('.result').innerHTML = `The Color is : ${body.style.backgroundColor}`
})