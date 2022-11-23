import './App.css';
import EasyForm from './components/EasyForm';
import FlavorForm from './components/FlavorForm';
import FlavorMultiselect from './components/FlavorMultiselect';
import NameForm from './components/NameForm';


function App() {
  
  return (
    <div>
      <NameForm />
      <EasyForm />
      <FlavorForm />
      <FlavorMultiselect />
    </div>
  );
}

export default App;
