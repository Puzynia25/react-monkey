async function getReviews() {
    const responce = await fetch("http://o-complex.com:1337/reviews", {
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = responce.json();

    return data;
}

export default async function Reviews() {
    const reviews = await getReviews();

    return (
        <ul className="md:flex justify-center gap-[34px]">
            {reviews.map((review, i) => (
                <li key={i} className="mb-4 md:mb-0 md:w-[468px] md:h-[661px] py-5 px-[27px] bg-[#D9D9D9] rounded-[15px]">
                    <div dangerouslySetInnerHTML={{ __html: review.text }} />
                </li>
            ))}
        </ul>
    );
}
