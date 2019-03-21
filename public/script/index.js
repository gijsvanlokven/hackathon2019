
function getsInWindow(element)
{
  let top = element.offsetTop;
  let windowBottom = window.pageYOffset + window.innerHeight;

  if(top < windowBottom)
  {
    return true;
  }
  else
  {
    return false;
  }
}