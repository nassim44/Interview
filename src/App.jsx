
import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import RoutesPath from "./routesPath";

function App() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <RoutesPath />
      </div>
    </>
  );
}

export default App;
