const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

const fakeTaskDatabase = [
    {
        id: '0',
        description: 'Do the dishes'
    },
    {
        id: '1',
        description: 'Walk the dog'
    },
    {
        id: '2',
        description: 'Finish semester project'
    }
]

app.use('/', express.static('../todo-client/dist/todo-client'));

// Get all tasks
app.get('/tasks', (req, res) => {
    // Send fake task data
    // Replace with code that actually gets all tasks from a database
    res.send(fakeTaskDatabase);
});

// Search for a task
app.get('/tasks/search', (req, res) => {
    const searchText = req.query.searchText;
  
    // Search for tasks in fake data
    // Replace with code that actually searches in a database
    const result = [];
    for(const task of fakeTaskDatabase) {
        if(task.description.includes(searchText)) {
            result.push(task);
        }
    }

    res.send(result);
});

 // Get a single task with a specific id
app.get('/tasks/:id', (req, res) => {
    const id = req.params.id;

    // Get task from fake task data
    // Replace with code that actually gets an entry from a database
    const requestedTask = fakeTaskDatabase.find((task) => {
        return task.id === id;
    });

    res.send(requestedTask);
});

// Create new task
app.post('/tasks', (req, res) => {
    const newTask = req.body;

    // Add task to fake data
    // Replace with code that actually inserts the task in a database 
    fakeTaskDatabase.push(newTask);

    res.send(fakeTaskDatabase);
});

// Update or create task with a specific id
app.put('/tasks/:id', (req, res) => {
    const id = req.params.id;
    const updatedTask = req.body;

    // Update task in fake data
    // Replace with code that actually updates task in database 
    const index = fakeTaskDatabase.findIndex((task) => task.id = id);
    fakeTaskDatabase[index] = updatedTask;

    res.send(fakeTaskDatabase);
});

// Delete task with a specific id
app.delete('/tasks/:id', (req, res) => {
    const id = req.params.id;

    // Remove task in fake data
    // Replace with code that actually deletes task in database
    const index = fakeTaskDatabase.findIndex((task) => task.id === id);
    fakeTaskDatabase.splice(index, 1);
    res.send(fakeTaskDatabase);
});

app.listen(3000, () => {
    console.log('Listen on port 3000...');
});

