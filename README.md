# Social Network API

## Table of Contents
+ [Description](#description)
+ [User Story](#userstory)
+ [Acceptance Criteria](#acceptance)
+ [Installation](#installation)
+ [Usage](#usage)
+ [License](#license)
+ [Video & Screenshots](#screenshots)
+ [Contact Me](#contact)
+ [Notes](#notes)
##

<a id='description'></a>
## Description

As a current student, I wanted to create social network api using a NoSQL database that would help a site handle large amounts of unstructured data.  The api would allow for users, thoughts and reactions to be created, updated and deleted in the database.
##

<a id='userstory'></a>
## User Story

AS A social media startup\
I WANT an API for my social network that uses a NoSQL database\
SO THAT my website can handle large amounts of unstructured data
##

<a id='acceptance'></a>
## Acceptance Criteria

GIVEN a social network API\
WHEN I enter the command to invoke the application\
THEN my server is started and the Mongoose models are synced to the MongoDB database\
WHEN I open API GET routes in Insomnia for users and thoughts\
THEN the data for each of these routes is displayed in a formatted JSON\
WHEN I test API POST, PUT, and DELETE routes in Insomnia\
THEN I am able to successfully create, update, and delete users and thoughts in my database\
WHEN I test API POST and DELETE routes in Insomnia\
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
##

<a id='installation'></a>
## Installation
Please use command lines "npm i" and "npm start".  Once the server is running, you can access the api at localhost.\
Watch the walk through video on, [YouTube](https://youtu.be/5fiwiHfIDHg)
##

<a id='usage'></a>
## Usage
This app is meant to help the user quickly and easily add/update/remove users, thoughts, friends and reactions.
##

<a id='license'></a>
## License:  NONE
##

<a id='screenshots'></a>
## Screenshots:
##

![](https://github.com/jenstem/tech-blog/blob/main/public/assets/login.png) <br>
*This is a screenshot of a GET request*
##

![](https://github.com/jenstem/tech-blog/blob/main/public/assets/blogpost.png) <br>
*This is a screenshot of a POST request*
##

<a id='contact'></a>
## Contact Me
Email:  jennifer.stemkowski@gmail.com <br>
GitHub URL:  https://github.com/jenstem

##
<a id='notes'></a>
## Notes:

I received help on most files from a tutor, [Scott Everett](https://calendly.com/fsf-tutor-team/scott-everett?month=2023-06).

I borrowed code for my email validator from [StackOverflow.com](https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax).

I borrowed and changed code for my model files from [StackOverflow.com](https://stackoverflow.com/questions/40694689/set-defaultvalue-to-todays-date-in-a-sequelize-migration).