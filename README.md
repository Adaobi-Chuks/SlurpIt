# SlurpIt

# Overview
This contains the code source for the [SlurpIt](https://post-its.onrender.com) API which is located at the link below
```
https://slurpit.onrender.com
```
#### This API is designed to manage operations on a SlurpIt app by providing services for managing employees, categories, products and registered users.

## The API has four main components:

- Categories: Allows for creating, updating, getting a user with the use of id or the user's handle, getting all users, loging in a user, logging out a user, deleting users who can access the API.
- Products: Allows for creating, updating, getting a post, getting all of a user's posts either with an id or with the user's handle and deleting of posts.
- User: Allows for performing action on the user .
- Employee: Contains details of all the employee details and their access level.

## Requirements
Some important requirements were implemented in the api. Navigate [here](/requirements.md) to view the listed requirements implemented and reasons for them.

# How To Use
- Clone the repo 
- cd into the directory such that you are in `post-it`.
- Create a new MongoDB database and copy your DATABASE_URI
- Create a .env file at the root of the folder and include your DATABASE_URI and a secret_key to generate tokens in the file in the format below
```
DATABASE_URI = {The DATABASE_URI you created}
SECRET = {Your secret keyword}

```
- To run the solution, make sure you have [nodejs](https://nodejs.org/) installed.
- Use the following command in your terminal to initialize the applicationa and to install the necessary dependencies.
```
npm install
nodemon
```

# Testing Endpoints
- You need to have Postman or any other similar app or extension installed to test this API.
- You can make a request from you local computer or through the live endpoint
- If you're using the live endpoint then your {base url} is
```
https://post-its.onrender.com
```
- If you're using your cloned app then your {base url} is
```
https://localhost:9871
```
- Ensure to input the right userId, postId or commentId when making your tests.

GOODLUCK 😎❤.