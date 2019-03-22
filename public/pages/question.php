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
    <?php
        include '../partials/footerP1.html';
        include '../partials/header.html';
    ?>
    <div class="grid-container full">
        <div class="grid-x grid-margin-x small-up-3">
            <div class="cell">
                <span class="question"></span>
            </div>
            <div class="multiple-choice">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button class="next">Next</button>
            </div>
            <div class="cell">
                <div class="code">
                    <div class="editor"></div>
                    <div class="output"></div>
                </div>
            </div>
            <div class="cell">
                <button class="compile"></button>
                <button class="next"> Next</button>
            </div>
        </div>
    </div>
    <?php
        include '../partials/footerP2.html';
    ?>
</body>
</html>
