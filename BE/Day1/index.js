const express = require("express");

const app = express();

app.get("users", (req, res) => {
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    res.send("ok");
});

app.listen(8000, () => {
    console.log("Server is listening on port 3000");
    }
);
