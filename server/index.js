const express = require('express');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/auth');
const profileRoute = require('./routes/profile');
const accountRouter = require('./routes/account');
const transactionsRoute = require('./routes/transactions');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const csrfProtection = csrf({ cookie: true });

app.use(express.json());
app.use(cookieParser());
app.use(csrfProtection);
app.use(authRoute);
app.use(profileRoute);
app.use(accountRouter.Router);
app.use(transactionsRoute);
app.set('view engine', 'ejs');

app.get('/csrf-token', (req, res) => {
    res.send({
        csrfToken: req.csrfToken()
    });
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});