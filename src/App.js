import ShopPage from "./pages/shopPage"
import ShoppingPage from "./pages/shoppingCartPage";
import Header from "./layout/header";
import "./index.css";
import { BrowserRouter as Router,
 Routes,
  Route,
 } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <main className="container content">
        <Routes>
          <Route exact path="/" element={<ShopPage/>}/>
          <Route  path="/cartShop" element={<ShoppingPage/>}/>
        </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
