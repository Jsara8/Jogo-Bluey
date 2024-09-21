const bluey = document.querySelector('.bluey');
const pipe = document.querySelector('.pipe');

const jump = function ()  {
    bluey.classList.add('jump');

    setTimeout(function()  {
        bluey.classList.remove('jump');

    }, 500);
}

const loop = setInterval(function()  {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const blueyPosition = +window.getComputedStyle(bluey).bottom.replace('px', '');

    console.log(blueyPosition);


    if (pipePosition <= 120 && pipePosition > 0 && blueyPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        bluey.style.animation = 'none';
        bluey.style.bottom = `${blueyPosition}px`;
    
        clearInterval(loop);

    }


} , 10);


document.addEventListener('keydown', jump);