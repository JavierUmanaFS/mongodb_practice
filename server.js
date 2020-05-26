const express = require("express");
const usersRouter = require("./routes/users");
const contactsRouter = require("./routes/contacts");
const authRouter  = require("./routes/auth");

const server = express();

server.use(express.json());
server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/contacts", contactsRouter);

const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => res.send({ message: "Welcome to the ContactKeeper API "}));

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));