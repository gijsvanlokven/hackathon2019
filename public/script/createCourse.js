var transitionEnd = whichTransitionEvent();
let editorWindows = document.getElementsByClassName("editorWindow");
let CodeEditors = {};

Array.from(editorWindows).forEach((editorWindow) => {
    renderCodeBlock(editorWindow);
});

let ProgrammingLangauges = document.getElementsByClassName("programmingLangauge");


Array.from(ProgrammingLangauges).forEach((element) => {
    let parent = element.closest("[question]");
    element.addEventListener("change", () => {
        parent.querySelector(".editorWindow").innerHTML = "";
        renderCodeBlock(parent.querySelector(".editorWindow"), element.value);
    });
})

function renderCodeBlock(editorWindow, programmingLangauge = "html") {
    let editor = monaco.editor.create(editorWindow, {
        theme: 'vs-dark',
        value: "Type your code here",
        language: programmingLangauge,
        minimap: true,
    });
    editor.layout();

    CodeEditors[editorWindow.closest("[question]").getAttribute("question")] = editor;
}

/*
    Listener for the button
*/
let uploadButtons = document.querySelectorAll(".uploadButton")

Array.from(uploadButtons).forEach((button) => {
    button.addEventListener("change", function (event) {
        let file = button.querySelector("input").files[0];

        var reader = new FileReader();

        reader.onload = function (e) {
            $('.uploadImg').attr('src', e.target.result);
        }

        reader.readAsDataURL(file);

        if (file.name.length > 30) {
            button.parentElement.parentElement.querySelector('.filename').innerHTML = "File <span class='bold'>" + file.name.substr(0, 30) + "..." + file.name.split('.').pop() + "</span> is selected.";
        } else {
            button.parentElement.parentElement.querySelector('.filename').innerHTML = "File <span class='bold'>" + file.name + "</span> is selected.";
        }

    });
});

/*
    Listener for transitions
*/
function whichTransitionEvent() {
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
    }

    for (t in transitions) {
        if (el.style[t] !== undefined) {
            return transitions[t];
        }
    }
}

