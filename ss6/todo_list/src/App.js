import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.css';
import Alert from "bootstrap/js/src/alert";
import List from "./component/List";
import {ToastContainer} from "react-toastify";

function App() {
  return (
      <>
          <List></List>
          <ToastContainer></ToastContainer>
      </>
  );
}

export default App;
