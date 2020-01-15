const express = require('express');

const app = express();

// indica que está usando json no body
app.use(express.json());


app.get('/users', (req, res) => {
    // query Params
    console.log(req.query);

    // query Params
    console.log(req.params);

    // Body
    console.log(req.body);
    


    return res.json({ message: 'Hello World'});
});

app.listen(3333);