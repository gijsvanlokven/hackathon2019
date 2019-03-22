<!doctype html>
<html class="no-js" lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Learn2Gether</title>
        <link rel="stylesheet" href="../foundation6.5.1/css/foundation.css" />
        <link rel="stylesheet" href="../stylesheets/main.css" />
        <link rel="stylesheet" href="../stylesheets/profile.css" />
        <link rel="shortcut icon" href="../img/favicon.ico" />
        <script src="../foundation6.5.1/js/vendor/jquery.js"></script>
        <script src="../foundation6.5.1/js/vendor/what-input.js"></script>
        <script src="../foundation6.5.1/js/vendor/foundation.min.js"></script>
        <script src="../script/profile.js"></script>
        <script src="../script/userdata.js"></script>
    </head>
    <body>
        <?php
            include '../partials/footerP1.html';
            include '../partials/header.html';
        ?>
        <section id='contentSection'>
            <div class="grid-container full">
                <div class="grid-x">
                    <div class="large-6 medium-12 small-12 profileBox">
                        <div class="cell marginBox">
                            <h4 class="text userName">
                                Username
                            </h4>
                            <img class="profilePicture" src="../img/anonymous.jpg" class="profilePicture ">
                        </div>
                        <div class="cell marginBox">
                            <h4 class="text">
                                Achievements
                            </h4>
                            <div class="grid-container full achievementContainer">
                                <div class="grid-x small-up-6 align-center">
                                    <div class="cell">
                                        <img src="../img/anonymous.jpg" class="achievementPicture float-center">
                                    </div>
                                    <div class="cell">
                                        <img src="../img/anonymous.jpg" class="achievementPicture float-center">
                                    </div>
                                    <div class="cell">
                                        <img src="../img/anonymous.jpg" class="achievementPicture float-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="radio-tabs large-6 medium-12 small-12" role="tablist">
                        <h4 class="text-center">
                            Completed Courses
                        </h4>
                        <div class="grid-container">
                            <div class="grid-x grid-margin-x large-up-3 medium-up-3 small-up-3" id="CompletedCourses">
                            <!--    <div class="cell">
                                    <img src="../img/anonymous.jpg" class="completed-img float-center">
                                    <h4 class="completed-text float-center">
                                        HTML
                                    </h4>
                                    <p class="text-center">
                                        FORM Basics
                                    </p>
                                </div>
                                <div class="cell">
                                    <img src="../img/anonymous.jpg" class="completed-img float-center">
                                    <h4 class="completed-text">
                                        HTML
                                    </h4>
                                    <p class="text-center">
                                        FORM Advanced
                                    </p>
                                </div>
                                <div class="cell">
                                    <img src="../img/anonymous.jpg" class="completed-img float-center">
                                    <h4 class="completed-text">
                                        CSS
                                    </h4>
                                    <p class="text-center">
                                        Selectors
                                    </p>
                                </div>
                                <div class="cell">
                                    <img src="../img/anonymous.jpg" class="completed-img float-center">
                                    <h4 class="completed-text">
                                        HTML
                                    </h4>
                                    <p class="text-center">
                                        FORM Basics
                                    </p>
                                </div>
                                <div class="cell">
                                    <img src="../img/anonymous.jpg" class="completed-img float-center">
                                    <h4 class="completed-text">
                                        HTML
                                    </h4>
                                    <p class="text-center">
                                        FORM Advanced
                                    </p>
                                </div>
                                <div class="cell">
                                    <img src="../img/anonymous.jpg" class="completed-img float-center">
                                    <h4 class="completed-text">
                                        CSS
                                    </h4>
                                    <p class="text-center">
                                        Selectors
                                    </p>
                                </div>
                              -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <?php
            include '../partials/footerP2.html';
        ?>
    </body>
</html>
