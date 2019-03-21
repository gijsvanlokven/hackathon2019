const url = `${location.protocol}//${location.host.replace(3000,8080)}/api/`;

function getsInWindow(element) {
  let top = element.offsetTop;
  let windowBottom = window.pageYOffset + window.innerHeight;

  if (top < windowBottom) {
    return true;
  } else {
    return false;
  }
}
async function FillRecommended() {

  let res = await fetch(url + "courses/recommended");
  let body = await res.json();
  const wrapper = document.querySelector("#suggestedCourses");
  body.forEach(x => {
    wrapper.innerHTML += `<div class="cell large-4 medium-6 small-12 courseBox">
    <img src="../img/${x.Language}_logo.png" class="float-center">
    <h4>
    ${x.Name}
    </h4>
    <p>
    ${x.Description}
    </p>
    </div>
    `;
  })

}

function fill() {
  FillRecommended();
}

fill();