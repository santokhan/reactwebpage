import './App.css';
import Navbar from './components/navbar/navbar';
import Main from './components/homepage/homepage';
import Footer from './components/footer/footer';
export default function App() {
  return (<div className="App">
    <header className="App-header"><Navbar /></header>
    <main><Main /></main>
    <footer className="overflow-hidden"><Footer /></footer>
  </div>);
}
