import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
  const [data, setData] = useState(null);
  const [dataType, setDataType] = useState("");

  

  console.log({ data });

  useEffect(() => {
    
    
    fetch(`https://swapi.dev/api/${dataType}/`)
    .then(res => res.json())
    .then(data => setData(data))
  }, [dataType])
  

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
