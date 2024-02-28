# Backend

Whatever we created till now, what ever we can see that is called Frontend (HTML, CSS, JS)

Now we want to talk about the Backend - Logic of the application.

- Save the data - Database
- Use that data on multiple devices
- One place to have all logic and data

## How do backend and frontend connect?

### What is a **server**?

A server a computer which is present on another location and it is running the website

### How do they connect?

The frontend will **request** the webiste or the webpage from my server.

The server will **respond** with the data, or the website

This is called as the **Request-Response Model**

## URL

URL - Uniform Resource Locator

This will tell me where is the server (or where is my data)

-> Address of where is the data: address of the internet

### API

API - Application Programming Interface

Whenever I want to connect my client (frontend) and server (backend) I do that using API

### Rest API

Rest - Representational State Transfer

### Methods - CRUD

1. **GET**: Help me get data from the server
2. **POST**: Help me post or send data to the server
3. **PATCH/PUT**: Help me update/change data on the server
4. **DELETE**: Help me delete data on the server

### Status Code / Response Code

Tell us about the response from the server.

- 200 - The response was successful
- 300 - Redirection
- 400 - The user(client/frontend) made some error
- 500 - The server(backend) made some error

## What happens when we type in the URL bar

- How does the request work?

Whenever you want to go somewhere, there are multiple steps and multiple ways. How will we select the best?

That is what happens whenever we send the request.

1. Request will go to your ISP(internet service provider) and ISP will redirect(send) to **DNS server**
2. Our URL is converted into **IP address** using DNS lookup
3. We will go to multiple steps(nodes) and get to the server.

4. Server will process our request and find the response(think about what do I want to send)
5. Follow the same process and send data to the frontend (UI)

All of this happens in a few milliseconds

- What happens in the UI?

1. We get HTML and we convert HTML into `HTML DOM`
2. We search for `link` tag and get CSS and convert it into `CSS DOM`
3. Then we look at the script tags and get all the JS and execute it in the browser

## Express and Nodejs

We use another language or a form of a language made using JS called as `Node.js`

- What does Node.js help us do?

`Node.js` will help us run/execute JavaScript outside our browser, in a backend environemnt, in our terminal

### How does Node.js do it?

It creates an environment for JS to run

Beacuse of this, we can use JS to build backend and to build API.

### Express

Express is a framework which is based on Node.js and it will make it easier for you to write own APIs.

It provides more abstraction - hide details, make it easy, hide the complexity

### npm

`npm - Node Package Manager`

This will help us get the code of other developer in our code so we don't have to write the same thing again and again.

Developers create complex code which other people can use - convert their code into `package` and publish them

Since my code depends on other people's code, their code is called as `dependencies`

- You never push(upload) node_modules folder to git or any other version control - Because it can be created again.

### How can I implement it?

I can create a new file called `.gitignore` and add my file/folder name in that

### To initialize express project

1. import express
2. create application using `app = express()`
3. create routes or path using `app.get()`
4. start listening using `app.listen()`

## Structure

### MVC Architecture

- Model
- View - Routes
- Controller
