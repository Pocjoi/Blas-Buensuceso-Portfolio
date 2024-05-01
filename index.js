const cursorSmall = document.querySelector('placeHolderImg.png');
const cursorBig = document.querySelector('placeHolderImg.png');


const positionElement = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  
  cursorBig.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
}

window.addEventListener('mousemove', positionElement)