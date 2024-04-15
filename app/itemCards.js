"use client";

import ItemCardBtn from "./itemCardBtn";

const ItemCards = ({ cardList, quantityValue, handleInputChange }) => {
    return (
        <ul className="m-auto flex flex-wrap justify-center gap-9 pt-12 w-full md:max-w-5xl">
            {cardList?.map((product, i) => (
                <li key={i} className="p-3 bg-[#D9D9D9] rounded-[15px] md:max-w-[301px] h-[812px] m-auto text-center flex flex-col justify-between ">
                    <div>
                        <div>
                            <img className="h-[366px] w-full md:w-[281px] object-cover rounded-[15px] m-auto" src={product.img} alt="" />
                        </div>
                        <h5 className="text-4xl leading-[44px] overflow-hidden text-ellipsis py-3">
                            {product.title.length > 15 ? product.title.slice(0, 15) + "..." : product.title}
                        </h5>
                        <p className="text-2xl overflow-hidden text-ellipsis">
                            {!product.description
                                ? "There is no description for this product"
                                : product.description.length > 15
                                ? product.description.slice(0, 70) + "..."
                                : product.description}
                        </p>
                    </div>
                    <div>
                        <p className="text-4xl leading-[44px]">цена: {product.price}₽</p>
                        <ItemCardBtn cardId={product.id} quantityValue={quantityValue[product.id] || 1} handleInputChange={(cardId, value) => handleInputChange(cardId, value)} />
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ItemCards;
