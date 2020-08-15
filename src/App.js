import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout'
import FirstPage from './container/FirstPage/FirstPage'
import Second from './container/Second/Second'
import Third from './container/Third/Third'
import {Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/third' component={Third}></Route>
          <Route path='/second' component={Second}></Route>
          <Route path='/' component={FirstPage}></Route>
          <Route render={()=><h1>404 not found</h1>}></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
