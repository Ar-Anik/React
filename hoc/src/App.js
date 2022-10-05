import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <>
      <div className="click">
        <ClickCounter />
      </div>

      <div className='hover'>
        <HoverCounter />
      </div>
    </>
  );
}

export default App;
