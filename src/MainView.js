import { AboutUs } from './AboutUs';
import { AnimitaHeader } from './AnimitaHeader';
import { Collaborators } from './Collaborators';
import './css/App.css';
import { ShowCaseGame } from './ShowcaseGame';

function App() {

  return (
    <div className="App h-screen">
      <AnimitaHeader />
      <ShowCaseGame />
      <AboutUs />
      <Collaborators />
    </div>
  );
}

export default App;
