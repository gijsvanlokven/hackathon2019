CREATE TABLE UserCourse (
    UserID INT,
    CourseID INT
)

CREATE TABLE UserAccount (
    UserID INT AUTO_INCREMENT(1,1),
    GoogleID VARCHAR(39),
    GithubID VARCHAR(39),
    Experience INT,
    UserName VARCHAR(40),
    ProfilePicture TEXT,
    Email VARCHAR(255)
)

CREATE TABLE Course (
    CourseID int AUTO_INCREMENT(1,1),
    Name VARCHAR(40),
    Description TEXT,
    Language VARCHAR(40),
    Rating INT,
    OwnerID INT
)

CREATE TABLE Achievement (
    UserID INT,
    Name VARCHAR(40)
)

CREATE TABLE Question (
    QuestionID INT AUTO_INCREMENT(1,1),
    CourseID INT,
    Question TEXT,
    DATA TEXT
)

CREATE TABLE Activity (
    UserID INT,
    Type VARCHAR(55),
    Description TEXT
)
