//при нажатии на кнопкук купить нам надо взять id этой карточки и передать весь этот обхект  в корзину

"use client";

import { useState } from "react";

const ItemCardBtn = ({ cardId, quantityValue, handleInputChange }) => {
    const styleForBuyBtn = (name) => {
        if (name === "buy") {
            return { display: !showQuantityBtns ? "block" : "none", opacity: !showQuantityBtns ? "1" : "0" };
        }
        if (name === "quantity") {
            return { display: showQuantityBtns ? "flex" : "none", opacity: showQuantityBtns ? "1" : "0" };
        }
    };

    const [showQuantityBtns, setShowQuantityBtns] = useState(false);

    const handleBuyBtn = () => {
        setShowQuantityBtns(!showQuantityBtns);
    };

    const handleInc = () => {
        handleInputChange(cardId, quantityValue + 1);
    };

    const handleDec = () => {
        if (quantityValue > 0) {
            handleInputChange(cardId, quantityValue - 1);
        }
    };

    return (
        <>
            <div>
                <button
                    type="button"
                    className="transition w-full h-[68px] text-[#F0F0F0] bg-[#222222] rounded-[15px] p-3 text-4xl leading-[44px] mt-8 "
                    onClick={handleBuyBtn}
                    style={styleForBuyBtn("buy")}>
                    купить
                </button>
            </div>
            <div className="transition items-center gap-2 mt-8 " style={styleForBuyBtn("quantity")}>
                <button
                    type="button"
                    className="w-1/4 h-[68px] bg-[#222222] text-[#F0F0F0] p-4 hover:bg-[#060606]  focus:ring-[#222222] focus:ring-2 focus:outline-none rounded-[15px]"
                    onClick={handleDec}
                    data-dec>
                    -
                </button>
                <input
                    type="text"
                    aria-describedby="helper-text-explanation"
                    className="w-2/4 h-[68px] bg-[#222222] text-[#F0F0F0] text-center hover:bg-[#060606] focus:ring-[#222222] focus:border-[#f0f0f0] rounded-[15px] block p-4"
                    value={quantityValue}
                    onChange={(e) => handleInputChange(cardId, e.target.value)}
                    required
                />
                <button
                    type="button"
                    data-inc
                    className="w-1/4 h-[68px] bg-[#222222] text-[#F0F0F0] hover:bg-[#060606] focus:ring-[#222222] rounded-[15px] p-4 focus:ring-2 focus:outline-none"
                    onClick={handleInc}>
                    +
                </button>
            </div>
        </>
    );
};

export default ItemCardBtn;
