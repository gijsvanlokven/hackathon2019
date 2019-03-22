<!doctype html>
    <html class="no-js" lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Learn2Gether</title>
        <link rel="stylesheet" href="../foundation6.5.1/css/foundation.css" />
        <link rel="stylesheet" href="../stylesheets/main.css" />
        <link rel="stylesheet" href="../stylesheets/login.css" />
        <link rel="shortcut icon" href="../img/favicon.ico" />
        <script src="../foundation6.5.1/js/vendor/jquery.js"></script>
        <script src="../foundation6.5.1/js/vendor/what-input.js"></script>
        <script src="../script/userdata.js" defer></script>
        <script src="../foundation6.5.1/js/vendor/foundation.min.js"></script>
        <link rel="import" href="../partials/header.html">
        <script>
            $(document).foundation();
        </script>
    </head>
    <body>
        <?php
                include '../partials/header.html';
                include '../partials/footerP1.html';
        ?>
        <form class="login-container">
            <h4>
                Login
            </h4>
            <p>
                Click here to login with either github or google. When you login you get
                access to multiple features on learn2gether.
            </p> 
            <div class="grid-container full">
                <div class="grid-x grid-margin-x align-center ">
                    <div class="small-12 float-center">
                        <a href="/api/auth/google/" name="lGoogle" class="button float-center">Login Google</a>
                    </div>
                    <div class="small-12 float-center">
                        <a href="/api/auth/github/" name="lGithub" class="button float-center">Login Github</a>
                    </div>
                </div>
            </div>
        </form>
        <?php
            include '../partials/footerP2.html'
        ?>
    </body>
</html>
