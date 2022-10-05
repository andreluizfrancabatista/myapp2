const express = require('express')
const app = express()
const port = process.env.port || 3000

app.get('/', (req, res) => {
    res.send("Hello World2");
});

app.get('/:animal/:id', (req, res) => {
    res.send(`Você escolheu ${req.params.animal} com o número ${req.params.id}`)
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
