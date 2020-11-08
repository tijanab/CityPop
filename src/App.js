import './App.css';
import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          CityPop
        </p>
      </header>
        <Button variant="secondary" size="lg">Search by city</Button>
        <Button variant="secondary" size="lg">Search by country</Button>
    </div>
  );
}

export default App;
