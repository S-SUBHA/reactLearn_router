import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main style={{
        minHeight: `calc(100vh - 19vh)`
      }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
