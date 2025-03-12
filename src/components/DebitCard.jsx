import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const DebitCard = ({name, cardNumber, accountNumber, bank}) => {
  const handleCopyAccountNumber = () => {
    navigator.clipboard.writeText(accountNumber.replace(/\s/g, "")); // Remove spaces before copying
    alert("Account number copied to clipboard!");
  };

  return (
    <div onClick={handleCopyAccountNumber} className="w-full cursor-pointer bg-gradient-to-r from-blue-300 to-blue-400 p-4 rounded-lg flex flex-col">
        <p className="text-right text-white poppins-bold text-3xl">BCA</p>
        <p className="text-left text-white poppins-bold text-xl mt-2">{name}</p>
        <p className="text-left text-white poppins-bold text-xl mb-4">{cardNumber}</p>
        <FontAwesomeIcon icon={faCopy} className="text-white text-2xl text-right w-full"/>
    </div>
  );
};

export default DebitCard;