import './App.css';
import Body from './components/body';
import Footer from './components/footer';
import Navbar from './components/header';

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen h-fit dark:bg-slate-800">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
