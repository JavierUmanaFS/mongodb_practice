const express = require("express");
const connectDB = require("./config/db");

const usersRouter = require("./routes/users");
const contactsRouter = require("./routes/contacts");
const authRouter  = require("./routes/auth");

const server = express();

connectDB();

server.use(express.json({ extended: false}));

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/contacts", contactsRouter);

const Port = process.env.Port || 5000;

server.get('/', (req, res) => {
  res.send({ message: "Welcome to the ContactKeeper API "})
});

server.listen(Port, () => console.log(`Server running on port ${Port}`));


