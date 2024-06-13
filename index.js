const express = require('express');
const indexRoutes = require('./routes/indexRoutes');
const cors = require('cors');

const app = express();

app.use(cors);

app.use(express.json());

app.use(indexRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});