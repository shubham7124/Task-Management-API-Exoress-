<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Management API README</title>
</head>
<body>
    <h1>Task Management API</h1>
    <p>This is a RESTful API for managing tasks, supporting user registration, authentication, task assignment, and filtering/search functionalities. The API is built using Node.js, Express.js, and MySQL.</p>
    
    <h2>A) Installation</h2>
    
    <h3>1. Prerequisites</h3>
    <ul>
        <li>Node.js</li>
    </ul>
    
    <h3>2. Setup</h3>
    <p>Clone the repository:</p>
    <pre><code>git clone https://github.com/yourusername/task-management-api.git
cd task-management-api
    </code></pre>
    
    <h3>3. Install dependencies:</h3>
    <pre><code>npm install</code></pre>
    
    <h3>4. Configure environment variables:</h3>
    <p>Create a <code>.env</code> file in the root of the project and add the following variables:</p>
    <pre><code>DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=taskMan
JWT_SECRET=yourjwtsecret
    </code></pre>
    
    <h3>5. Run the application:</h3>
    <pre><code>npm start</code></pre>
    
    <h2>B) The API will be available at</h2>
    <p><a href="http://localhost:3000">http://localhost:3000</a></p>
    
    <h2>C) API Endpoints</h2>
    
    <h3>User Authentication</h3>
    <ul>
        <li><strong>Register:</strong> <code>POST /api/register</code></li>
        <li><strong>Login:</strong> <code>POST /api/login</code></li>
    </ul>
    
    <h3>Task Management</h3>
    <ul>
        <li><strong>Create Task:</strong> <code>POST /api/tasks</code></li>
        <li><strong>Get All Tasks:</strong> <code>GET /api/tasks</code></li>
        <li><strong>Update Task:</strong> <code>PUT /api/tasks/:taskId</code></li>
        <li><strong>Delete Task:</strong> <code>DELETE /api/tasks/:taskId</code></li>
    </ul>
    
    <h3>Filtering and Searching</h3>
    <ul>
        <li><strong>Filter Tasks:</strong> <code>GET /api/tasks?status=Todo&priority=High</code></li>
        <li><strong>Search Tasks:</strong> <code>GET /api/tasks?search=keyword</code></li>
    </ul>
</body>
</html>
