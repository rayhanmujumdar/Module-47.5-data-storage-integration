import './App.css';
import Cosmetics from './Component/Cosmetics/Cosmetics';
import Shoes from './Component/Shoes/Shoes';
import { add } from './Utilities/Utilities';

function App() {
  const first = 20;
  const second = 40;
  const result = add(first,second)
  return (
    <div className="App">
      <Cosmetics result = {result}></Cosmetics>
      <Shoes></Shoes>
    </div>
  );
}

export default App;
