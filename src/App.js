import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Agencies from './components/Agencies';

function App() {
  return (
    <>
    <div className="header">
      <h1>Agencias</h1>
      <p>Involucradas en vuelos espaciales</p>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Agencies />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
