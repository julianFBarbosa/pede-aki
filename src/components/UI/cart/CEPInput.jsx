import React, { useState } from "react";
import axios from "axios";
import "../../../styles/cep-input.css";

const CEPInput = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState(null);

  const handleCEPChange = (e) => {
    const newCEP = e.target.value;
    setCep(newCEP);
  };

  const fetchAddress = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setAddress(response.data);
    } catch (error) {
      console.error("Erro ao buscar o endereço:", error);
    }
  };

  return (
    <div className="ceo-input-container">
      <label>Digite seu CEP: </label>
      <input
        type="text"
        className="ceo-input"
        placeholder="Digite o CEP"
        value={cep}
        onChange={handleCEPChange}
      />
      <button className="ceo-button" onClick={fetchAddress}>
        Buscar Endereço
      </button>
      {address && (
        <div className="ceo-address-container">
          <h2>Endereço:</h2>
          <p className="ceo-address">CEP: {address.cep}</p>
          <p className="ceo-address">Rua: {address.logradouro}</p>
          <p className="ceo-address">Bairro: {address.bairro}</p>
          <p className="ceo-address">Cidade: {address.localidade}</p>
          <p className="ceo-address">Estado: {address.uf}</p>
        </div>
      )}
    </div>
  );
};

export default CEPInput;
