import './App.css';
import ComponentMaker from './Pages/ComponentMaker/ComponentMaker';

const App = (): JSX.Element => (
  <div className="App">
    <h2>Inject your component</h2>
    <ComponentMaker />
    <br />
  </div>
);

export default App;
