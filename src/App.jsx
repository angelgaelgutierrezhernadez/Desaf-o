import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Services } from "./components/Services"
import { TestimonioContainer } from "./components/TestimonioContainer"
function App() {


  return (
    <main className="max-w-[1440px] mx-auto relative">
     <Header />
     <Main />
     <Services />
     <TestimonioContainer />
    </main>
  )
}

export default App
