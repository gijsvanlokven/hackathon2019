const url = `${location.protocol}//${location.host.replace(3000,8080)}/api/`;


async function FillCompleted() {

  let res = await fetch(url + "usercourse");
  let body = await res.json();
  const wrapper = document.querySelector("#CompletedCourses");
  body.forEach(x => {
    let course = await fetch(url + "courses/" + x.CourseID);
    let returned = await course.json();
    wrapper.innerHTML += `<div class="cell">
        <img src="../img/${returned["Language"]}_logo.png" class="completed-img float-center">
        <h4 class="completed-text float-center">
            ${returned["Language"]}
        </h4>
        <p class="text-center">
            ${returned["Name"]}
        </p>
    </div>
    `;
  })

  function fill(){
    FillCompleted();
  }

  fill();
