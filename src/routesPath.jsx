import { Route, Routes } from "react-router-dom";
import Parent from "./Components/Parent/Parent";
import Jeux from "./Components/Game/jeux";

function RoutesPath() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Parent />} />
        <Route path="/jeux" element={<Jeux />} />
      </Routes>
    </div>
  );
}

export default RoutesPath;
