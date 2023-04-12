const express = require('express');
const app = express();

app.use('/', express.static('../todo-client/dist/todo-client'));

app.listen(3000, () => {
    console.log('Listen on port 3000...');
});

