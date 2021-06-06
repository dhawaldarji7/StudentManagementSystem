import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddModifyStudentComponent from './components/AddModifyStudentComponent';
import ViewStudentComponent from './components/ViewStudentComponent';
import ListAllStudentsComponent from './components/ListAllStudentsComponent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
          <div className="container">
            <Switch>
              <Route path = "/" exact component = {ListAllStudentsComponent}></Route>
              <Route path = "/students" exact component = {ListAllStudentsComponent}></Route>
              <Route path = "/add-student/:id" exact component = {AddModifyStudentComponent}></Route>
              <Route path = "/view-student/:id" exact component = {ViewStudentComponent}></Route>
            </Switch>
          </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
