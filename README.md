<pre>Task Management API 
    This is a RESTful API for managing tasks, supporting user registration, authentication, task assignment, and filtering/search functionalities. The API is built using Node.js, Express.js, and MySQL.

A) Installation
   1 Prerequisites
       Node.js
2 Setup
   Clone the repository:
     git clone https://github.com/yourusername/task-management-api.git
     cd task-management-api
3 Install dependencies:
    npm install
4 Configure environment variables:
   Create a .env file in the root of the project and add the following variables:
        DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=yourpassword
        DB_NAME=taskMan
        JWT_SECRET=yourjwtsecret
5 Run the application:
        npm start

B) The API will be available at http://localhost:3000.

C) API Endpoints
User Authentication
    Register: POST /api/register
    Login: POST /api/login
Task Management
    Create Task: POST /api/tasks
    Get All Tasks: GET /api/tasks
    Update Task: PUT /api/tasks/:taskId
    Delete Task: DELETE /api/tasks/:taskId
Filtering and Searching
    Filter Tasks: GET /api/tasks?status=Todo&priority=High
    Search Tasks: GET /api/tasks?search=keyword
</pre>
