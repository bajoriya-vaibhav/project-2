# Github Search UI
Welcome to the GitHub Search UI! This is a utility-first UI component based on GitHub rest API for fetching users and the information related to them like top repositories.

## Getting Started

### Prerequisites
Before you begin, make sure you have the following software installed on your system:

* Node.js
* npm (Node Package Manager, comes with Node.js)

### Installation

* Clone this repository: git clone https://github.com/bajoriya-vaibhav/project-2
* Navigate to the project directory: cd project-2
* Install the project dependencies: npm install

### Running the App

To start the development server and run the app locally, follow these steps:

* In the project directory, run: npm start
* Open your web browser and go to: http://localhost:3000

## Technologies Used

react
html
css
javascript
jsx
tailwindcss
GitHub Rest API


##Project Structure

* `/public`: Contains images and static assets
* `/src`: Contains the application's source code
* `/components`: Reusable React components
* `/Components/**`:It includes the Navbar,Footer,Loading,Usersearch,Repos(card),User(user page),usercard(for all the users which matches the search). I have used the tailwindcss for styling, for mainting state usestate hook, and usecontext hook for fetching the states and functions managed in GithubContext.
* `/context/**`:It include all the main states and function managed using the createcontext to create a context object so I have created React context for managing state related to fetching and managing GitHub user information and used GitHub API to search for users, fetch user details, and retrieve user repositories. I have also used useReducer to reduce the number of states and made actions in GitHubReducer component.
* App.js: The root component
* index.js: Entry point of the application

## Usage
It helps user to fetch the github related details very easily. It's just for learning purpose not really much benefical and no future scope.

## Author
[Vaibhav Bajoriya](https://github.com/bajoriya-vaibhav)

