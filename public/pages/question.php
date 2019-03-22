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
                    <span class="question"></span>
                    <hr>
                    <span class="explanation"></span>
                </div>
                <div class="cell">
                    <div class="multiplechoice">
                        <label class="button">
                            <button></button>
                        </label>
                        <label class="button">
                            <button></button>
                        </label>
                        <label class="button">
                            <button></button>
                        </label>
                        <label class="button">
                            <button></button>
                        </label>
                        <label class="button">
                            <button class="next">Next</button>
                        </label>
                    </div>
                    <div class="code">
                        <div class="editor"></div>
                        <div class="output"></div>
                    </div>
                    <button class="compile"></button>
                    <button class="next"> Next</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
