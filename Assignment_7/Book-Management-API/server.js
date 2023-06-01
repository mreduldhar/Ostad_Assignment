const express=require('express')
const app=express()
const helmet=require('helmet')
const cors=require('cors')
const morgan=require('morgan')
const mongoose=require('mongoose');
require("dotenv").config();
const bookRoutes=require('./routes/bookRoutes')
const port = process.env.PORT;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet())

app.use('/books', bookRoutes);



// Connect to MongoDB
mongoose.connect(process.env.DATABASE,{family:4})
    .then(() => {
        app.listen(port, () => {
            console.log(`Server Running on port ${port}`);
        });
    }).catch((err) => console.log(err));

