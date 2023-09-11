import Calendar from "./components/Calendar";
import Header from "./components/Header";
import Nav from "./components/Nav";


function App() {

  return (
    <div className='px-4 lg:px-10 xl:px-24 mb-12'>
      <Nav />
      {/* <Header /> */}
      <Calendar />
    </div>
  );
}

export default App;
