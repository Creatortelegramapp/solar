import { useState } from "react";
import { theme } from "../constants/constants.js";
import "../styles/NewsCard.css";

const NewsCard = ({frontText, title, image, backText }) => {
    const [isHover, setHover] = useState(false);

    return (
        <div
            className="news-card"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className={`news-card-inner ${isHover ? "hovered" : ""}`}>
                {/* Front Side */}
                <div className="news-card-side">
                    <img src={image} alt={title} className="news-card-img" />
                    <h3
                        className="news-card-title"
                        style={{ color: theme.colors.mainColor }}
                    >
                        {title}
                    </h3>
                    <p className="news-card-date">{frontText}</p>

                </div>

                {/* Back Side */}
                <div className="news-card-side news-card-back">
                    <h4 className="news-card-back-title">{title}</h4>
                    <p className="news-card-back-text">{backText}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
