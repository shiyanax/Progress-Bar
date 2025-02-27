const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let curentActive = 1;

const update = () => {
  curentActive === 1 ? prev.disabled = true : prev.disabled = false
  curentActive === circles.length ? next.disabled = true : next.disabled = false

  circles.forEach((circle, index)=> curentActive > index ? circle.classList.add('active') :circle.classList.remove('active'));

  progress.style.width = `${((curentActive-1)/(circles.length-1))*100}%`;
};

next.addEventListener('click', ()=> {curentActive < circles.length ? curentActive++ : curentActive = curentActive; update()});
prev.addEventListener('click', ()=> {curentActive > 1 ? curentActive-- : curentActive = curentActive; update()});