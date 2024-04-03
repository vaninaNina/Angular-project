# Angular-project

This is an Angular project for the Angular course, SoftUni. The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12.

# Project Details

Besties' Book Club is an online application that aims to build a community of people who love books and reading and want to share their thoughts in a friendly online environment.

The project is built using the Angular platform and framework for building a single-page application in combination with HTML and Typescript. For the back-end services, the project uses the SoftUni Practice Server which is built for educational purposes.

# Features:

Book Catalog - this collection shows books that are managed only by the administrator of the application. Its aim is to provide the users with suggestions about books which they may want to read in the future together with brief sinopses. Both the users and the guests have access to this catalog and to the details page of each book.

Posts Blog - this part of the application provides our users with the opportunities to share their reviews and thoughts about books, authors and everything related to our passion - reading and discussing our favourite books. The users have the freedom to share their thoughts and comments on all of the posts. Also, they can create, edit, delete their own posts. The guests of our application can review the posts and their comments but they don’t have the options to comment, to create their posts and to edit or delete them.

My Profile - this is the user’s personal area in the web application which they can access after successful login. There they can find personal details and see/access the posts which they have created.

# Installation and Running

Navigate to the server directory:

`cd server`

Start the server:

`node server.js`

Navigate to the project directory by using the terminal:

`cd client`

Install all dependencies needed by running the command below:

`npm install`

Run the client part by:

`ng serve`

Navigate to `http://localhost:4200/`.

# Users and Guests:

Non-registered users have limited access to the site’s features. Full access is granted once they have a registration. They can register with username, email and password.
Users can sign up with their email and password and gain full access to all features.

> For testing purposes, you can use the following user details for login:
> email: peter@abv.bg, password: 123456
