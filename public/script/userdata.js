fetch("https://www.energylog.nl/api/user/me")
    .then(function(response) {
        return response.json();
    })
    .then(function(responseJson) {
        updateVariables(responseJson.UserID, responseJson.Experience, responseJson.UserName, responseJson.ProfilePicture)
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