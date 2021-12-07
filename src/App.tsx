// import React from 'react';
import React from 'react';
import './app.scss';
// import DailyEntry from './sidemenu/DailyEntry';

// import Pratice from './components/header/Pratice';
// import { Button, Content } from 'carbon-components-react';
// import Menu from './components/header/Menu';
// import Pratice from './components/header/Pratice';
// import Button1 from './sidemenu/Button1';
import SideMenu from './sidemenu/SideMenu';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import Button1 from './sidemenu/Button1';
// import Demo from './sidemenu/Demo';
// import cx from 'classnames';
function App() {
  return (
    // <Router>
    <SideMenu />

    // {/* <Route exact path="/" component={Demo} /> */}
    // </Router>
  );
}

export default App;
