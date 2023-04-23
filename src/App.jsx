import { BrowserRouter } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import "./App.css";
import { AppRouter } from "AppRouter";
import { routes } from "routes/routes";

function App() {
  const { authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <AppRouter routes={routes} />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
