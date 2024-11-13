function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  const body =  document.querySelector('body');
  const start = document.querySelector('#start')
  const stop = document.querySelector('#stop')
  let interval;
  
  start.addEventListener("click",()=>{
  if(!interval){
    interval = setInterval(()=>{
      body.style.backgroundColor = getRandomColor()
    })
  }
  
  stop.addEventListener("click",()=>{
  clearInterval(interval);
  interval = null;
  })
  })