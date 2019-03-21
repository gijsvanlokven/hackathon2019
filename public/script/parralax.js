let parent = document.getElementById('parallax-container');
let children = parent.getElementsByTagName('div');

for(let i = 0; i < children.length; i++) {
  children[i].style.transform = 'translateY(-' + (window.pageYOffset * (children.length - i) / children.length * 2) + 'px)';
}

  window.addEventListener('scroll', () => {
   for(let i = 0; i < children.length; i++) {
     if(parent.offsetHeight > window.pageYOffset)
     {
      children[i].style.transform = 'translateY(-' + (window.pageYOffset * (children.length - i) / children.length * 2) + 'px)';
     }
   }
}, false)

window.addEventListener('resize', () => {
  for(let i = 0; i < children.length; i++) {
    children[i].style.transform = 'translateY(-' + (window.pageYOffset * (children.length - i) / children.length * 2) + 'px)';
  }
});