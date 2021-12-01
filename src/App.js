import './App.css';
import AmountSelector from "./components/AmountSelector";
import {useEffect, useState} from "react";
import Data from "./components/Data";

function App() {

  const defaultFilters = {amountFrom: 10.00, amountTo: 100.00};
  const [filters, setFilters] = useState(defaultFilters);

  const filterLog = useEffect(() => {
      console.log('useEffect', filters);
  }, [filters]);

  return (
    <div className="App">
      <AmountSelector filters={filters}/>
      <Data filters={filters}/>
    </div>
  );
}

export default App;
