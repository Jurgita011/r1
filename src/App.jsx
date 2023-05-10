import './App.scss';
import {SuoKvadrate, SuoApskritime, SuoFormose, DogBigLetter, DogsColor} from "./react-base/react-base";
import Button from './state/state1';
import State2 from './state/state2';
import State3 from './state/state3';
import State4 from './state/state4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      

        <SuoKvadrate />
        <SuoApskritime />
        <SuoFormose />
        <DogBigLetter />
        <DogsColor />
        
        <Button />

      <State2/>
      <State3/>
      <State4/>
       
        
      </header>
    </div>
  );
}

export default App;
