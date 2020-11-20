import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
  Redirect
} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Home,
  //TokenSale,
  Roadmap,
  Governance,
  Indexes
} from './components/package';
import Topbar from './components/generic/topbar';
import Footer from './components/generic/footer';

ReactDOM.render(
  <Router basename="/">
      <Topbar />
      <Switch>
        <Route exact path="/" component={ Home } />
        {/* <Route path="/tokensale" component={ TokenSale } />
        <Route path="/whitepaper" component={ Whitepaper } /> */}
        <Route path="/roadmap" component={ Roadmap } />
        <Route path="/governance" component={ Governance } />
        <Route path="/indexes" component={ Indexes } />
        <Route render={() => <Redirect to={{pathname: "/"}} />} />
      </Switch>
      <Footer />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
