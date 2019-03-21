<!doctype html>
<html class="no-js" lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Learn2Gether</title>
    <link rel="stylesheet" href="../foundation6.5.1/css/foundation.css" />
    <link rel="stylesheet" href="../stylesheets/profile.css" />
    <link rel="shortcut icon" href="../img/favicon.ico" />
</head>
<body>
<script src="../foundation6.5.1/js/vendor/jquery.js"></script>
<script src="../foundation6.5.1/js/vendor/what-input.js"></script>
<script src="../foundation6.5.1/js/vendor/foundation.min.js"></script>
<script src="../script/tabs.js" defer></script>
</body>
<?php
include '../partials/footerP1.html';
include '../partials/header.html';
?>
<div class="grid-container">
    <div class="grid-x grid-margin-x cell-block-y">
        <div class="large-3 large-offset-1 medium-10 medium-offset-1 small-12">
            <img src="../img/anonymous.jpg" class="profilePicture ">
            <h4 class="text-center text">
                name
            </h4>
            <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h4 class="text-center text">
                achievements
            </h4>
            <div>
                <img src="../img/anonymous.jpg" class="achievementPicture">
                <img src="../img/anonymous.jpg" class="achievementPicture">
                <img src="../img/anonymous.jpg" class="achievementPicture">
            </div>
        </div>
        <div class="radio-tabs large-6 medium-10 medium-offset-1 small-12" role="tablist">
            <input class="state" type="radio" title="Starks" name="houses-state" id="starks" role="tab" aria-controls="starks-panel" aria-selected="true" checked />
            <input class="state" type="radio" title="Lanisters" name="houses-state" id="lannisters" role="tab" aria-controls="lannisters-panel" />

            <div class="tabs" aria-hidden="true">
                <label for="starks" id="starks-tab" class="tab" aria-selected="true">Activity</label>
                <label for="lannisters" id="lannisters-tab" class="tab">Completed Courses</label>
            </div>
            <div class="panels">
                <ul id="starks-panel" class="panel active" role="tabpanel" aria-labelledby="starks-tab">
                    <h1>
                        Content 1
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    </p>
                </ul>
                <ul id="lannisters-panel" class="panel" role="tabpanel" aria-labelledby="lannisters-tab">
                   <h1>
                       Content 2
                   </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.o
                    </p>
                </ul>
            </div>
        </div>
    </div>
</div>
<?php
include '../partials/footerP2.html';
?>
</html>
