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
        if(UserName != null)
        {
            name.innerHTML = UserName;
        }
        else
        {
            name.innerHTML = "No username";
        }
    });
    Array.from(userIDs).forEach((user) => {
        if(userIDs != null)
        {
            user.innerHTML = userID;
        }
        else
        {
            name.innerHTML = "No UserID";
        }
    });
    Array.from(profilePictures).forEach((picture) => {
        if(ProfilePicture != null)
        {
            picture.src = ProfilePicture;
        }
        else
        {
            picture.outerHTML = "No Picture";
        }
    });
}