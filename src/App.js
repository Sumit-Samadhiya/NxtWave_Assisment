import "./App.css";
import "./style/home.css";
import "./style/login.css";
import "./style/pagenotfound.css";

import Home from "./component/home";
import Login from "./pages/login";
import Pagenotfound from "./component/pagenotfound";
import Register from "./pages/Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" Component={Home} />
          <Route path="/login" Component={Login} /> */}
          // <Route path="*" Component={Pagenotfound} />
          <Route path="*" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
