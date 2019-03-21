var transitionEnd = whichTransitionEvent();
let editorWindows = document.getElementsByClassName("editorWindow");

Array.from(editorWindows).forEach((editorWindow) => {
    renderCodeBlock(editorWindow);
});

function renderCodeBlock(editorWindow)
{
    let editor = monaco.editor.create(editorWindow, {
        theme: 'vs-dark',
        model: monaco.editor.createModel("Type your code in here!", "HTML"),
        minimap: true,
    });
    editor.layout();
}

/*
    Listener for the button
*/
let uploadButtons = document.querySelectorAll(".uploadButton")

Array.from(uploadButtons).forEach((button) => {
    button.addEventListener("change", function(event){
        let file = button.querySelector("input").files[0];
        console.log(file)
        if(file.name.length > 30)
        {
            this.parentNode.querySelector('.filename').innerHTML = "File <span class='bold'>" + file.name.substr(0, 30) + "..." + file.name.split('.').pop() + "</span> is selected.";
        }
        else
        {
            this.parentNode.querySelector('.filename').innerHTML = "File <span class='bold'>" + file.name + "</span> is selected.";
        }
        
    });
});

/*
    Listener for transitions
*/
function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}

/*
    Listener for all questions
*/
function questionChanger(question, i, type)
{
    if(type.value == "code")
    {
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
                    <option value="code">Code</option>
                    <option value="multiple-choice">Multiple choice</option>
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
                <label for="">Awnser</label>
            </div>
            <div class="cell awnserContainer">
                <div class="cell awnserBox">
                    <div class="cell">
                        <label for="" class="mediumLabel">Awnser 1</label>
                    </div>
                    <div class="cell">
                        <label for="" class="lowerLabel">Awnser Type</label>
                    </div>
                    <div class="cell">
                        <select name="question${i}typeError1">
                            <option value="error">Error</option>
                            <option value="log">Log</option>
                            <option value="warning">Warning</option>
                        </select>
                    </div>
                    <div class="cell">
                        <label for="" class="lowerLabel">Expected Awnser</label>
                    </div>
                    <div class="cell">
                        <input type="text" name="question${i}expectedAwnser1" placeholder="Fill here the awnser that you expect to see in the console..">
                    </div>
                </div>
            </div>   
            <div class="cell grid-x small-up-1 addOrRemoveBox">
                <div class="cell">
                    <div class="clickContainer" onclick="codeAddAwnser(this)">
                        <img class="buttonAdd" src="../img/plus.svg" alt=""> Add a new awnser
                    </div>
                </div>
                <div class="cell">
                    <div class="clickContainer" onclick="codeRemoveAnswer(this)">
                        <img class="buttonRemove" src="../img/minus.svg" alt=""> Remove an awnser
                    </div>
                </div>
            </div>
        </div>
        `;
        question.outerHTML = codeSection;
        
        let newCodeBlock = document.querySelector(".codeSection[question='" + i + "'] .editorWindow");

        renderCodeBlock(newCodeBlock);
    }
    else if(type.value == "multiple-choice")
    {
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
                    <option selected value="multiple-choice">Multiple choice</option>
                    <option value="code">Code</option>
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
            <div class="cell grid-x grid-margin-x medium-up-2 small-up-1 awnserBox">
                <div class="cell grid-x">
                    <div class="cell small-10">
                        <input type="text" placeholder="Awnser 1.." name="question${i}awnser1">
                    </div>
                    <div class="cell small-2 flex-center">
                        <div>
                            <label class="customCheckbox" >
                                <input type="checkbox" name="question${i}CheckboxAwnser1">
                                <span></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="cell grid-x">
                    <div class="cell small-10">
                        <input type="text" placeholder="Awnser 2.." name="question${i}awnser2">
                    </div>
                    <div class="cell small-2 flex-center">
                        <div>
                            <label class="customCheckbox" >
                                <input type="checkbox" name="question${i}CheckboxAwnser1">
                                <span></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="cell grid-x">
                    <div class="cell small-10">
                        <input type="text" placeholder="Awnser 3.." name="question${i}awnser3">
                    </div>
                    <div class="cell small-2 flex-center">
                        <div>
                            <label class="customCheckbox" >
                                <input type="checkbox" name="question${i}CheckboxAwnser1">
                                <span></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="cell grid-x">
                    <div class="cell small-10">
                        <input type="text" placeholder="Awnser 4.." name="question${i}awnser4">
                    </div>
                    <div class="cell small-2 flex-center">
                        <div>
                            <label class="customCheckbox" >
                                <input type="checkbox" name="question${i}CheckboxAwnser1">
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
    console.log(newType)
    newType.addEventListener("change", () => { questionChanger(newQuestion, i, newType) }, false);
}

let questions = document.querySelectorAll(".multipleChoiceSection, .codeSection");

Array.from(questions).forEach((question) => {
    let type = question.querySelector(".questionType");
    type.addEventListener("change", () => { questionChanger(question, question.getAttribute("question"), type) }, false);
});



var errorTimeout = false;

/*
    Show an error
*/
function showErrorBox(message)
{
    if(errorTimeout == false)
    {
        errorTimeout = true;
        let errorBox = document.getElementById('errorBox');
        errorBox.removeAttribute("style");
        
        errorBox.innerHTML = "Error: " + message;
        if(!errorBox.classList.contains("showErrorBox"))
        {
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

function createQuestion()
{
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
                    <option selected value="multiple-choice">Multiple choice</option>
                    <option value="code">Code</option>
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
            <div class="cell grid-x grid-margin-x medium-up-2 small-up-1 awnserBox">
                <div class="cell grid-x">
                    <div class="cell small-10">
                        <input type="text" placeholder="Awnser 1.." name="question${i}awnser1">
                    </div>
                    <div class="cell small-2 flex-center">
                        <div>
                            <label class="customCheckbox" >
                                <input type="checkbox" name="question${i}CheckboxAwnser1">
                                <span></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="cell grid-x">
                    <div class="cell small-10">
                        <input type="text" placeholder="Awnser 2.." name="question${i}awnser2">
                    </div>
                    <div class="cell small-2 flex-center">
                        <div>
                            <label class="customCheckbox" >
                                <input type="checkbox" name="question${i}CheckboxAwnser1">
                                <span></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="cell grid-x">
                    <div class="cell small-10">
                        <input type="text" placeholder="Awnser 3.." name="question${i}awnser3">
                    </div>
                    <div class="cell small-2 flex-center">
                        <div>
                            <label class="customCheckbox" >
                                <input type="checkbox" name="question${i}CheckboxAwnser1">
                                <span></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="cell grid-x">
                    <div class="cell small-10">
                        <input type="text" placeholder="Awnser 4.." name="question${i}awnser4">
                    </div>
                    <div class="cell small-2 flex-center">
                        <div>
                            <label class="customCheckbox" >
                                <input type="checkbox" name="question${i}CheckboxAwnser1">
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
        newType.addEventListener("change", () => { questionChanger(newQuestion, i, newType) }, false);
}

/*
    Remove a question
*/
function removeQuestion()
{
    let questions = document.querySelectorAll("#createForm > div > div > div[question]");
    let question = document.querySelector("#createForm > div > div > div[question]:last-of-type");
    
    if(questions.length > 1)
    {
        question.parentElement.removeChild(question);
    }
    else
    {
        showErrorBox("You need to have atleast one question");
    }
}

/*
    Function for adding a code block awnser

    button = button that was clicked
*/
function codeAddAwnser(button)
{
    let parent = button.closest(".codeSection");
    let awnserBoxes = parent.querySelectorAll(".awnserContainer .awnserBox");
    let awnserContainer = parent.querySelector(".awnserContainer");
    let awnserBoxesAmount = Array.from(awnserBoxes).length;
    let html = `
        <div class="cell awnserBox">
            <div class="cell">
                <label for="" class="mediumLabel">Awnser ${awnserBoxesAmount + 1}</label>
            </div>
            <div class="cell">
                <label for="" class="lowerLabel">Awnser Type</label>
            </div>
            <div class="cell">
                <select name="question${parent.getAttribute("question")}typeError${awnserBoxesAmount + 1}">
                    <option value="error">Error</option>
                    <option value="log">Log</option>
                    <option value="warning">Warning</option>
                </select>
            </div>
            <div class="cell">
                <label for="" class="lowerLabel">Expected Awnser</label>
            </div>
            <div class="cell">
                <input type="text" name="question${parent.getAttribute("question")}expectedAwnser${awnserBoxesAmount + 1}" placeholder="Fill here the awnser that you expect to see in the console..">
            </div>
        </div>`;

    awnserContainer.innerHTML += html;
}

/*
    Function for removing a code block awnser

    button = button that was clicked
*/
function codeRemoveAnswer(button)
{
    let parent = button.closest(".codeSection");
    let awnserBoxes = parent.querySelectorAll(".awnserContainer .awnserBox");
    let awnserContainer = parent.querySelector(".awnserContainer");
    let awnserBoxesAmount = Array.from(awnserBoxes).length;

    if(awnserBoxesAmount > 1)
    {
        awnserContainer.removeChild(awnserContainer.querySelector(".awnserBox:last-child"));
    }
    else
    {
        showErrorBox("You need to have atleast one awnser");
    }
}
