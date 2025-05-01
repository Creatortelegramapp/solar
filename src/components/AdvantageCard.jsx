import '../styles/AdvantageCard.css';
import Button from "./Button.jsx";

const AdvantageCard = ({ iconUrl, title, description, isHovered, isOtherHovered, onMouseEnter, onMouseLeave }) => {
    return (
        <div
            className={`advantage-card-container ${
                isHovered ? 'hovered' : isOtherHovered ? 'shrunk' : ''
            }`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className={`advantage-card-inner ${isHovered ? 'hovered' : ''}`}>
                <img src={iconUrl} alt={title} className="advantage-card-img" />
                <h3 className="advantage-card-title">{title}</h3>
                <p className="advantage-card-description">{description}</p>
                <Button text={"իմանալ ավելին"} link="/services"/>
            </div>

        </div>
    );
};

export default AdvantageCard;
