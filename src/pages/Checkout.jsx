import "../styles/checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Checkout = () => {
  return (
    <>
      <div className="checkoutMessage">
        <div className="checkoutTitleContainer">
          <AiFillCheckCircle className="checkoutIcon" />
          <h3>Pedido feito!</h3>
        </div>
        <span>
        Seu pedido está sendo processado e será entregue o mais rápido possível
        </span>
      </div>
    </>
  );
};

export default Checkout;
