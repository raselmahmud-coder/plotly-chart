import BarChart from "./components/BarCharts/BarChart";
import LineCharts from "./components/LineCharts/LineCharts";
import "./App.css";
import useGetData from "./hooks/useGetData";
import { useState } from "react";
function App() {
  const [fetchType, setFetchType] = useState("twitter"); //"twitter"" pass either twitter or facebook string
  const { segmentValues } = useGetData(fetchType);
  const handleChange = () => {
    setFetchType((prev) => (prev === "twitter" ? "facebook" : "twitter"));
  };
  return (
    <>
      <button onClick={handleChange} style={{margin:"2px auto" }}>Click Here</button>
      <div className="grid_container">
        <BarChart segmentValues={segmentValues} fetchType={fetchType} />
        <LineCharts segmentValues={segmentValues} fetchType={fetchType} />
      </div>
    </>
  );
}

export default App;
