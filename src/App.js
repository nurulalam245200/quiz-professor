import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { router } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
