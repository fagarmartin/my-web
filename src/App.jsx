
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/navigation/NavigationBar";
import Home from "./pages/Home";
import Error from "./pages/errors/Error";
import NotFound from "./pages/errors/NotFound";
import Cursor from "./components/Cursor";

function App() {  

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />      
       
        
        <Route path="*" element={<NotFound/>} />
        <Route path="/error" element={<Error/>} />
      </Routes>
      {/* <Cursor/> */}
    </div>
  )
}

export default App
