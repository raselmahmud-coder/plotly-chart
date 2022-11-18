import BarChart from "./components/BarCharts/BarChart";
import LineCharts from "./components/LineCharts/LineCharts";
import "./App.css";
import useGetData from "./hooks/useGetData";
function App() {
  const fetchType = "facebook"; //"twitter"" pass either twitter or facebook string
  const { segmentValues } = useGetData(fetchType);

  return (
    <div className="grid_container">
      <BarChart segmentValues={segmentValues} fetchType={fetchType} />
      <LineCharts segmentValues={segmentValues} fetchType={fetchType} />
    </div>
  );
}

export default App;
