import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from "./styles/globalStyles"
import { RoutesMain } from "./routes/routes"
import { AuthContextProvider } from "./contexts/AuthContex";

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
      <AuthContextProvider><RoutesMain/></AuthContextProvider>
      
    </>
  )
}

export default App

