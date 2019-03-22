fetch("https://www.energylog.nl/api/courses")
    .then(function (response) {
        return response.json();
    })
    .then(function (responseJson) {
        responseJson.forEach((json) => {
            console.log(json)
            createCourse(json.CourseID, json.Name, json.Description)
        });
    });

function createCourse(courseId, name, description = "") {
    let courseHTML = `
    <div class="cell clickContainer course" id="${courseId}" onclick='window.location.href="question.php?course=${courseId}"'">
        <div class="grid-y">
            <div class="cell large-12 medium-12 small-12">
                <h6>${name}</h6>
            </div>
            <div class="cell large-12 medium-12 small-12">
                <p>${description}</p>
            </div>
        </div>`
    document.querySelector("#coursesWrapper > div").insertAdjacentHTML('beforeend', courseHTML);
}