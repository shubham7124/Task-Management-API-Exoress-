**Task Management API**</br>
This is a RESTful API for managing tasks, supporting user registration, authentication, task assignment, and filtering/search functionalities. The API is built using Node.js, Express.js, and MySQL.</br>

 A) Installation</br>
       1 Prerequisites</br>
          Node.js</br>
       2  Setup</br>
           Clone the repository:</br>
                git clone https://github.com/yourusername/task-management-api.git</br>
                cd task-management-api</br>
       3  Install dependencies:</br>
                npm install</br>
       4 Configure environment variables:</br>
            Create a .env file in the root of the project and add the following variables:</br>
                DB_HOST=localhost</br>
                DB_USER=root</br>
                DB_PASSWORD=yourpassword</br>
                DB_NAME=taskMan</br>
                JWT_SECRET=yourjwtsecret</br>
        5 Run the application:</br>
                npm start</br>
              
B) The API will be available at http://localhost:3000.</br>

C) API Endpoints</br>
    User Authentication</br>
      Register: POST /api/register</br>
      Login: POST /api/login</br>
   Task Management</br>
     Create Task: POST /api/tasks</br>
     Get All Tasks: GET /api/tasks</br>
     Update Task: PUT /api/tasks/:taskId</br>
     Delete Task: DELETE /api/tasks/:taskId</br>
 Filtering and Searching</br>
    Filter Tasks: GET /api/tasks?status=Todo&priority=High</br>
    Search Tasks: GET /api/tasks?search=keyword</br>
