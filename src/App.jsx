import { BrowserRouter } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Navbar from "./pages/components/Navbar/Navbar";
import Sidebar from "./pages/components/Sidebar/Sidebar";
import OnlineUsers from "./pages/components/OnlineUsers/OnlineUsers";
import "./App.css";
import { AppRouter } from "./AppRouter";
import { routes } from "./routes/routes";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <AppRouter routes={routes} />
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
