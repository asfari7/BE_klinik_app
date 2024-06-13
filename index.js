const express = require('express');
const indexRoutes = require('./routes/indexRoutes');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'https://klinik-app.vercel.app',
    methods: 'GET,POST,PATCH,DELETE',
    allowedHeaders: 'Content-Type, Authorization, X-Requested-With',
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(indexRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});