import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { routeVariables } from "./controller/constants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routeVariables.map((variable, index) => (
          <Route
            key={index}
            path={variable.path}
            element={<variable.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
