const { setServers } = require("node:dns/promises");
setServers(["8.8.4.4", "8.8.8.8"]);

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://fenil:root@fenil.1gkqhbx.mongodb.net/blogsite");