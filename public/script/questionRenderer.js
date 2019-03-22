///<reference types="./monaco.d.ts">

const QuestionText = document.querySelector(".question"),
	CodeScreen = document.querySelector(".code"),
	Output = document.querySelector(".output"),
	CompileButton = document.querySelector(".compile"),
	MultipleChoiceScreen = document.querySelector(".multiplechoice"),
	CodeEditor = document.querySelector(".editor"),
	NextButtons = document.querySelectorAll(".next"),
	explanation = document.querySelector(".explanation");
const url = `${location.protocol}//${location.host}/api/`;


let expectedOutput = [];
let NextQuestionID;
let Language = "javascript";
let explanationText = "";
let editor = monaco.editor.create(CodeEditor, {
	theme: 'vs-dark',
	model: monaco.editor.createModel("test();", Language),
	minimap: true,
});

editor.layout();


CompileButton.addEventListener("click", CompileCode);
NextButtons.forEach(x => x.addEventListener("click", NextQuestion));


async function NextQuestion() {
	if(typeof NextQuestionID === 'undefined')
	{
		const urlParams = new URLSearchParams(window.location.search);
		let response = await fetch("https://www.energylog.nl/api/questions/");
		let json = await response.json();
		let result = json.find(x => x.CourseID == urlParams.get('course')).QuestionID;
		NextQuestionID = result;
	}
	if (NextQuestionID == -1) {
		const urlParams = new URLSearchParams(window.location.search);
		let response = await fetch("https://www.energylog.nl/api/courses/" + urlParams.get('course'));
		
		let body = await response.json();
		NextQuestionID = body.FirstQuestion;
	}
	if (NextQuestionID != "END") {
		let body = await fetch(url + "questions/" + NextQuestionID);
		let question = await body.json();
		QuestionChange(question);
	} else location.href = "/index.php";
}

function QuestionChange(question) {
	DisableNext();
	QuestionText.textContent = question.Question;
	explanation.textContent = "";

	if (question.Type == "Code") {
		MultipleChoiceScreen.classList.add("hidden");
		CodeScreen.classList.remove("hidden");

		editor.getModel().setValue(question.Template.join("\n"));
		expectedOutput = question.CorrectOutput;
		explanationText = question.explanation;

		if (question.NextQuestion)
			NextQuestionID = question.NextQuestion;
		else NextQuestionID = "END";
	}

	if (question.Type == "Question") {
		MultipleChoiceScreen.classList.remove("hidden");
		CodeScreen.classList.add("hidden");
		MultipleChoiceScreen.querySelectorAll(":not(.next)").forEach(x => x.remove());
		question.Answers.forEach(answer => {
			let button = document.createElement("button");
			button.classList.add("choice");
			button.textContent = answer.value;

			if (answer.GotoQuestion)
				button.addEventListener("click", () => {
					NextQuestionID = answer.GotoQuestion;
					EnableNext();
				});
			if (answer.explanation)
				button.addEventListener("click", () => {
					DisableNext();
					explanation.textContent = answer.explanation;
				});
			if (answer.EndCourse)
				button.addEventListener("click", () => {
					NextQuestionID = "END";
					EnableNext();
				});

			MultipleChoiceScreen.insertAdjacentElement("afterbegin", button);
		});
	}
}


function CompileCode() {
	if (Language == "javascript") {
		let compiler = new Function(`
		window = {};
let Output = [];
let console = {};
console.log = (...args) => {
	if (args.length > 0)
		Output.push({
			type: 'log',
			line: args.join(' ')
		});
}
console.error =(...args) => {
	if (args.length > 0)
		Output.push({
			type: 'error',
			line: args.join(' ')
		});
}
console.warn = (...args) => {
	if (args.length > 0)
		Output.push({
			type: 'warning',
			line: args.join(' ')
		});
}

try {
	${editor.getModel().getValue()}
} catch (error) {
	console.error(error);
}

return Output;`);

		let result = compiler();

		console.log(result);
		console.log(expectedOutput);
		let htmlOutput = result.map(x => `<p class="${x.type}">${x.line}</p>`).join("");
		Output.innerHTML = htmlOutput == "" ? "<strong>(No output)</strong>" : htmlOutput;
		if (Equals(result, expectedOutput))
			EnableNext();
		else explanation.textContent = explanationText;
	}
}

function EnableNext() {
	NextButtons.forEach(x => x.removeAttribute("disabled"))
}

function DisableNext() {
	NextButtons.forEach(x => x.setAttribute("disabled", true))
}

function Equals(arr1, arr2) {
	console.log(arr1, arr2)
	if (arr1.length != arr2.length)
		return false;
	for (var i = arr1.length; i--;) {
		if (arr1[i].type != arr2[i].type || arr1[i].line != arr2[i].line)
			return false;
	}

	return true;
}
window.Equals = Equals;
window.NextQuestion = NextQuestion;
NextQuestion();