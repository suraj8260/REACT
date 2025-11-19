// App.jsx
import Homeclass from './Components/Homeclass'

export default function App() {
  let fname = "Gamana";
  let age = 39;
  return (
    <div>
      <h1>Welcome</h1>
      <Homeclass name={fname} age={age} />
    </div>
  );
}