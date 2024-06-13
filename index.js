const express = require('express');
const indexRoutes = require('./routes/indexRoutes');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization,Origin,X-Requested-With,Accept,Access-Control-Allow-Origin',
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(indexRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});