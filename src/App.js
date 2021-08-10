import './App.css';
import Add_Another_Keyword from './components/Add_Another_Keyword';
import API_list from './components/API_list';
import Filters from './components/Filters';
import Header from './components/Header';
import SideCol from './components/SideCol';

function App() {
  return (
    <div className="top">
      <p>Add Keyword</p>
      <div className="app-container">
        <SideCol />
        <div className="sub-container">   
          <Header />
          <Add_Another_Keyword />
          <Filters />
          <API_list />
        </div>
      </div>
    </div>
  );
}

export default App;
