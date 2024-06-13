const express = require('express');
const cors = require('cors');
const app = express();
const indexRoutes = require('./routes/indexRoutes');

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 204
}));

app.options('*', cors());

app.use(express.json());

app.use(indexRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
