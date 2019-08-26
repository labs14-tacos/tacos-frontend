# tacos-frontend

# Let's Get Tacos!

You can find the deployed project at [time4tacos.com](https://time4tacos.com/)

## Contributors


|                                       [Megan Jones](https://github.com/meginks)                                        |                                       [Raine Wallace](https://github.com/RaineBeauDubs)                                        |                                       [Anthony Johnson](https://github.com/AntMan242)                                        |                                       [David Martinson](https://github.com/pdxdave)                                        |                                                                           |
| :---------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|                      [<img src="https://avatars2.githubusercontent.com/u/38929577?s=400&v=4" width = "200" />](https://github.com/meginks)                       |                      [<img src="https://media.licdn.com/dms/image/C4E03AQG-9BA9baxKhw/profile-displayphoto-shrink_800_800/0?e=1571875200&v=beta&t=IGvB99cZ-oRRHHD4Ky_hQbG5IbZpjm6mwv2k_v7et2I" width = "200" />](https://github.com/RaineBeauDubs)                       |                      [<img src="https://media.licdn.com/dms/image/C5603AQF_ObGDuwFeFw/profile-displayphoto-shrink_800_800/0?e=1572480000&v=beta&t=qeP4I3j2RCmGIrKxxHIqM3iXFmHdGie6wyMu_WphkxM" width = "200" />](https://github.com/AntMan242)                       |                      [<img src="https://media.licdn.com/dms/image/C4E03AQFQQYFYo7Gzzw/profile-displayphoto-shrink_200_200/0?e=1572480000&v=beta&t=qkhlLYUQeQzKh8Kvq7vAGZSsfk2KXeYharmhK_DJ090" width = "200" />](https://github.com/pdxdave)                       |                                          |
|                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/meginks)                 |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/RaineBeauDubs)             |           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/AntMan242)            |          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/pdxdave)                               
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/megan-jones123/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/raine-wallace//) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/anthony-johnson24/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/martinson/) | 

<br>
<br>


## Project Overview

[Trello Board](https://trello.com/b/zbzXSDqM/labs-14-lets-get-tacos-taco-log)

[Product Canvas](https://www.notion.so/1-Feature-Canvas-released-8-20-2019-d97e76a57db94db388ee3afce6e680bf)


Let's Get Tacos is a web application for taco connoisseurs that will allow users to log and rate tacos from their favorite restaurants.  This would include a description of the taco (e.g., ingredients), a picture, and a system consisting of five different rating criteria. The long term goal for Let's Get Tacos is to turn it into a full-fledged social media experience.  Users will be able to share pictures and descriptions of tacos as well as locations of great taco restaurants.  Moreover, they will be able to plan taco eating events with other users.


### Key Features

-    Log a taco description selecting form more than 70 ingredients
-    Take a picture of a taco and post it with the description
-    View taco logs from other users
-    Edit and delete taco logs
-    Create a custom user profile 

## Tech Stack

### Front end built using:
    React

Why did you choose this framework?

-    Reusable components
-    Fast rendering
-    Interactive UI
-    Simple state management



#### Front end deployed to `time4tacos.com`

#### [Back end](https://github.com/labs14-tacos/tacos-backend) built using:

#### Node JS / Express

-    Simplicity
-    Scalability
-    Flexibility

#### Knex

-    SQL query builder for Postgres, MySQL, Oracle, SQLite3 and more
-    Features traditional node style callbacks as well as a promise interface
-    Prevents SQL injections


# APIs

## Firebase authO

Firebase Authentication gives backend services, simple to-use SDKs, and instant UI libraries to confirm clients over your application. It supports authentication using passwords, email id or username.

## Material-UI


Material Design is a design language that Google developed in 2014. Expanding on the "card" motifs that debuted in Google Now, Material Design uses more grid-based layouts, responsive animations and transitions, padding, and depth effects such as lighting and shadows


## React-moment

We used react-moment for the date library


# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

SKIP_PREFLIGHT_CHECK  
REACT_APP_BACKEND_URL_USERS  
REACT_APP_FIREBASE_API_KEY  
REACT_APP_AUTH_DOMAIN  
REACT_APP_BACKEND_URL  

# Testing

We used Jest for testing. Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.

# Installation Instructions

Yarn install and yarn start. For environment variables, please contact one of the contributors listed at the top of this readme.

## Other Scripts

replace these examples with your own

    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \* eject - copy the configuration files and dependencies into the project so you have full control over them

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/labs14-tacos/tacos-backend) for details on the backend of our project.
