const express = require('express');
const cors = require('cors');

//init a new server called app
const app = express();

//add cors as a middleware
app.use(cors());

//handler for login route. send back a JSON containing a token
app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});

//run the server on port 8080
app.listen(8080, () => {
    console.log('API is running on http://localhost:8080/login')
});
