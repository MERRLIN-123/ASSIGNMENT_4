# ASSIGNMENT_4
# MongoDB - CRUD OPERARTIONS:
<h1> INTRODUCTION :</h1>
  This README provides an overview and explanation of the code snippets persented.
  The Topic is : THE PUBLIC LIBRARY MANAGEMENT SYSTEMS
  It demonstrates a basic CRUD Operation like [Creat,Read,Update,Delete] operations using HTML, JS,NODE JS and MongoDB as the Database.
  The Public Library Management System is a web application that helps manage the operations of a public library. It uses a NoSQL database for storing and retrieving data, providing a flexible and scalable solution for library management.
  
## PREREQUISITIES :
 Before running the code, make sure you have the following installed:
 
  ## 1. MongoDB: 
    MongoDB is a popular open-source NoSQL database management system that provides a flexible and scalable approach to storing and retrieving data. 
    It is designed to handle large volumes of data and allows for high-performance, real-time querying.
  You can use either any one of these components:
          MongoShell, MongoCompass, MongoAtlas
   Here,we are using MongoShell (MONGOSH)     
        Versions used are:
         	  • Using MongoDB:          6.0.4
            • Using Mongosh:          1.8.0
        To configure MongoDB, we need to modify the MongoDB configuration file called `mongod.conf`.
   Here are the steps to configure MongoDB:
1. Locate the `mongod.conf` file: The location of the configuration file depends on the installation method and the operating system you are using.
 The default locations are:
   - Linux: `/etc/mongod.conf`
   - Windows: `C:\Program Files\MongoDB\Server\<version>\bin\mongod.cfg`
2. Open the `mongod.conf` file in a text editor.
3. Modify the configuration options according to your requirements. Here are some commonly modified options:
   - **bindIp**: Specify the IP addresses or network interfaces on which MongoDB should listen for incoming connections. By default, MongoDB listens on all available network interfaces (`0.0.0.0`).
   - **port**: Specify the port number on which MongoDB should listen for incoming connections. The default port is `27017`.
   - **dbPath**: Specify the directory where MongoDB should store its data files.
   - **logpath**: Specify the path to the MongoDB log file.
   - **security.authorization**: Enable or disable authentication and authorization for MongoDB.
   - **replication**: Configure replication settings if you are setting up a replica set.
   - **sharding**: Configure sharding settings if you are setting up a sharded cluster.
   Make sure to follow the guidelines and best practices provided in the MongoDB documentation when configuring these options.
4. Save the changes to the `mongod.conf` file.
5. Restart the MongoDB service to apply the configuration changes.
   - On Linux, you can restart the MongoDB service using the following command:
   ```
   sudo service mongod restart
   ```
   - On Windows, you can restart the MongoDB service from the Services console or by using the following command:
   ```
   net stop MongoDB
   net start MongoDB
   ```
After restarting the MongoDB service, it will use the updated configuration settings. Ensure that the configuration changes are applied correctly by checking the MongoDB logs for any error messages or warnings.

Note: It's important to be cautious while modifying the MongoDB configuration file and to ensure that the changes align with the recommended configuration practices and your specific use case.
 Prerequisities for MOngoDB:
    1. Operating System Compatibility
    2. System Requirements
    3. Command Line Interface (CLI)
    4. Network Access:
    5. Database Design
Key features of MongoDB:
    1. Document-oriented
    2.  Scalability
    3. High-performance
    4. Flexible data model
    5. Querying and Aggregation
    6. Replication and Fault tolerance
    7. Full-text search
    8. Integration and Ecosystem
    
  ## 2. VS Code:      
     •	A web server or framework capable of handling HTTP requests (e.g., Express.js for Node.js)
     •  Visual Studio Code (VS Code) is a free and open-source source code editor developed by Microsoft. It provides a lightweight and versatile environment for writing, editing, and debugging code across various programming languages and platforms.
        
  Prerequisities for MOngoDB:
    1. Operating System Compatibility
    2. System Requirements
    3. Internet Connection
    4. Installation
    5. Supported Programming Languages
    6. Version Control System
 Key features of Visual Studio Code:
    1. Intuitive User Interface
    2. Extensibility
    3. Integrated Terminal
    4. Debugging
    5. Git Integration
    6. IntelliSense
    7. Customization
    8. Cross-platform Support
    
