const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./connect/connectDB')

require('dotenv').config();
app.use("/uploads", express.static(__dirname + "/uploads"));


const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB()

app.use("/users",require('./routes/userRoutes'))
app.use("/courses",require('./routes/CoursesRoutes'))
app.use("/contact",require('./routes/contactRoutes'))

app.listen(port, () => console.log(`Serveur is running on port: ${port}`));