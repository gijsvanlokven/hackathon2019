let editorWindows = document.getElementsByClassName("editorWindow");

Array.from(editorWindows).forEach((editorWindow) => {
    let editor = monaco.editor.create(editorWindow, {
        theme: 'vs-dark',
        model: monaco.editor.createModel("Type your code in here!", "HTML"),
        minimap: true,
    });
    editor.layout();
});

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

var transitionEnd = whichTransitionEvent();
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


function createQuestion()
{

}

function removeQuestion()
{

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
                <select name="typeError" id="">
                    <option value="error">Error</option>
                    <option value="log">Log</option>
                    <option value="warning">Warning</option>
                </select>
            </div>
            <div class="cell">
                <label for="" class="lowerLabel">Expected Awnser</label>
            </div>
            <div class="cell">
                <input type="text" placeholder="Fill here the awnser that you expect to see in the console..">
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