## Features
- User registration and authentication: Users can create an account and log in to access the library system.
- Book management: Allows librarians to add, edit, and delete books from the library catalog.
- Member management: Enables librarians to manage library members, including adding, updating, and removing member records.
- Borrowing and returning books: Facilitates the borrowing and returning of books by library members, with appropriate validations and checks.
- Search functionality: Allows users to search for books based on various criteria such as title, author, or genre.
- Reservation system: Allows members to reserve books that are currently unavailable.

## Technologies Used

- Node.js: JavaScript runtime environment.
- Express.js: Web application framework for Node.js.
- MongoDB: NoSQL database for data storage.
- Mongosh: MongoDB object modeling library.
- HTML/CSS: Front-end development.
- Bootstrap: CSS framework for responsive design.
- Passport.js: Authentication middleware for Node.js.
- Handlebars: Templating engine for rendering views.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/MERRLIN-123/ASSIGNMENT_4.git
   ```
2. Navigate to the project directory:
   ```
   cd public-library-management
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up the MongoDB database:
   - Install MongoDB: [Installation guide](https://docs.mongodb.com/manual/installation/)
   - Create a MongoDB database and update the database connection configuration in `config/app.js`.
5. Start the application:
   ```
   nodemon app.js
   ```
6. Open a web browser and access the application at `http://localhost:8000`.

## WORKING STEPS:
    The provided code is written in HTML and uses a templating language to dynamically generate the web page content. Here's an explanation of the different parts:

**HTML Structure**
The code begins with the standard HTML structure. It defines the document type, the HTML language, and includes the necessary metadata in the <head> section.

The <body> section contains the main content of the page.

**Page Title and Heading**
The <h1> element displays the title of the page, which is "Mongodb CRUD Example".

**Create Operation**
The code checks if the edit_id variable is present. If it is, the page displays an edit form. Otherwise, it displays a create form.

**Edit Form**
If the edit_id variable is present, the code displays an edit form. The form's action attribute specifies the endpoint to handle the form submission for updating a book with the given edit_id.

The form contains two input fields: title and author. The values of these input fields are pre-populated with the existing book's title and author (edit_book.title and edit_book.author respectively).

**Create Form**
If the edit_id variable is not present, the code displays a create form. The form's action attribute specifies the endpoint to handle the form submission for creating a new book.

The form also contains two input fields: title and author.

**Book List**
The code uses a loop ({{#each books}}) to iterate over a list of books.

For each book, it generates an <li> element containing the book's title and author. It also includes two links: "Edit" and "Delete". The "Edit" link includes the book's _id as a query parameter (edit_id={{this._id}}) to identify which book to edit. The "Delete" link includes the book's _id as a query parameter (delete_id={{this._id}}). It also includes an onclick event to show a confirmation dialog before deleting the book.

**Templating Syntax**
The code uses a templating language (not specified in the code snippet) to insert dynamic values into the HTML. The placeholders ({{message}}, {{#if edit_id}}, `

{{edit_id}}, {{edit_book.title}}, {{edit_book.author}}, {{#each books}}, {{this.title}}, {{this.author}}`) are replaced with actual values when the page is rendered.
  
## Usage

- Register a new book with existing credentials.
- Navigate through the different sections of the application to manage books, members, and borrowing operations.
- Use the search functionality to find specific books.
- Reserve books that are currently unavailable.
- Log out when finished.

## CONCLUSION:
  
   This code snippet demonstrates a basic web application that allows users to perform CRUD operations (Create, Read, Update, Delete) on a collection of books stored in a MongoDB database. It provides forms for creating new books and editing existing ones, as well as displaying a list of books with options to edit or delete each book.

## Contributing

  Contributions are welcome! If you have any suggestions or improvements, please submit a pull request or open an issue.
  
## Acknowledgments

- The Public Library Management System is built on the knowledge and skills gained from various online tutorials and resources.
