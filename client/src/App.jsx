import { BrowserRouter, Routes, Route} from "react-router-dom"
import LoginPage  from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage";
import { AuhtProvider } from "./context/AuthContext";
function App() {
  return (
<AuhtProvider>
<BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/profile" element={<h1>profile page</h1>} />
      <Route path="/" element={<h1></h1>} />
      <Route path="/pokemons" element={<h1>aqui los pokemones</h1>} />
    </Routes>
    </BrowserRouter>
</AuhtProvider>
  )
}


export default App