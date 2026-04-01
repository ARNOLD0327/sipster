import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Sip from "./pages/Sip"
import Order from "./pages/Orders"
import About from "./pages/About"
import AddCoffee from "./pages/Addcoffee"
import Viewcoffee from "./pages/Viewcoffee"
import Editcoffee from "./pages/Editcoffee"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import{ CartProvider } from "./context/Cartcontext"
function App() {
  
  return(
       <CartProvider>
    <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home"  element={<Home/>}/>
        <Route path="/sip-menu" element={<Sip/>}/> 
        <Route path="/order" element={<Order/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/add-coffee" element={<AddCoffee />} />
        <Route path="/view" element={<Viewcoffee />} />
        <Route path="/edit/:id" element={<Editcoffee />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
        </CartProvider>
  )
}
export default App