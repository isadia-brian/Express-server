// Import the 'express' module
import express from "express";
const app = express();
const PORT = 5000;
app.use(express.json());
app.get("/", (req, res) => {
    res.status(200);
    res.send("Welcome to root URL of server");
});
app.get("/hello", (req, res) => {
    res.set("Content-Type", "text/html");
    res.status(200).send("<h1>Hello from the other side</h1>");
});
app.get("/about", (req, res) => {
    res.status(200);
    res.send("Welcome to about page url for the server");
});
app.post("/post-route", (req, res) => {
    const { name } = req.body;
    res.send(`Welcome ${name}`);
});
app.listen(PORT, () => {
    // Log a message when the server is successfully running
    console.log(`Server is running on http://localhost:${PORT}`);
});
