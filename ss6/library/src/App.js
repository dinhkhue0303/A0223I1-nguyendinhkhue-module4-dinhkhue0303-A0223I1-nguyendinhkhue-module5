import logo from './logo.svg';
import './App.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import LibraryList from "./component/LibraryList";
import {ToastContainer} from "react-toastify";
import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.css';
import LibraryCreate from "./component/LibraryCreate";
import LibraryUpdate from "./component/LibraryUpdate";
import NotFound from "./component/NotFound";


function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/library/list" element={<LibraryList/>}></Route>
            <Route path="/library/create" element={<LibraryCreate></LibraryCreate>}></Route>
            <Route path="/library/update/:id" element={<LibraryUpdate></LibraryUpdate>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>

          <ToastContainer/>
        </BrowserRouter>
      </>
  );
}

export default App;
