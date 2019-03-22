<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../foundation6.5.1/css/foundation.css" />
    <link rel="stylesheet" href="../stylesheets/main.css" />
    <link rel="stylesheet" href="../stylesheets/question.css" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Question</title>
	<script src="../script/monaco.js"></script>
    <script defer type="module" src="../script/questionRenderer.js"></script>
    <script src="../script/userdata.js" defer></script>
</head>
<body>
    <div class="content-container">
        <div class="grid-container full">
            <div class="grid-x grid-margin-x small-up-2">
                <div class="cell">
                    <h1>
                        Question
                    </h1>
                    <hr>
                    <span class="question"></span>
                    <hr>
                    <span class="explanation"></span>
                </div>
                <div class="cell">
                    <h3>
                        Select an awnser
                    </h3>
                    <div class="multiplechoice">
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button disabled class="next">Next</button>

                    </div>
                    <div class="code grid-y">
                        <div class="cell small-5">
                            <div class="editor"></div>
                        </div>
                        <div class="cell small-5">
                            <div class="output"></div>
                        </div>
                        <div class="cell small-2 grid-x grid-marign-x small-up-2 buttonCombo">
                            <div class="cell flex-center">
                                <button class="compile">Compile</button>
                            </div>
                            <div class="cell flex-center">
                                <button disabled class="next">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
