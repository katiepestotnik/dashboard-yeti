import SideBar from "./components/SideBar";
import Reviews from "./components/Reviews";
import Rating from "./components/Rating";
import Analysis from "./components/Analysis";
import Visitors from "./components/Visitors";

function App() {
  return (
    <div className="container">
    <main>
      <div className='outer-container'>
        <SideBar />
        <div className='inner-container'>
          <Reviews />
          <Rating />
          <Analysis />
          <Visitors/>
        </div>
      </div>

    </main>
    </div>

  );
}

export default App;
