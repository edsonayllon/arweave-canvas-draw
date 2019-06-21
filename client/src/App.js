import React from 'react';
import './App.css';
import { SketchField, Tools } from 'react-sketch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{fontSize: 20}}>
          Canvas Collection
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ color: 'white', fontSize: 15, borderSize: 1, borderColor: '#dff0ea', backgroundColor: '#574f7d', padding: 10, paddingLeft: 25, paddingRight: 25, borderRadius: 5}}>
            Save
          </span>
        </a>
      </header>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <a href="#">
          <span style={{ display: 'flex', borderColor: '#95adbe', borderWidth: '1px', borderStyle: 'solid', height: 50, width: 75, borderRadius: 30, justifyContent: 'center', margin: 20 }}>
            <img src="https://image.flaticon.com/icons/svg/214/214275.svg" hieght="30" width="30" />
          </span>
        </a>
        
        <SketchField
          width='1024px'
          height='400px'
          tool={Tools.Pencil}
          lineColor='black'
          lineWidth={3}
        />
        
      </div>
    </div>
  );
}

export default App;
