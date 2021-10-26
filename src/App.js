import logo from './logo.svg';
import './App.css';

import Developer from './components/Developer';

function App() {
  const gustavo = {name: 'Gustavo', age: 24, country: 'Brasil'}
  const andrieli = {name: 'Andrieli', age: 22, country: 'Brasil'}
  const john = {name: 'John', age: 30, country: 'Estados Unidos'}

  return (
    <div className="App">
      <div className="App-header">
        
        <Developer name={gustavo.name} age={gustavo.age} country={gustavo.country}/>
        <Developer name={andrieli.name} age={andrieli.age} country={andrieli.country}/>
        <Developer name={john.name} age={john.age} country={john.country}/>

      </div>
    </div>
  );
}

export default App;
