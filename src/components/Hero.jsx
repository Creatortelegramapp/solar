import { useState } from "react";
import "../styles/hero.css";

const slides = [
    {
        image: "https://livedemo00.template-help.com/landing_58501images/home-2-1586x925.jpg",
        title: "Որակյալ արևային էներգիա՝ հասանելի գներով",
        subtitle: "Մենք տրամադրում ենք անվճար խորհրդատվություն, չափագրում, նախագծում և տեղադրում՝ ապահովելով ամբողջական սպասարկում մեկ վայրում։",
        buttonText: "Պատվիրել հիմա",
        buttonLink: "#order",
    },
    {
        image: "/images/solar1.jpg",
        title: "0% Տոկոսադրույք՝ ՀՀ ողջ տարածքում",
        subtitle: "",
        buttonText: "Սկսեք հիմա՝ 0% ապառիկ",
        buttonLink: "#start-now",
    },
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const currentSlide = slides[currentIndex];

    return (
        <div className="hero-container">
            <div className="hero-overlay background-overlay" />
            <div className="hero-content">
                <div
                    className="hero-inner"
                    style={{
                        backgroundImage: `url(${currentSlide.image})`,
                    }}
                >
                    <div className="hero-text-container">
                        <h1 className="hero-title">{currentSlide.title}</h1>
                        {currentSlide.subtitle && (
                            <p className="hero-subtitle">{currentSlide.subtitle}</p>
                        )}
                        <a href={currentSlide.buttonLink} className="hero-button">
                            {currentSlide.buttonText}
                        </a>
                    </div>

                    <button className="arrow left-arrow" onClick={prevSlide}>
                        &#10094;
                    </button>
                    <button className="arrow right-arrow" onClick={nextSlide}>
                        &#10095;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
