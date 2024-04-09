const express = require('express')
const mongoose = require('mongoose')

const app = express();


//connect to mongo db
//mongoose.connect
mongoose.connect('mongodb+srv://patrickwildgen:iiBAp55kbl2nPJwd@cluster0.w3ndrex.mongodb.net/?retryWrites=true&w=majority')
 .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send("Hello welcome to my server")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
  