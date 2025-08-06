import './App.css'
import Header from "./components/Header";
import Goals from "./components/Goals";
import Quote from "./components/Quote";

function App() {

  return (
    <div>
      <Header />
      <div>
        <Quote />
        <Goals />
      </div>
    </div>
  )
}

export default App
