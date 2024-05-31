import express from "express";
// allows us to use dotenv values that we defined (sensitive information like username and password)
import dotenv from "dotenv";
// Configurationt to read our enviroment variables
dotenv.config();
import grades from "./routes/grades.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

// Connect to DB
// import "./db/conn.mjs";

// JSON middleware
app.use(express.json());

// Grades Routes
app.use("/api/grades", grades);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Grades API.</h1>");
});

//Global Error Handling Middlware
app.use((err, req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

// Start the Express Server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
