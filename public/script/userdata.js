updateVariables();

fetch("https://www.energylog.nl/api/user/me")
    .then(function (response) {
        if (response.ok)
            return response.json();
        else updateVariables();
    })
    .then(function (responseJson) {
        updateVariables(responseJson.UserID, responseJson.Experience, responseJson.UserName, responseJson.ProfilePicture)
    })
    .catch(function () {
        updateVariables();
    });

function updateVariables(userID, Experience, UserName, ProfilePicture) {
    let userNames = document.querySelectorAll(".userName");
    let userIDs = document.querySelectorAll(".userID");
    let profilePictures = document.querySelectorAll(".profilePicture");

    if (!userID) {
        document.querySelectorAll(".login").forEach(x => x.style.display = "none");
        document.querySelectorAll(".profile").forEach(x => {
            x.style = "";
        })
    }
    userNames.forEach((name) => {
        if (UserName != null) {
            name.innerHTML = UserName;
        } else {
            name.innerHTML = "No username";
        }
    });
    userIDs.forEach((user) => {
        if (userIDs != null) {
            user.innerHTML = userID;
        } else {
            name.innerHTML = "No UserID";
        }
    });
    Array.from(profilePictures).forEach((picture) => {
        if (ProfilePicture != null) {
            picture.src = ProfilePicture;
        } else {
            picture.src = "../img/no-image.png";
        }
    });
}