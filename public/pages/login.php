<!doctype html>
    <html class="no-js" lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Learn2Gether</title>
        <link rel="stylesheet" href="../foundation6.5.1/css/foundation.css" />
        <link rel="stylesheet" href="../stylesheets/login.css" />
        <link rel="shortcut icon" href="../img/favicon.ico" />
        <script src="../foundation6.5.1/js/vendor/jquery.js"></script>
        <script src="../foundation6.5.1/js/vendor/what-input.js"></script>
        <script src="../foundation6.5.1/js/vendor/foundation.min.js"></script>
        <link rel="import" href="../partials/header.html">
        <script>
            $(document).foundation();
        </script>
    </head>
    <body>
        <?php
                include '../partials/footerP1.html';
                include '../partials/header.html';
        ?>
        <div class="grid-container">
            <form class="grid-x grid-margin-x align-center login-container">
                <div class="large-4 large-offset-4 medium-4 medium-offset-4 small-12 float-center">
                    <button type="submit" name="lGoogle" class="button float-center">Login Google</button>
                </div>
                <div class="large-4 large-offset-4 medium-4 medium-offset-4 small-12 float-center">
                    <button type="submit" name="lGithub" class="button float-center">Login Github</button>
                </div>
            </form>
        </div>
        <?php
            include '../partials/footerP2.html'
        ?>
    </body>
</html>