/*
    Listener for all questions
*/
function questionChanger(question, i, type) {
    if (type.value == "Code") {
        let codeSection = `
        <!--
            Code Section
        -->
        <div question="${i}" class="cell codeSection">
            <div class="cell">
                <h3>
                    Question ${i}:
                </h3>
            </div>
            <div class="cell">
                <label for="">Question type</label>
            </div>
            <div class="cell">
                <select name="question${i}Type" class="questionType">
                    <option value="Code">Code</option>
                    <option value="Question">Multiple choice</option>
                </select>
            </div>
            <div class="cell">
                <label for="">Programming Langauge</label>
            </div>
            <div class="cell">
                <select name="question${i}Langauge" class="programmingLangauge">
                    <option selected value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="javascript">Javascript</option>
                </select>
            </div>
            <div class="cell">
                <label for="">Code editor</label>
            </div>
            <div class="cell grid-x medium-up-2 small-up-1 codeQuestion">
                <div class="cell">
                    <textarea name="question${i}Article">In here you can write your article</textarea>
                </div>
                <div class="cell editorWindow" name="question${i}Editor">

                </div>
            </div>
            <div class="cell">
                <label for="">Answer</label>
            </div>
            <div class="cell answerContainer">
                <div class="cell answerBox">
                    <div class="cell">
                        <label for="" class="mediumLabel">Answer 1</label>
                    </div>
                    <div class="cell">
                        <label for="" class="lowerLabel">Answer Type</label>
                    </div>
                    <div class="cell">
                        <select name="question${i}typeError1">
                            <option value="error">Error</option>
                            <option value="log">Log</option>
                            <option value="warning">Warning</option>
                        </select>
                    </div>
                    <div class="cell">
                        <label for="" class="lowerLabel">Expected Answer</label>
                    </div>
                    <div class="cell">
                        <input type="text" name="question${i}expectedAnswer1" placeholder="Fill here the answer that you expect to see in the console..">
                    </div>
                </div>
            </div>   
            <div class="cell grid-x small-up-1 addOrRemoveBox">
                <div class="cell">
                    <div class="clickContainer" onclick="codeAddAnswer(this)">
                        <img class="buttonAdd" src="../img/plus.svg" alt=""> Add a new answer
                    </div>
                </div>
                <div class="cell">
                    <div class="clickContainer" onclick="codeRemoveAnswer(this)">
                        <img class="buttonRemove" src="../img/minus.svg" alt=""> Remove an answer
                    </div>
                </div>
            </div>
        </div>
        `;
        question.outerHTML = codeSection;

        let programmingLangSelec = document.querySelector(".codeSection[question='" + i + "'] .programmingLangauge");
        let newCodeBlock = document.querySelector(".codeSection[question='" + i + "'] .editorWindow");

        programmingLangSelec.addEventListener("change", () => {
            newCodeBlock.innerHTML = "";
            renderCodeBlock(newCodeBlock, programmingLangSelec.value);
        });

        renderCodeBlock(newCodeBlock);
    } else if (type.value == "Question") {
        let multipleChoiceSection = `
        <div question="${i}" class="cell multipleChoiceSection">
            <div class="cell">
                <h3>
                    Question ${i}:
                </h3>
            </div>
            <div class="cell">
                <label for="">Question type</label>
            </div>
            <div class="cell">
                <select name="question${i}Type" class="questionType">
                    <option selected value="Question">Multiple choice</option>
                    <option value="Code">Code</option>
                </select>
            </div>
            <div class="cell">
                <label for="">Question</label>
            </div>
            <div class="cell">
                <input type="text" name="question${i}" placeholder="Fill here your question in..">
            </div>
            <div class="cell">
                <label for="">Answers</label>
            </div>
            <div class="cell grid-x grid-margin-x medium-up-2 small-up-1 answerBox">
                <div class="cell grid-x">
                    <div class="cell small-10">
                        <input type="text" placeholder="Answer 1.." name="question${i}answer1">
                    </div>
                    <div class="cell small-2 flex-center">
                        <div>
                            <label class="customCheckbox" >
                                <input type="checkbox" name="question${i}CheckboxAnswer1">
                                <span></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="cell grid-x">
                    <div class="cell small-10">
                        <input type="text" placeholder="Answer 2.." name="question${i}answer2">
                    </div>
                    <div class="cell small-2 flex-center">
                        <div>
                            <label class="customCheckbox" >
                                <input type="checkbox" name="question${i}CheckboxAnswer2">
                                <span></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="cell grid-x">
                    <div class="cell small-10">
                        <input type="text" placeholder="Answer 3.." name="question${i}answer3">
                    </div>
                    <div class="cell small-2 flex-center">
                        <div>
                            <label class="customCheckbox" >
                                <input type="checkbox" name="question${i}CheckboxAnswer3">
                                <span></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="cell grid-x">
                    <div class="cell small-10">
                        <input type="text" placeholder="Answer 4.." name="question${i}answer4">
                    </div>
                    <div class="cell small-2 flex-center">
                        <div>
                            <label class="customCheckbox" >
                                <input type="checkbox" name="question${i}CheckboxAnswer4">
                                <span></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        question.outerHTML = multipleChoiceSection;
    }
    let newType = document.querySelector("#createForm > div > div > div[question='" + i + "'] .questionType");
    let newQuestion = document.querySelector("#createForm > div > div > div[question='" + i + "']");
    newType.addEventListener("change", () => {
        questionChanger(newQuestion, i, newType)
    }, false);
}

let questions = document.querySelectorAll(".multipleChoiceSection, .codeSection");

Array.from(questions).forEach((question) => {
    let type = question.querySelector(".questionType");
    type.addEventListener("change", () => {
        questionChanger(question, question.getAttribute("question"), type)
    }, false);
});



var errorTimeout = false;

/*
    Show an error
*/
function showErrorBox(message) {
    if (errorTimeout == false) {
        errorTimeout = true;
        let errorBox = document.getElementById('errorBox');
        errorBox.removeAttribute("style");

        errorBox.innerHTML = "Error: " + message;
        if (!errorBox.classList.contains("showErrorBox")) {
            errorBox.classList.add("showErrorBox");
        }

        setTimeout(() => {
            errorBox.style.transform = "translateY(-100%)";
            let event = errorBox.addEventListener(transitionEnd, function removeErrorBox() {
                errorBox.classList.remove("showErrorBox");
                errorBox.removeAttribute("style");
                errorTimeout = false;
                errorBox.removeEventListener(transitionEnd, removeErrorBox);
            }, false);
        }, 2500);
    }
}

/*
    Make a question
*/

function createQuestion() {
    let questions = document.querySelectorAll(".multipleChoiceSection, .codeSection");
    let i = questions.length + 1;
    let multipleChoiceSection = `
        <div question="${i}" class="cell multipleChoiceSection">
            <div class="cell">
                <h3>
                    Question ${i}:
                </h3>
            </div>
            <div class="cell">
                <label for="">Question type</label>
            </div>
            <div class="cell">
                <select name="question${i}Type" class="questionType">
                    <option selected value="Question">Multiple choice</option>
                    <option value="Code">Code</option>
                </select>
            </div>
            <div class="cell">
                <label for="">Question</label>
            </div>
            <div class="cell">
                <input type="text" name="question${i}" placeholder="Fill here your question in..">
            </div>
            <div class="cell">
                <label for="">Answers</label>
            </div>
            <div class="cell grid-x grid-margin-x medium-up-2 small-up-1 answerBox">
                <div class="cell grid-x">
                    <div class="cell small-10">
                        <input type="text" placeholder="Answer 1.." name="question${i}answer1">
                    </div>
                    <div class="cell small-2 flex-center">
                        <div>
                            <label class="customCheckbox" >
                                <input type="checkbox" name="question${i}CheckboxAnswer1">
                                <span></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="cell grid-x">
                    <div class="cell small-10">
                        <input type="text" placeholder="Answer 2.." name="question${i}answer2">
                    </div>
                    <div class="cell small-2 flex-center">
                        <div>
                            <label class="customCheckbox" >
                                <input type="checkbox" name="question${i}CheckboxAnswer2">
                                <span></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="cell grid-x">
                    <div class="cell small-10">
                        <input type="text" placeholder="Answer 3.." name="question${i}answer3">
                    </div>
                    <div class="cell small-2 flex-center">
                        <div>
                            <label class="customCheckbox" >
                                <input type="checkbox" name="question${i}CheckboxAnswer3">
                                <span></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="cell grid-x">
                    <div class="cell small-10">
                        <input type="text" placeholder="Answer 4.." name="question${i}answer4">
                    </div>
                    <div class="cell small-2 flex-center">
                        <div>
                            <label class="customCheckbox" >
                                <input type="checkbox" name="question${i}CheckboxAnswer4">
                                <span></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

    document.querySelector("#createForm > div > div").insertAdjacentHTML('beforeend', multipleChoiceSection);

    let newQuestion = document.querySelector("#createForm > div > div > div[question='" + i + "']");
    let newType = newQuestion.querySelector(".questionType");
    newType.addEventListener("change", () => {
        questionChanger(newQuestion, i, newType)
    }, false);
}

/*
    Remove a question
*/
function removeQuestion() {
    let questions = document.querySelectorAll("#createForm > div > div > div[question]");
    let question = document.querySelector("#createForm > div > div > div[question]:last-of-type");

    if (questions.length > 1) {
        question.parentElement.removeChild(question);
    } else {
        showErrorBox("You need to have atleast one question");
    }
}

/*
    Function for adding a code block answer

    button = button that was clicked
*/
function codeAddAnswer(button) {
    let parent = button.closest(".codeSection");
    let answerBoxes = parent.querySelectorAll(".answerContainer .answerBox");
    let answerContainer = parent.querySelector(".answerContainer");
    let answerBoxesAmount = Array.from(answerBoxes).length;
    let html = `
        <div class="cell answerBox">
            <div class="cell">
                <label for="" class="mediumLabel">Answer ${answerBoxesAmount + 1}</label>
            </div>
            <div class="cell">
                <label for="" class="lowerLabel">Answer Type</label>
            </div>
            <div class="cell">
                <select name="question${parent.getAttribute("question")}typeError${answerBoxesAmount + 1}">
                    <option value="error">Error</option>
                    <option value="log">Log</option>
                    <option value="warning">Warning</option>
                </select>
            </div>
            <div class="cell">
                <label for="" class="lowerLabel">Expected Answer</label>
            </div>
            <div class="cell">
                <input type="text" name="question${parent.getAttribute("question")}expectedAnswer${answerBoxesAmount + 1}" placeholder="Fill here the answer that you expect to see in the console..">
            </div>
        </div>`;

    answerContainer.innerHTML += html;
}

/*
    Function for removing a code block answer

    button = button that was clicked
*/
function codeRemoveAnswer(button) {
    let parent = button.closest(".codeSection");
    let answerBoxes = parent.querySelectorAll(".answerContainer .answerBox");
    let answerContainer = parent.querySelector(".answerContainer");
    let answerBoxesAmount = Array.from(answerBoxes).length;

    if (answerBoxesAmount > 1) {
        answerContainer.removeChild(answerContainer.querySelector(".answerBox:last-child"));
    } else {
        showErrorBox("You need to have atleast one answer");
    }
}

document.querySelector("#submit").addEventListener("click", () => SaveCourse());
async function SaveCourse() {

    let response = await fetch("https://www.energylog.nl/api/questions/lastid");
    let lastID = (await response.json()).LastID;
    let data = [];

    document.querySelectorAll(".multipleChoiceSection, .codeSection").forEach((x, i) => {
        lastID++;
        let question = {
            Type: "Question"
        }

        question.Type = x.querySelector(".questionType").value;
        if (question.Type == "Question") {
            question.Question = x.querySelector(`[name=question${i+1}]`).value;
            question.Answers = [];

            let a1 = {
                value: x.querySelector(`[name=question${i + 1}answer1]`).value,
            }
            if (x.querySelector(`[name='question${i+1}CheckboxAnswer1']`).checked)
                a1.NextQuestion = lastID;
            else a1.explanation = "This is the wrong answer.";

            let a2 = {
                value: x.querySelector(`[name=question${i+ 1}answer2]`).value,
            }
            if (x.querySelector(`[name='question${i+1}CheckboxAnswer2']`).checked)
                a2.NextQuestion = lastID;
            else a2.explanation = "This is the wrong answer.";

            let a3 = {
                value: x.querySelector(`[name=question${i+1}answer3]`).value,
            }
            if (x.querySelector(`[name='question${i+1}CheckboxAnswer3']`).checked)
                a3.NextQuestion = lastID;
            else a3.explanation = "This is the wrong answer.";


            let a4 = {
                value: x.querySelector(`[name=question${i+1}answer4]`).value,
            }
            if (x.querySelector(`[name='question${i+1}CheckboxAnswer4']`).checked)
                a4.NextQuestion = lastID;
            else a4.explanation = "This is the wrong answer.";

            question.Answers.push(a1, a2, a3, a4);
        } else if (question.Type == "Code") {
            question.Question = x.querySelector(`[name=question${i+1}Article]`).value;
            question.Template = CodeEditors[i + 1].getModel().getValue();

            let ExpectedOutput = [];

            x.querySelectorAll(".answerBox").forEach((y, z) => {
                ExpectedOutput.push({
                    Type: y.querySelector(`[name=question${i+1}typeError${z+1}]`).value,
                    Line: y.querySelector(`[name=question${i+1}expectedAnswer${z+1}]`).value
                });
            });
            question.ExpectedOutput = ExpectedOutput;
        }

        data.push(question);
    });


    let course = {
        Name: document.querySelector("[name=courseName]").value,
        Language: document.querySelector("[name=courseLangauge]").value,
        Description: document.querySelector("[name=courseDescription]").value,
        Difficulty: 1
    }

    response = await fetch("https://www.energylog.nl/api/courses", {
        method: "post",
        body: JSON.stringify(course),
        headers: {
            "Content-Type": "Application/json"
        }
    });
    let courseID = await response.json();

    response = await fetch("https://www.energylog.nl/api/questions/" + courseID, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "Application/json"
        }
    });

    console.log(data);
}