import ComplexCounter1 from './components/ComplexCounter-1';
import ComplexCounter2 from './components/ComplexCounter-2';
import ComplexCounter3 from './components/ComplexCounter-3';
import Counter from './components/Counter';
import MultipleReducer from './components/MultipleReducer';

function App() {
  return (
    <div>
      <div>
        <Counter />
      </div>

      <br />

      <div>
        <ComplexCounter1 />
      </div>

      <br />

      <div>
        <ComplexCounter2 />
      </div>

      <br />

      <div>
        <ComplexCounter3 />
      </div>

      <br />

      <div>
        <MultipleReducer />
      </div>
      
    </div>
  );
}

export default App;
