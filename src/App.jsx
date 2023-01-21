import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PlansPricing from "./pages/PlansPricing"
import Products from "./pages/Products"
import Resources from "./pages/Resources"
import Solutions from "./pages/Solutions"
import Nav from "./pages/Nav"
function App() {
  return (
    <div className="m-0 p-0 box-border">
    <Nav/>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Products" element={ <Products/> } />
        <Route path="/Solutions" element={ <Solutions/> } />
        <Route path="/Resources" element={ <Resources/> } />
        <Route path="/PlansPricing" element={ <PlansPricing/> } />
      </Routes>
    </div>
  )
}

export default App
