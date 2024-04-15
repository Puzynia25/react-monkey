import Reviews from "./review";
import CardsWrapper from "./cardsWrapper";

export default function Home() {
    return (
        <div className="w-full m-auto">
            <div className="md:max-w-[1442px] max-w-[332px] m-auto">
                <section className="w-full bg-[#777777] mt-[55px] rounded-[15px] flex items-center p-4 text-center">
                    <h1 className="text-[#F0F0F0] m-auto md:text-8xl text-[40px] md:leading-[116px] leading-[48px]">тестовое задание</h1>
                </section>
                <section className="mt-[105px]">
                    <Reviews />
                </section>
                <section className="mt-40 md:mt-60">
                    <CardsWrapper />
                </section>
            </div>
        </div>
    );
}
