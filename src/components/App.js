import React from 'react'
import {Link,Route} from 'react-router-dom'
import StudentInfo from './StudentInfo';
import Home from'./Home'

function App() {
  return (
    <div >
      <h1 style={{textAlign : 'center'}}>DCT - STUDENT TRACKER</h1>
      <Link to="/">Home</Link> |
      <Link to="/studentInfo"> StudentInfo</Link>

      <Route path="/" exact={true} component={Home}/>
      <Route path="/studentInfo" exact={true} component={StudentInfo}/>
      
    </div>
  );
}

export default App;
