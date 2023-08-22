const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
dotenv.config();

const User = require("./models/User");
const authController = require("./controllers/authController");

// middlewares
app.use(cors());
app.use(express.json());

//db connection
mongoose
  .connect(process.env.mongo_uri)
  .then(() => console.log("DB is connected"))
  .catch((error) => console.log(error));

//api's

app.get(
  "/admin/dashboard",
  authController.authenticateToken,
  async (req, res) => {
    // console.log(req.user.role);
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Access denied" });
    }

    try {
      // Retrieve admin information
      const admin = await User.findOne({ role: "admin" });

      // Retrieve user information
      const users = await User.find({ role: "user" });

      // Return the admin and user information
      res.json({ admin, users, message:"Access success" });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error retrieving admin and user information" });
    }
  }
);

// routes
const userRouter=require("./routes/userRouter")
app.use("/user", userRouter);

//Port
const port = process.env.port;
app.listen(port, () => console.log(`Server is listening on ${port}`));
