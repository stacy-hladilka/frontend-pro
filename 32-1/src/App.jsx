import Header from "./components/Header/Header";
import LeftNavigation from "./components/LeftNavigation/LeftNavigation";
import MainSection from "./components/MainSection/MainSection";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <LeftNavigation />
        <MainSection />
      </div>
    </>
  );
}

export default App;
