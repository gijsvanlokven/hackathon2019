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
        <header>
            <?php include "../partials/header.html" ?>
        </header>
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
                                <textarea name="" id="" cols="30" rows="10" placeholder="Fill here your course description in.."></textarea>
                            </div>
                            <div class="cell">
                                <label for="">Image</label>
                            </div>
                            <div class="cell">
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
                        </div>
                        <div class="cell">
                            <div class="cell">
                                <h3>
                                    Question 1:
                                </h3>
                            </div>
                            <div class="cell">
                                <label for="">Question type</label>
                            </div>
                            <div class="cell">
                                <select name="" id="">
                                    <option value="">Multiple choice</option>
                                    <option value="">Code</option>
                                </select>
                            </div>
                            <div class="cell">
                                <label for="">Question</label>
                            </div>
                            <div class="cell">
                                <input type="text" placeholder="Fill here your question in..">
                            </div>
                            <div class="cell">
                                <label for="">Answers</label>
                            </div>
                            <div class="cell grid-x grid-margin-x medium-up-2 small-up-1 awnserBox">
                                <div class="cell grid-x">
                                    <div class="cell small-10">
                                        <input type="text" placeholder="Awnser 1..">
                                    </div>
                                    <div class="cell small-2 flex-center">
                                        <div>
                                            <label class="customCheckbox" >
                                                <input type="checkbox" name="question2">
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="cell grid-x">
                                    <div class="cell small-10">
                                        <input type="text" placeholder="Awnser 2..">
                                    </div>
                                    <div class="cell small-2 flex-center">
                                        <div>
                                            <label class="customCheckbox" >
                                                <input type="checkbox" name="question2">
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="cell grid-x">
                                    <div class="cell small-10">
                                        <input type="text" placeholder="Awnser 3..">
                                    </div>
                                    <div class="cell small-2 flex-center">
                                        <div>
                                            <label class="customCheckbox" >
                                                <input type="checkbox" name="question2">
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="cell grid-x">
                                    <div class="cell small-10">
                                        <input type="text" placeholder="Awnser 4..">
                                    </div>
                                    <div class="cell small-2 flex-center">
                                        <div>
                                            <label class="customCheckbox" >
                                                <input type="checkbox" name="question2">
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cell">
                        <div class="cell">
                            <h3>
                                Question 2:
                            </h3>
                            </div>
                            <div class="cell">
                                <label for="">Question type</label>
                            </div>
                            <div class="cell">
                                <select name="" id="">
                                    <option value="">Code</option>
                                    <option value="">Multiple choice</option>
                                </select>
                            </div>
                            <div class="cell">
                                <label for="">Code editor</label>
                            </div>
                            <div class="cell grid-x medium-up-2 small-up-1 codeQuestion">
                                <div class="cell">
                                    <textarea name="">In here you can write your article</textarea>
                                </div>
                                <div class="cell editorWindow"></div>
                            </div>
                            <div class="cell">
                                <label for="">Awnser</label>
                            </div>
                            <div class="cell">
                                <label for="" class="lowerLabel">Awnser Type</label>
                            </div>
                            <div class="cell">
                                <select name="" id="">
                                    <option value="">Error</option>
                                    <option value="">Log</option>
                                    <option value="">Warning</option>
                                </select>
                            </div>
                            <div class="cell">
                                <label for="" class="lowerLabel">Expected Awnser</label>
                            </div>
                            <div class="cell">
                                <input type="text" placeholder="Fill here the awnser that you expect to see in the console..">
                            </div>
                            <div class="cell grid-x small-up-1 addOrRemoveBox">
                                <div class="cell">
                                    <img class="buttonAdd" src="../img/plus.svg" alt=""> Add a new awnser
                                </div>
                                <div class="cell">
                                <img class="buttonAdd" src="../img/minus.svg" alt=""> Remove an awnser
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
        <footer id="grid-container">
            <div class="grid-x grid-margin-x">
                <div class="cell large-4 medium-4 small-12">
                    <img src="../img/hackaton_logo.png" class="float-center">
                </div>
                <div class="grid-y cell large-4 medium-4 small-6">
                    <div class="cell large-3 medium-3 small-3">
                        Test
                    </div>
                    <div class="cell large-3 medium-3 small-3">
                        Test
                    </div>
                    <div class="cell large-3 medium-3 small-3">
                        Test
                    </div>
                    <div class="cell large-3 medium-3 small-3">
                        Test
                    </div>
                </div>
                <div class="grid-y cell large-4 medium-4 small-6">
                    <div class="cell large-3 medium-3 small-3">
                        Test
                    </div>
                    <div class="cell large-3 medium-3 small-3">
                        Test
                    </div>
                    <div class="cell large-3 medium-3 small-3">
                        Test
                    </div>
                    <div class="cell large-3 medium-3 small-3">
                        Test
                    </div>
                </div>
            </div>
        </footer>
    </body>
</html>