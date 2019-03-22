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
    <div class="grid-container">
        <div class="grid-x grid-margin-x">
            <p class="text-center large-6 large-offset-3">
                <span class="question"></span>
                <span class="explenation"></span>
            </p>
            <div class="code large-12 medium-12 small-12" style="opacity: 1;">
                <div class="editor large-6" style="height: 100vh; flex: 1;"></div>
                <div class="output large-6" style="min-width: 25vw;"></div>
                <div class=" large-6 large-offset-3 medium-6">
                    <button class="compile float-center button">Compile</button>
                    <button class="next float-center button" disabled>next</button>
                </div>
            </div>
            <div class="multiplechoice">
                <button class="next button" disabled>next</button>
            </div>
        </div>
    </div>
    <?php
        include '../partials/footerP2.html';
    ?>
</body>
</html>
