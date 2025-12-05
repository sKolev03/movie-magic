# movie-magic
SoftUni JS Back-End Course Workshop

## Workshop 1 - Express and Tmaplating

### Setup
 - [x] Initialize Project
 - [x] Add Express Server `npm i express`
 - [x] Add Workshop Resources
 - [x] Setup Handlebars `npm i express-handlebars`
 - [x] Setup Static Files
 - [x] Render Home Page
 - [x] Config Debugging
 - [x] Add Layout
 - [x] Render About Page

---
### Architecture And Dynamic Rendering
 - [x] Add Home Controller
 - [x] Add Movie Data Layer
 - [x] Add Movie Service 
 - [x] Render Movies On Home Page
 - [x] Show No Movies Screen

---
### Create Movie
 - [x] Add Movie Controller
 - [x] Show Create Movie Page
 - [x] Add Routes
 - [x] Add 404 Page
 - [x] Read Body Data
 - [x] Create Movie
   - [x] Add Action
   - [x] Service
   - [x] Add Model Method For Creating Movie
 - [x] Redirect after creation 
 - [x] Add unique id for each created movie

---
### Details
 - [x] Add navigation button for detail page
 - [x] Add route with param for details page
 - [x] GetOne movie from service
 - [x] Find movie by id from model
 - [x] Render details page with dynamic data 

---
### Search
 - [x] Show static search page
 - [x] Render All Movies
 - [x] Modify search form
 - [x] Filter movies
   - [x] By year
   - [x] by genre
   - [x] by title
 - [x] Remember search query

---
### Bonuses
 - [x] Dynamic page title
 - [x] Rating (temp solution)
 - [x] File Presistance


## Workshop 2 - MongoDB Database

### Prerequisites
 - [x] Install MongoDB Community Server
 - [x] Install Compass GUI
 - [ ] Install MongoDB CLI (Optional)

---
### Setup Database
 - [x] Install Mongoose `npm i mongoose`
 - [x] Connect to DB 

---
### Refactor Movies to use mongoose
 - [x] Add movie model
   - [x] Create movie schema
   - [x] Create movie model
 - [x] Import file movies to database
 - [x] Fix own property handlebars problem with lean method
 - [x] General fix for own property problem
 - [x] Refactor details
 - [x] Refactor create
 - [x] Refactor search

---
### Add Cast
 - [x] Add new resources
 - [x] Create Cast Controller
 - [x] Create Cast Page
 - [x] Add Cast model
 - [x] Create Cast Service
 - [x] Create Cast Functionality

---
### Attach Cast to Movie(relations)
 - [x] Add attach cast button
 - [x] Add attach cast page
 - [x] Add dynamic data to cast page
 - [x] Show cast list in attach select
 - [x] Add relation between cast and movie
 - [x] Attach cast functionality

---
### Show Cast Details(population)
 - [x] Get movie casts filtered
 - [x] Show casts on details
 - [ ] Get movie casts using population


---
### Bonuses
 - [ ] Filter casts if they are already attached
 - [ ] Env variables
 - [ ] Name in movie
 - [ ] Back refference from vscode
 - [ ] Add movie views to a folder