
import { Hero } from "./components/Hero"
import { Navbar } from "./components/navbar"
import { FeaturedDishes } from "./components/dishcard"
import { Reviews } from "./components/Reviews"

function App() {
  return(
    <div >
    <Navbar/>
    <Hero/>
    <Reviews/>
    <FeaturedDishes/>
    </div>
  )
   
}

export default App
