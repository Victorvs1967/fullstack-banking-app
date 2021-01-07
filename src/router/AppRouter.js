import { Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile';
import Logout from '../components/Logout';
import Account from '../components/Account';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <div className="container">
                <Switch>
                    <PublicRoute path="/" component={Login} exact={true} />
                    <PublicRoute path="/register" component={Register} />
                    <PrivateRoute path="/account" component={Account} />
                    <PrivateRoute path="/profile" component={Profile} />
                    <PrivateRoute path="/logout" component={Logout} />
                </Switch>
            </div>
        </div>
    </Router>
);

export default AppRouter;