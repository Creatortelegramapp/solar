import { useRef } from "react";
import NewsCard from "./NewsCard";
import { theme } from "../constants/constants.js";
import "../styles/LasestNews.css";
import Button from "./Button.jsx";

const LatestNews = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = 300;

        if (direction === "left") {
            container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const news = [
        {
            image: "/images/vorak.jpg",
            title: "ՈՐԱԿ",
            frontText: "Պրեմիում դասի արևային կայաններ",
            backText: "Պրեմիում դասի արևային կայաններ՝ բարձր արդյունավետությամբ և երկարատև օգտագործման համար։",
        },
        {
            image: "/images/solar3.jpg",
            title: "ՓՈՐՁ",
            frontText: "Մենք ոլորտի փորձառու մասնագետներ ենք",
            backText: "Մենք ոլորտի փորձառու մասնագետներ ենք՝ տարիների փորձով և հարյուրավոր հաջողված նախագծերով"
        },
        {
            image: "/images/solar4.jpg",
            title: "ԱՐԴՅՈՒՆԱՎԵՏՈՒԹՅՈՒՆ",
            frontText: "Առաջարկում ենք 0% ապառիկ",
            backText:"Առաջարկում ենք 0% ապառիկ և ֆինանսավորման աջակցություն՝ ողջ Հայաստանի տարածքում։"
        },
        {
            image: "/images/solar5.jpg",
            frontText:"Անվճար էլեկտրաէներգիա",
            title: "ԽՆԱՅՈՂՈՒԹՅՈՒՆ",
            backText: "Անվճար էլեկտրաէներգիա, մաքուր բնություն և էկո-խնայողություն"
        },
    ];

    return (
        <div className="latest-news-section">
            <h2 className="latest-news-title" style={{ color: theme.colors.mainColor }}>
               ՄԵՐ ԱՐԱՎԵԼՈՒԹՅՈՒՆՆԵԸ
            </h2>
            <button className="scroll-button left" onClick={() => scroll("left")}>
                &#8592;
            </button>

            <button className="scroll-button right" onClick={() => scroll("right")}>
                &#8594;
            </button>

            <div className="news-scroll-container" ref={scrollRef}>
                {news.map((item, index) => (
                    <div key={index} className="news-card-wrapper">
                        <NewsCard
                            frontText={item.frontText}
                            title={item.title}
                            image={item.image}
                            backText={item.backText}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestNews;
