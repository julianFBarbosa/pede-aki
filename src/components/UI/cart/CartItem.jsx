import React, { useState } from "react";
import { ListGroupItem } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import PaymentOption from "./PaymentOption"; // Certifique-se de importar o componente PaymentOption
import CEPInput from "./CEPInput"; // Importe o componente CEPInput

import "../../../styles/cart-item.css";

const CartItem = ({ item, onClose }) => {
  const { id, title, price, image01, quantity } = item;
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteItem = (event) => {
    dispatch(cartActions.deleteItem(id));
    event.stopPropagation();
  };

  const handlePizzaSelection = () => {
    navigate(`/pizzas/${id}`);
    onClose();
  };

  // Adicionar estado local para o tipo de pagamento selecionado
  const [selectedPayment, setSelectedPayment] = useState("dinheiro");

  return (
    <div>
      <ListGroupItem
        className="border-0 cart__item"
        onClick={handlePizzaSelection}
      >
        <div className="cart__item-info d-flex gap-4">
          <img src={image01} alt="product-img" />

          <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
            <div>
              <h6 className="cart__product-title">{title}</h6>
              <p className="d-flex align-items-center gap-5 cart__product-price">
                {quantity}x <span>R${price}</span>
              </p>
            </div>

            <span
              className="delete__btn"
              onClick={(event) => deleteItem(event)}
            >
              <i className="ri-close-line"></i>
            </span>
          </div>
        </div>
      </ListGroupItem>

      {/* Renderize a opção de pagamento fora do ListGroupItem */}
      <PaymentOption />
      {/* Renderize a opção de pagamento fora do ListGroupItem */}

      <CEPInput />
    </div>
  );
};

export default CartItem;
