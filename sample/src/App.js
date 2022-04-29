import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
function App() {
  let title="aakash";
  return (
    <div className="App">
      <Header name={title} />
      <Content />
     <Image />
    </div>
    
  );
}

export default App;
