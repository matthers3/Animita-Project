import { AboutUs } from './AboutUs';
import { AnimitaHeader } from './AnimitaHeader';
import './css/App.css';
import { ShowCaseGame } from './ShowcaseGame';

function App() {

  return (
    <div className="App h-screen">
      <AnimitaHeader />
      <ShowCaseGame />
      <AboutUs />
    </div>
  );
}

export default App;
