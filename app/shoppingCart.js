"use client";

import { useState, useEffect } from "react";

export default function ShoppingCart({ cardId, cardList, quantityValue }) {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
    // const [data, setData] = useState({});

    useEffect(() => {
        //берем номер телефона из localStorage
        const savedPhoneNumber = localStorage.getItem("phoneNumber");
        if (savedPhoneNumber) {
            setPhoneNumber(savedPhoneNumber);
        }
    }, []);

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = /^(\+?7|8)?[\s(]*[0-9]{3}[\s)]*[0-9]{3}[\s-]*[0-9]{2}[\s-]*[0-9]{2}$/.test(phoneNumber);
        setIsValidPhoneNumber(isValid);
        if (isValid) {
            // отправляем данные POST
            console.log("Отправка данных");
            //сохранить номер телефона
            localStorage.setItem("phoneNumber", phoneNumber);

            // const formData = new FormData(e.target);
            // console.log(formData, "formData");
            // fetch("http://o-complex.com:1337/order", {
            //     method: "POST",
            //     body: formData,
            // })
            //     .then((response) => response.json())
            //     .then((data) => {
            //         setData(data);
            //     });
        } else {
            console.log("Неверный номер телефона");
        }
    };

    return (
        <div className="max-w-[708px] m-auto">
            <form onSubmit={handleSubmit}>
                <div className="px-3 py-[10px] bg-[#D9D9D9] rounded-[15px]">
                    <h4 className="text-4xl leading-[44px]">Добавленные товары</h4>
                    <ul className="py-5 w-2/3">
                        корзина пуста
                        {/* {cardId
                            ? cardList?.map((card) => {
                                  if (card.id === cardId) {
                                      return (
                                          <li key={card.id} className="text-2xl leading-[29px] grid grid-cols-3 gap-6 justify-between">
                                              <div>Товар {card.id}</div>
                                              <div>x{quantityValue}</div>
                                              <div>{card.price}₽</div>
                                          </li>
                                      );
                                  }
                              })
                            : "корзина пуста"} */}
                    </ul>
                    <div className="md:flex justify-between">
                        <input
                            type="tel"
                            name="phone_number"
                            placeholder="+7 (___) ___ __-__"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            className={`text-[#F0F0F0] rounded-[15px] pl-4 mr-4 py-3 text-4xl leading-[44px] w-full md:w-2/3 focus:ring-2 focus:outline-none  ${
                                isValidPhoneNumber
                                    ? "bg-[#222222] hover:bg-[#060606] focus:ring-neutral-900 focus:border-neutral-900"
                                    : "bg-red-300 hover:bg-red-300 focus:ring-red-400 focus:border-red-300"
                            }`}
                        />
                        <button type="submit" className="mt-4 md:mt-0 text-[#F0F0F0] bg-[#222222] rounded-[15px]  py-3 text-4xl leading-[44px] w-full md:w-1/3 hover:bg-[#060606]">
                            заказать
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
