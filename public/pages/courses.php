<!doctype html>
<html class="no-js" lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Learn2Gether</title>
        <link rel="stylesheet" href="../foundation6.5.1/css/foundation.css" />
        <link rel="stylesheet" href="../stylesheets/main.css" />
        <link rel="stylesheet" href="../stylesheets/courses.css" />
        <link rel="stylesheet" href="../stylesheets/headerStylePartials.css" />
        <script src="../foundation6.5.1/js/vendor/jquery.js"></script>
        <script src="../foundation6.5.1/js/vendor/what-input.js"></script>
        <script src="../foundation6.5.1/js/vendor/foundation.min.js"></script>
        <script src="../foundation6.5.1/js/vendor/foundation.min.js"></script>
        <script src="../script/userdata.js"></script>
        <script src="../script/courses.js"></script>
        <script>
            $(document).foundation();
        </script>
    </head>
    <body>
        <?php
            include '../partials/footerP1.html';
            include "../partials/header.html";
        ?>
        <section id='contentSection'>
            <section id="coursesContainer">
                <div class="grid-container full" id="coursesConfigBar">
                    <div class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-4" >
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell">
                            <div class="clickContainer">
                                <img src="../img/plus.svg">
                                <a href="createCourse.php">Create a course</a>
                            </div>
                        </div>
                        <div class="cell">
                            <div class="clickContainer">
                                <img src="../img/question.svg">
                                Suggest a course
                            </div>
                        </div>
                    </div>
                </div>
                <h3>
                    Courses
                </h3>
                <div id="coursesWrapper" class="grid-container full">
                    <div class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-4" >
                        
                    </div>
                </div>
            </section>
        </section>
        <?php
            include '../partials/footerP2.html';
        ?>
    </body>
</html>
