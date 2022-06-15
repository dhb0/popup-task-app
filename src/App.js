import { useEffect } from 'react';
import SideBar from './components/side-bar/SideBar';
import MainBody from './components/main-body/MainBody';
import { useSelector } from 'react-redux';
import './App.css';

const App = () => {
  const settings = useSelector(
    (state) => state.settings
  );

  useEffect(() => {
    localStorage.setItem("popupGeneralSettings", JSON.stringify(settings));
  }, [settings]);
  
  return (
    <div className="App">
      <SideBar />
      <MainBody />
    </div>
  );
}

export default App;
