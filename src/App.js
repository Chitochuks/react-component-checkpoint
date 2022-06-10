import './App.css';
import Address from './Component/Address';
import FullName from './Component/FullName';
import ProfilePhoto from './Component/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <h1>Hi, Welcome to my  Profile</h1>
        <ProfilePhoto/>
        <FullName/>
        <Address/>
      </div>
    </div>
  );
}

export default App;
