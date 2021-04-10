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

## Indeed API
Indeed API is an open source API provided by Indeed for searching job informations based on queries provided by the the users.

[Indeed Job Search API](https://opensource.indeedeng.io/api-documentation/docs/job-search/)

# Deployment
```sh
cd JPlus-api
npm installl
// requirements.txt contains all libraries required for the python program
pip install -r requirements.txt  
npm start 
```

# How to run APIs
The best way is to use postman for your testing. If you like, you could also use 
```
// checkout app.js for all apis
localhost:9000/SOMEAPI
```

For details on inputs and outputs, please refer to the APIs and Backend engine section, or alternatively, refer to the project report which includes screenshots of calling APIs using postman (each screenshot includes API name, endpoint URL, input and output. 

# APIs and Backend engine
The project is mainly written in NodeJS and ExpressJS. However, in order to extract skills from resumes by using natural language processing, Python is chosen to better handle tasks related to artificial intelligence. 

# backend-engine
"backend-engine" is a folder containing a python program, `keywords_extraction_engine.py`. It is used to extract skills from resumes using natural language processing. 

# API
All APIs are located in the folder `routes`
- `authenticationAPIs`： This API is responsible for checking the identity of users who log in through the JPlus Log in page. 
  - Input: username and password
  - Output: return true and user's firstname if a user is in database
- `checkUsernameAPI`： This API is responsible for checking if a username already exists in the database when a user is registering for a new account
  - Input: Username
  - Output: return true if a username already exists in database (That is, a user should use another username)
- `registerAPI`：This API is responsible for storing user info into the database when they register a new account. **Notice: This is where passwords were encrpyted**:  
  - Input: username, firstname, lastname, password
  - Output:return success after adding user info into database
- `retrieveLocationAPI`：This API is reSponsible for returning all locations a user added before 
  - Input: username
  - Output: return all locations a user added before
- `retrieveSkillAPI`:This API is responsible for returning all skills a user had
  - Input: username
  - Output: return all skills a user had
- `searchJobAPI`：This API is responsible for finding jobs that match user's skills and their location preferences. **Notice: This is where Indeed API was called**
  - Input: skills and locations
  - Output: return a list of jobs
- `updateLocationAPI`：This API is responsible for updating a user's locations after they added new locations
  - Input: username and locations
  - Output: return success after updating locations in database
- `updateSkillAPI`:This API is responsible for updating a user's skils after they update their skills
  - Input: username and skills
  - Output: return success after updating skills in database
- `uploadAPI`:This API is responsible for getting a user's resume, extracting skills from it and put those skills into the database **Notice: This APIs calls keywords_extraction_engine to handle skills extraction from resumes**
  - Input: username and resume
  - Output: return success after successfully adding skills extracted from resume into database

## Project Architecture
Please refer to the both project reports, or project proposa, or project presentation slides for details regarding when and how each API is called

## License
All license reserved to Wilfrid Laurier University
