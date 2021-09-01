import React , { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Page404 from './components/Page404';
import Sidebar from './components/Sidebar';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <GlobalStyle />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Page404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
