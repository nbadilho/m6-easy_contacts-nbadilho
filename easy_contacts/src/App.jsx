import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from "./styles/globalStyles"
import { RoutesMain } from "./routes/routes"

function App() {
  return (
    <>
      <GlobalStyle/>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RoutesMain/>
    </>
  )
}

export default App

