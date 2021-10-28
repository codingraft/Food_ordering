import { useState } from "react";
import Cart from "./Cart/Cart";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import CartProvider from "./store/CartProvider";


function App() {

  const [cartisShown, setCartIsShown] = useState(false);

  const showCarthandler = () =>{
    setCartIsShown(true);
  }
  const hideCartIsShown = () =>{
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartisShown && <Cart onClose={hideCartIsShown}/>}
      <Header onShowCart={showCarthandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
