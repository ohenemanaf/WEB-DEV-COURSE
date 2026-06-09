import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
app.get("/about", (req, res) => {
  res.send(`
    <h1>About Page</h1>
    <p>This is a simple Express server example.</p>
    <p>It demonstrates how to set up routes and send responses.</p>
    `);
});
app.get("/contact", (req, res) => {
  res.send(`
    <h1>Contact Page</h1>
    <p>Email:ohenemanaf@gmail.com</p>
    <p>Phone: +234 803 123 4567</p>
    `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
