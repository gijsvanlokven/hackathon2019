CREATE TABLE UserCourse (
    UserID INT,
    CourseID INT
);

CREATE TABLE UserAccount (
    UserID INT AUTO_INCREMENT primary key,
    GoogleID VARCHAR(39),
    GithubID VARCHAR(39),
    Experience INT,
    UserName VARCHAR(40),
    ProfilePicture TEXT,
    Email VARCHAR(255)
);

CREATE TABLE Course (
    CourseID int AUTO_INCREMENT primary key,
    Name VARCHAR(40),
    Description TEXT,
    Language VARCHAR(40),
    Rating INT,
    OwnerID INT
);

CREATE TABLE Achievement (
    UserID INT,
    Name VARCHAR(40)
);

CREATE TABLE Question (
    QuestionID INT AUTO_INCREMENT primary key,
    CourseID INT,
    Question TEXT,
    DATA TEXT
);

CREATE TABLE Activity (
    UserID INT,
    Type VARCHAR(55),
    Description TEXT
);

ALTER TABLE UserCourse
ADD CONSTRAINT FK_UserAccountUserCourse
FOREIGN KEY (UserID) REFERENCES UserAccount(UserID);

ALTER TABLE UserCourse
ADD CONSTRAINT FK_CourseUserCourse
FOREIGN KEY (CourseID) REFERENCES Course(CourseID);

ALTER TABLE Course
ADD CONSTRAINT FK_UserAccountCourse
FOREIGN KEY (OwnerID) REFERENCES UserAccount(UserID);

ALTER TABLE Achievement
ADD CONSTRAINT FK_UserAccountAchievement
FOREIGN KEY (UserID) REFERENCES UserAccount(UserID);

ALTER TABLE Question
ADD CONSTRAINT FK_CourseQuestion
FOREIGN KEY (CourseID) REFERENCES Course(CourseID);

ALTER TABLE Activity
ADD CONSTRAINT FK_UserAccountActivity
FOREIGN KEY (UserID) REFERENCES UserAccount(UserID);
