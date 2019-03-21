///<reference types="./monaco.d.ts">

const QuestionText = document.querySelector(".question"),
	CodeScreen = document.querySelector(".code"),
	Output = document.querySelector(".output"),
	CompileButton = document.querySelector(".compile"),
	MultipleChoiceScreen = document.querySelector(".multiplechoice"),
	CodeEditor = document.querySelector(".editor");
const url = `${location.protocol}//${location.host}/api/`;


let expectedOutput = [];
let NextQuestionID = 2;
let Language = "javascript";

let editor = monaco.editor.create(CodeEditor, {
	theme: 'vs-dark',
	model: monaco.editor.createModel("test();", Language),
	minimap: true,
});

editor.layout();


CompileButton.addEventListener("click", CompileCode);



async function NextQuestion() {
	console.log("Next Question: " + NextQuestionID)
	if (NextQuestionID != "END") {
		let body = await fetch(url + "questions/" + NextQuestionID);
		let question = await body.json();
		QuestionChange(question);
	} else console.log("End of course reached");
}

function QuestionChange(question) {
	QuestionText.textContent = question.question;

	if (question.Type == "Code") {
		editor.getModel().setValue(question.Template.join("\n"));
		expectedOutput = question.CorrectOutput;
		if (question.NextQuestion)
			NextQuestionID = question.NextQuestion;
		else NextQuestionID = "END";
	}
}


function CompileCode() {
	if (Language == "javascript") {
		let compiler = new Function(`let Output = [];
		let console = {};
		console.log = (...args) => Output.push({
			type: 'log',
			line: args.join(' ')
		});
		console.error = (...args) => Output.push({
			type: 'error',
			line: args.join(' ')
		});
		console.warn = (...args) => Output.push({
			type: 'warning',
			line: args.join(' ')
		});
		
		try {
			${editor.getModel().getValue()}
		} catch (error) {
			console.error(error);
		}
		
		return Output;`);

		let result = compiler();

		console.log(result);
		console.log(expectedOutput);
		Output.innerHTML = result.map(x => `<p class="${x.type}">${x.line}</p>`).join("")
		if (Equals(result, expectedOutput))
			NextQuestion();
		else console.warn("Wrong answer");
	}
}

function Equals(arr1, arr2) {
	if (arr1.length != arr2.length)
		return false;
	for (var i = arr1.length; i--;) {
		if (arr1[i].type == arr2[i] && arr1[i].line == arr2[i].line)
			return false;
	}

	return true;
}
window.NextQuestion = NextQuestion;
NextQuestion();