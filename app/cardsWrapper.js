//решить проблему с повторяющимися id у карточек

"use client";

import ItemCards from "./itemCards";
import ShoppingCart from "./shoppingCart";
import { useEffect, useState } from "react";

export default function CardsWrapper() {
    const [quantity, setQuantity] = useState(0);
    const [cardList, setCardList] = useState([]);
    const [currentId, setCurrentId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        if (fetching) {
            getItemCards()
                .then(onCardListLoaded)
                .finally(() => setFetching(false));
        }
    }, [fetching]);

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return function () {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, [totalCount]);

    //запрос для получения карточек товара
    const getItemCards = async () => {
        const responce = await fetch(`http://o-complex.com:1337/products?page=${currentPage}&page_size=6`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await responce.json();

        return data;
    };

    const transformCard = (item) => {
        return {
            id: item.id,
            title: item.title,
            img: item.image_url,
            description: item.description,
            price: item.price,
        };
    };

    const scrollHandler = (e) => {
        const currentPosition = e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight);

        if (currentPosition < 100 && cardList.length < totalCount) {
            setFetching(true);
        }
    };

    const onCardListLoaded = (data) => {
        const newCardList = data.products.map(transformCard);
        setCardList((cardList) => [...cardList, ...newCardList]);
        setCurrentPage((prevPage) => prevPage + 1);
        setTotalCount(data.total);
    };

    const handleInputChange = (cardId, value) => {
        if (!isNaN(value)) {
            setQuantity((prevQuantities) => ({
                ...prevQuantities,
                [cardId]: +value,
            }));
        }
        setCurrentId(cardId);
    };

    return (
        <>
            <ShoppingCart cardList={cardList} cardId={currentId} />
            <ItemCards cardList={cardList} quantityValue={quantity} handleInputChange={handleInputChange} />
        </>
    );
}
