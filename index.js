const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors({
    "origin": "*"
}));
const port = 3000;
app.get(/api/v1/welcome, (req, res) => {
    res.send('Hola Mundos de Jenkins');
});
app.listen(port, () => {
    console.log('Server is running on: http://localhost:${port}');
});