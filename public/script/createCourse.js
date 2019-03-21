let editorWindows = document.getElementsByClassName("editorWindow");

for(let editorWindow in editorWindows)
{
    let editor = monaco.editor.create(editorWindows[editorWindow], {
        theme: 'vs-dark',
        model: monaco.editor.createModel("Type your code in here!", "HTML"),
        minimap: true,
    });
    
    editor.layout();
}

