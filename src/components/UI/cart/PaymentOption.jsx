import React, { useState } from "react";
import "../../../styles/payment.css"

const PaymentOption = () => {
  // Adicione o estado local para o tipo de pagamento selecionado
  const [selectedPayment, setSelectedPayment] = useState("dinheiro");

  return (
    <div className="payment-option">
      <label htmlFor="payment-select">Tipo de Pagamento:</label>
      <select
        id="payment-select"
        value={selectedPayment}
        onChange={(e) => setSelectedPayment(e.target.value)}
      >
        <option value="dinheiro">Dinheiro</option>
        <option value="cartao">Cartão de Crédito/Debito</option>
      </select>
    </div>
  );
};

export default PaymentOption;
