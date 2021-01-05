const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/auth');
const profileRoute = require('./routes/profile');
const accountRouter = require('./routes/account');
const transactionsRoute = require('./routes/transactions');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.set('view engine', 'ejs');
app.use(cors());
app.use(authRoute);
app.use(accountRouter.Router);
app.use(transactionsRoute);
app.use(profileRoute);

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});