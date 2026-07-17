import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";

function MainLayout() {
  return (
    <div className="app-layout">
      <Header activePage="home" />

      <main>
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
