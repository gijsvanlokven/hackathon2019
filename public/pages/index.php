<!doctype html>
<html class="no-js" lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Learn2Gether</title>
    <link rel="stylesheet" href="../foundation6.5.1/css/foundation.css" />
    <link rel="stylesheet" href="../stylesheets/main.css" />
    <link rel="stylesheet" href="../stylesheets/index.css" />
    <link rel="shortcut icon" href="../img/favicon.ico" />
    <link rel="stylesheet" href="../stylesheets/headerStylePartials.css" />
    <script src="../foundation6.5.1/js/vendor/jquery.js"></script>
    <script src="../foundation6.5.1/js/vendor/what-input.js"></script>
    <script src="../foundation6.5.1/js/vendor/foundation.min.js"></script>
    <script src="../script/randomize.js" defer></script>
    <script src="../script/index.js" defer></script>
    <script src="../script/parralax.js" defer></script>
    <script>
        $(document).foundation();
    </script>
    <script src="../script/userdata.js" defer></script>
    <?php
        include '../partials/footerP1.html';
    ?>
</head>
<body>
    <link rel="stylesheet" href="../stylesheets/footerStylePartials.css" />
    <header>
        <div class="grid-x">
            <div class="cell large-4 profile">
                <img src="../img/no-image.png" class="profilePicture headerProfilePic float-left">
                <h4 class="float-left headerUserName userName">
                    USERNAME
                </h4>
            </div>
            <div class="cell large-4 medium-6 small-12">
            </div>
            <div class="cell large-4 medium-6 small-12 menu-container">
                <div class = align-middle>
                    <ul class="menu float-center align-center">
                        <li class="menu-item"><a href="index.php">HOME</a></li>
                        <li class="menu-item"><a href="contact.php">CONTACT</a></li>
                        <li class="menu-item login"><a href="login.php">LOGIN</a></li>
                        <li class="menu-item"><a href="courses.php">COURSES</a></li>
                        <li class="menu-item profile"><a href="profile.php">PROFILE</a></li>
                        <li class="menu-item profile"><img src="../img/no-image.png" class="profilePicture headerProfilePicMenu"></li>
                    </ul>
                </div>
            </div>
        </header>
        <div id="parallax-container">
            <div></div>
            <div id="parallax-overlay">
                <h1 class="text-center">
                    <span class="randomizeAnimation ltr">Learn</span>
                    <img src="../img/hackaton_logo.png">
                    <span class="randomizeAnimation rtl">Gether</span>
                </h1>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <section id='contentSection'>
            <section id="welcomeContainer">
                <h1>
                    Welcome to Learn2gether!
                </h1>
                <p>
                    Learn2gether is an website where you can learn programming by making excercises that everyone can publish on the website.
                    We as Learn2gether want everyone to be able to learn programming without a problem.
                </p>
            </section>
            <section id="suggestedCoursesContainer">
                <h3>
                    Suggested Courses
                </h3>
                <div class="grid-container" id="suggestedCourses">
                    <div class="grid-x grid-margin-x">
                    </div>
                </div>
            </section>
            <section id="userReviewsContainer">
                <h3>
                    User reviews
                </h3>
                <div class="scrolling-wrapper" id="userReviews">
                    <div class="grid-container">
                        <div class="grid-x">
                            <div class="cell large-3 medium-3 small-3 flex-center">
                                <img src="../img/hackaton_logo.png">
                            </div>
                            <h6 class="cell large-9 medium-9 small-9">
                                Test
                            </h6>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla lacus non vulputate commodo. Phasellus elit est, luctus non tempor quis, faucibus eget nisi. Ut vel risus in augue rutrum ullamcorper sed quis nibh.
                        </p>
                    </div>
                    <div class="grid-container">
                        <div class="grid-x">
                            <div class="cell large-3 medium-3 small-3 flex-center">
                                <img src="../img/hackaton_logo.png">
                            </div>
                            <h6 class="cell large-9 medium-9 small-9">
                                Test
                            </h6>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla lacus non vulputate commodo. Phasellus elit est, luctus non tempor quis, faucibus eget nisi. Ut vel risus in augue rutrum ullamcorper sed quis nibh.
                        </p>
                    </div>
                    <div class="grid-container">
                        <div class="grid-x">
                            <div class="cell large-3 medium-3 small-3 flex-center">
                                <img src="../img/hackaton_logo.png">
                            </div>
                            <h6 class="cell large-9 medium-9 small-9">
                                Test
                            </h6>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla lacus non vulputate commodo. Phasellus elit est, luctus non tempor quis, faucibus eget nisi. Ut vel risus in augue rutrum ullamcorper sed quis nibh.
                        </p>
                    </div>
                    <div class="grid-container">
                        <div class="grid-x">
                            <div class="cell large-3 medium-3 small-3 flex-center">
                                <img src="../img/hackaton_logo.png">
                            </div>
                            <h6 class="cell large-9 medium-9 small-9">
                                Test
                            </h6>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla lacus non vulputate commodo. Phasellus elit est, luctus non tempor quis, faucibus eget nisi. Ut vel risus in augue rutrum ullamcorper sed quis nibh.
                        </p>
                    </div>
                    <div class="grid-container">
                        <div class="grid-x">
                            <div class="cell large-3 medium-3 small-3 flex-center">
                                <img src="../img/hackaton_logo.png">
                            </div>
                            <h6 class="cell large-9 medium-9 small-9">
                                Test
                            </h6>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla lacus non vulputate commodo. Phasellus elit est, luctus non tempor quis, faucibus eget nisi. Ut vel risus in augue rutrum ullamcorper sed quis nibh.
                        </p>
                    </div>
                    <div class="grid-container">
                        <div class="grid-x">
                            <div class="cell large-3 medium-3 small-3 flex-center">
                                <img src="../img/hackaton_logo.png">
                            </div>
                            <h6 class="cell large-9 medium-9 small-9">
                                Test
                            </h6>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla lacus non vulputate commodo. Phasellus elit est, luctus non tempor quis, faucibus eget nisi. Ut vel risus in augue rutrum ullamcorper sed quis nibh.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    <?php
    include '../partials/footerP2.html';
    ?>
    </body>
</html>
