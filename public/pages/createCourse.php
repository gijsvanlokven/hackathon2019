<!doctype html>
<html class="no-js" lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Learn2Gether</title>
        <link rel="stylesheet" href="../foundation6.5.1/css/foundation.css" />
        <link rel="stylesheet" href="../stylesheets/main.css" />
        <link rel="stylesheet" href="../stylesheets/createCourse.css" />
        <script src="../foundation6.5.1/js/vendor/jquery.js"></script>
        <script src="../foundation6.5.1/js/vendor/what-input.js"></script>
        <script src="../foundation6.5.1/js/vendor/foundation.min.js"></script>
        <script src="../script/monaco.js"></script>
        <script src="../script/createCourse.js" defer></script>
        <script>
            $(document).foundation();
        </script>
        <link rel="stylesheet" href="../stylesheets/headerStylePartials.css" />
    </head>
    <body>
        <section id="errorBox">
        </section>
        <?php
            include '../partials/footerP1.html';
            include "../partials/header.html";
        ?>
        <section id='contentSection'>
            <form id="createForm">
                <div class="grid-container full">
                    <div class="grid-x large-up-1">
                        <div class="cell">
                            <div class="cell">
                                <h3>
                                    New Course
                                </h3>
                            </div>
                            <div class="cell">
                                <label for="">Course name</label>
                            </div>
                            <div class="cell">
                                <input type="text" placeholder="Fill here your course name in..">
                            </div>
                            <div class="cell">
                                <label for="">Course description</label>
                            </div>
                            <div class="cell">
                                <textarea name="" cols="10" rows="10" placeholder="Fill here your course description in.."></textarea>
                            </div>
                            <div class="cell">
                                <label for="">Image</label>
                            </div>
                            <div class="cell">
                                <div class="uploadContainer grid-container full">
                                    <div class="grid-x">
                                        <div class="cell small-6 flex-center-vertical">
                                            <label class="uploadButton">
                                                <input type="file" accept=".png,.jpg,.jpeg">
                                                <div class="grid-container">
                                                    <div class="grid-x">
                                                        <div class="cell small-2">
                                                            <img src="../img/cloud-computing.svg" alt="">
                                                        </div>
                                                        <div class="cell small-10 flex-center">
                                                            <span>Upload a file</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div class="cell small-6">
                                            <img class="uploadImg">
                                        </div>
                                        <div class="cell small-12">
                                            <span class="filename"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--
                            Multiple Choice Section
                        -->
                        <div question="1" class="cell multipleChoiceSection">
                            <div class="cell">
                                <h3>
                                    Question 1:
                                </h3>
                            </div>
                            <div class="cell">
                                <label for="">Question type</label>
                            </div>
                            <div class="cell">
                                <select name="question1Type" class="questionType">
                                    <option value="multiple-choice">Multiple choice</option>
                                    <option value="code">Code</option>
                                </select>
                            </div>
                            <div class="cell">
                                <label for="">Question</label>
                            </div>
                            <div class="cell">
                                <input type="text" name="question1" placeholder="Fill here your question in..">
                            </div>
                            <div class="cell">
                                <label for="">Answers</label>
                            </div>
                            <div class="cell grid-x grid-margin-x medium-up-2 small-up-1 answerBox">
                                <div class="cell grid-x">
                                    <div class="cell small-10">
                                        <input type="text" placeholder="Answer 1.." name="question1answer1">
                                    </div>
                                    <div class="cell small-2 flex-center">
                                        <div>
                                            <label class="customCheckbox" >
                                                <input type="checkbox" name="question1CheckboxAnswer1">
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="cell grid-x">
                                    <div class="cell small-10">
                                        <input type="text" placeholder="Answer 2.." name="question1answer2">
                                    </div>
                                    <div class="cell small-2 flex-center">
                                        <div>
                                            <label class="customCheckbox" >
                                                <input type="checkbox" name="question1CheckboxAnswer1">
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="cell grid-x">
                                    <div class="cell small-10">
                                        <input type="text" placeholder="Answer 3.." name="question1answer3">
                                    </div>
                                    <div class="cell small-2 flex-center">
                                        <div>
                                            <label class="customCheckbox" >
                                                <input type="checkbox" name="question1CheckboxAnswer1">
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="cell grid-x">
                                    <div class="cell small-10">
                                        <input type="text" placeholder="Answer 4.." name="question1answer4">
                                    </div>
                                    <div class="cell small-2 flex-center">
                                        <div>
                                            <label class="customCheckbox" >
                                                <input type="checkbox" name="question1CheckboxAnswer1">
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--
                            Code Section
                        -->
                        <div question="2" class="cell codeSection">
                            <div class="cell">
                                <h3>
                                    Question 2:
                                </h3>
                            </div>
                            <div class="cell">
                                <label for="">Question type</label>
                            </div>
                            <div class="cell">
                                <select name="question2Type" class="questionType">
                                    <option value="multiple-choice">Multiple choice</option>
                                    <option selected value="code">Code</option>
                                </select>
                            </div>
                            <div class="cell">
                                <label for="">Programming Langauge</label>
                            </div>
                            <div class="cell">
                                <select name="question2Type" class="programmingLangauge">
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
                                    <textarea name="question2Article">In here you can write your article</textarea>
                                </div>
                                <div class="cell editorWindow" name="question2Editor">

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
                                        <select name="question2typeError1">
                                            <option value="error">Error</option>
                                            <option value="log">Log</option>
                                            <option value="warning">Warning</option>
                                        </select>
                                    </div>
                                    <div class="cell">
                                        <label for="" class="lowerLabel">Expected Answer</label>
                                    </div>
                                    <div class="cell">
                                        <input type="text" name="question2expectedAnswer1" placeholder="Fill here the answer that you expect to see in the console..">
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
                    </div>
                </div>
            </form>
            <div class="cell grid-x small-up-2 addOrRemoveBox addOrRemoveBox-margin">
                <div class="cell">
                    <div class="clickContainer" onclick="createQuestion()">
                        <img class="buttonAdd" src="../img/plus.svg" alt=""> Add a new question
                    </div>
                </div>
                <div class="cell">
                    <div class="clickContainer" onclick="removeQuestion()">
                        <img class="buttonRemove" src="../img/minus.svg" alt=""> Remove last question
                    </div>
                </div>
            </div>
        </section>
        <?php
            include '../partials/footerP2.html';
        ?>
    </body>
</html>
