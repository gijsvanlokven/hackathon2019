fetch("https://www.energylog.nl/api/user/me")
    .then(function(response) {
        return response.json();
    })
    .then(function(responseJson) {
        responseJson.forEach((json) => {
            updateVariables(json.UserID, json.Experience, json.UserName, user.ProfilePicture)
        });
    });
    
function updateVariables(userID, Experience, UserName, ProfilePicture)
{
    let userNames = document.querySelectorAll(".userName");
    let userIDs = document.querySelectorAll(".userID");
    let profilePictures = document.querySelectorAll(".profilePicture");

    Array.from(userNames).forEach((name) => {
        name.innerHTML = UserName;
    });
    Array.from(userIDs).forEach((user) => {
        user.innerHTML = UserName;
    });
    Array.from(profilePictures).forEach((picture) => {
        picture.src = ProfilePicture;
    });
}