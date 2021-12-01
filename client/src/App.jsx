import { Switch } from 'react-router-dom'

// Routes
import Public from './routes/Public'
import Private from './routes/Private'
import AdminControl from './routes/Admin'

// Pages
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import Admin from "./pages/admin/admin";
import WaitingRoom from "./pages/waitingRoom/wiatingRoom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Private path='/' component={Home} exact />
        <Private path='/waitingRoom' component={WaitingRoom} />
        <Public path='/login' component={Login} />
        <Public path='/signup' component={SignUp} />
        <AdminControl path='/admin' component={Admin} />
      </Switch>
    </div>
  );
}

export default App;
