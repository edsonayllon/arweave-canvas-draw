import React, {useState} from 'react';
import './App.css';
import { SketchField, Tools } from 'react-sketch';

function App() {
  const [wallet, setWallet] = useState({});
  const [authenticated, setAuthenticated] = useState(false);

  const handleFileUpload = (e) => {
    const filereader = new FileReader();

    filereader.addEventListener('loadend', async e => {
      try {
        const json = JSON.parse(e.target.result);
        await setWallet(json);
        await setAuthenticated(true);
      } catch (err) {
        alert(
          'Something want wrong, make sure you have uploaded the correct file'
        );
        console.log(err);
      }
    });

    filereader.readAsText(e.target.files[0]);
  };

  const handleLogout = () => {
    setWallet({});
    setAuthenticated(false);
  }

  if (authenticated) {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{display:'flex', flexDirection: 'row'}}>
            <span style={{ display: 'flex', borderColor: '#574f7d', borderWidth: '1px', borderStyle: 'solid', height: 50, width: 75, borderRadius: 30, justifyContent: 'center', marginRight: 20 }}>
              <img src="https://image.flaticon.com/icons/svg/214/214275.svg" alt="Credits to Pixel Buddha" hieght="30" width="30" />
            </span>
            <h1 style={{ fontSize: 20 }}>
              Canvas Draw
            </h1>
          </div>
          
          <a
            href="#"
            onClick={handleLogout}
          >
            <span style={{ color: 'white', fontSize: 15, borderSize: 1, borderColor: '#dff0ea', backgroundColor: '#574f7d', padding: 10, paddingLeft: 25, paddingRight: 25, borderRadius: 5 }}>
              Logout
          </span>
          </a>
        </header>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SketchField
            width='1024px'
            height='580px'
            tool={Tools.Pencil}
            lineColor='black'
            lineWidth={3}
          />

        </div>
      </div>
    )
  } else {
    return (
      <div className="App">
        <div style={{ backgroundColor: '#4f3a65', color: '#dff0ea', flex: 1, height: '100%', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
          <h1>Login with your AR Wallet</h1>
          <input type="file" onChange={handleFileUpload} style={{ borderStyle: 'dashed', padding: 30, margin: 50, borderWidth: 5, borderColor: 'rgba(255, 255, 255, 0.25)', display: 'flex', backgroundColor: 'rgba(255, 255, 255, 0.05)' }} />
        </div>
      </div>
    )
  } 
}

export default App;
