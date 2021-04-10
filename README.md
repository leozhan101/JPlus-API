# JPlus API

## Introduction
JPlus API is the backend component of the JPlus project. It is mainly responsible for providing a list of APIs for its front-end counterpart. It provides many functions, such as authentication and resume content processing. This document will go over how to run this backend project and give a brief description of the responsibilities of each API. 

# Requirments
## Technologies Requirements
- ExpressJS
- Python
- MongoDB
- Nodejs

## System Requirements
It is recommended to use a windows machine since all the work were done in a windows machine

# Deployment
```sh
cd JPlus-api
npm installl
// requirements.txt contains all libraries required for the python program
pip install -r requirements.txt  
npm start 
```

# APIs and Backend engine
The project is mainly written in NodeJS and ExpressJS. However, in order to extract skills from resumes by using natural language processing, Python is chosen to better handle tasks related to artificial intelligence. 

# backend-engine
"backend-engine" is a folder containing a python program, `keywords_extraction_engine.py`. It is used to extract skills from resumes using natural language processing. 

# API
All APIs are located in the folder `routes`
- `authenticationAPIs`： This API is responsible for checking the identity of users who log in through the JPlus Log in page. 
- `checkUsernameAPI`： This API is responsible for checking if a username already exists in the database when a user is registering for a new account
- `registerAPI`：This API is responsible for storing user info into the database when they register a new account
- `retrieveLocationAPI`：This API is reSponsible for returning all locations a user added before 
- `retrieveSkillAPI`:This API is responsible for returning all skills a user added before
- `searchJobAPI`：This API is responsible for finding jobs that match user's skills and their location preferences
- `updateLocationAPI`：This API is responsible for updating a user's locations after they added new locations
- `updateSkillAPI`:This API is responsible for updating a user's skils after they update their skills
- `uploadAPI`:This API is responsible for getting a user's resume, extracting skills from it and put those skills into the database **Notice: This APIs calls keywords_extraction_engine to handle skills extraction from resumes**

## Project Architecture
Please refer to the both front-end README, project reports and project proposal for details regarding when and how each API is called

## License
All license reserved to Wilfrid Laurier University
