Readme for Hawmps! Project by Todd Clark
public github repo: https://github.com/phred754/hawmps

In the repo you will find create_db.sql which contains all scripts to create a MySQL 8.0 project for the project.
This should also work for MySQL 5.7 if you remove "COLLATE=utf8mb4_0900_ai_ci" from the scripts as this was not supported until 8.0.
The JSON datatype was also not available until version 5.7.8 so any 5.7 version before this will not work with the JSON type in the db.

You will also need the .env file added to the server directory. This file is not in the git repo for security. I will include this file via email.

The app is a vue.js front end with a node.js backend, I used the most up to date versions of these (as of 10/09/2021) installed through npm install on Linux.

The frontend is setup to run from localhost:8080
The backend is setup to listen for requests on localhost:3080

Components -
Home: 
    This is the landing page and also contains the login section.  You can log into the app here.  
    Upon login the username is found in the database and the password is compared to a stored hash stored in the db. 
    User and password information are passed to the backend in headers for security.
    If the password matches the hash, a JWT with a 20 minute expiry is created using NJWT and the HS256 algorithm.  The key is an RSA private key located in the .env file.
    The JWT is then stored on the front end and passed to the backend as Bearer authorization with all calls other than create user, and login.
    If you navigate to this page while logged in it will only display the text information, but the login and create user links will not be available.
    Any attempt to enter a page url manually other than home and create user, without a valid JWT, will route you back to the home page.
Create User:
    This page allows you to create a new user for the app.  The username must be unique and the password fields must match.
    When the user is created the entered password is salted and hashed using BCrypt and the resulting hash is stored into the database.
    Upon successful user creation you will be routed back to the home page to login.
Crew:
    Contains a crew search bar that will search any entered string and return results where that string matches any portion of a crew members name.
DisplayCrew:
    Display of returned information from crew member search.  Clicking on Crew ID in the left column will load additional information about the crew member.
DisplayCrewMember:
    Displays additional information about what role a crew member had in the movie and information pertinent to that role i.e. Character name.
Trailer:
    Embeded trailer for the movie.
About:
    About information.
Navbar:
    Top bar to navigate to other pages or logout. Shown when logged in on all pages. 
    Logout removes the local JWT and user must relogin.
Footer:
    Copyright information displayed at the bottom of all pages.
