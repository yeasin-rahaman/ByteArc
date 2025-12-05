import React, { useEffect, useRef, useState } from "react";


const Testimonials = () => {
    const slideRowRef = useRef(null);
    const mainRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    const updateSlide = () => {
        const mainWidth = mainRef.current.offsetWidth;
        const translateValue = currentIndex * -mainWidth;
        slideRowRef.current.style.transform = `translateX(${translateValue}px)`;
    };

    // Resize update
    useEffect(() => {
        updateSlide();
        window.addEventListener("resize", updateSlide);
        return () => window.removeEventListener("resize", updateSlide);
    }, [currentIndex]);

    // AUTO SLIDER -----------------------------------------
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % 4); // 4 slides
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    // -------------------------------------------------------

    return (
        <div className="testi-body py-5">
            <main ref={mainRef}>


                <div className="slider my-5">
                    <div className="slide-row" ref={slideRowRef}>
                        {/* Slide 1 */}
                        <div className="slide-col">
                            <div className="content">
                                <p>
                                    Zen Doan is a business analyst, entrepreneur and media
                                    proprietor, and investor. She is also a best selling author.
                                </p>
                                <h2>Zen</h2>
                                <p>Author</p>
                            </div>
                            <div className="hero">
                                <img
                                    src="https://user-images.githubusercontent.com/13468728/234031693-6bbaba7d-632c-4d7d-965f-75a76a549ce2.jpg"
                                    alt="avatar"
                                />
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="slide-col">
                            <div className="content">
                                <p>
                                    Jonathan Koletic is an American internet entrepreneur and
                                    investor. He founded the multinational company Treymont.
                                </p>
                                <h2>Jonathan</h2>
                                <p>Treymont Inc.</p>
                            </div>
                            <div className="hero">
                                <img
                                    src="https://user-images.githubusercontent.com/13468728/234031617-2dfb19ea-01d0-4370-b63b-bb6bdfb4f78e.jpg"
                                    alt="avatar"
                                />
                            </div>
                        </div>

                        {/* Slide 3 */}
                        <div className="slide-col">
                            <div className="content">
                                <p>
                                    Charlie Green is a European entrepreneur and media consultant.
                                    He is the founder of Hallmark Inc.
                                </p>
                                <h2>Charlie</h2>
                                <p>Hallmark Inc.</p>
                            </div>
                            <div className="hero">
                                <img
                                    src="https://user-images.githubusercontent.com/13468728/234031646-10533999-39e5-4c7b-ab54-d0299b13ce74.jpg"
                                    alt="avatar"
                                />
                            </div>
                        </div>

                        {/* Slide 4 */}
                        <div className="slide-col">
                            <div className="content">
                                <p>
                                    Sarah Dam is an American internet entrepreneur and investor.
                                    She is the founder of Zara Tech.
                                </p>
                                <h2>Sarah</h2>
                                <p>Zara Inc.</p>
                            </div>
                            <div className="hero">
                                <img
                                    src="https://github.com/ecemgo/ecemgo/assets/13468728/55116c98-5f9a-4b0a-9fdb-4911b52d5ef3"
                                    alt="avatar"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Indicator Buttons */}
                <div className="indicator">
                    {[0, 1, 2, 3].map((i) => (
                        <span
                            key={i}
                            className={`btn ${currentIndex === i ? "active" : ""}`}
                            onClick={() => setCurrentIndex(i)}
                        ></span>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Testimonials;
