import "../styles/WelcomeSection.css";
import Button from "../components/Button";
const WelcomeSection = () => {
    return (
        <div className="welcome-section">
            <div className="welcome-left" >
                    <div className="welcome-left-main">
                        <div className="welcome-left-text">
                            AG Solar-ը արևային էներգիայի ոլորտում առաջատար ընկերություն է՝ կազմված բազմամյա փորձ ունեցող մասնագետներից, ովքեր միավորել են իրենց ուժերն ու փորձը՝ առաջարկելու հուսալի և որակյալ ծառայություներ։ Մենք առաջարկում ենք պրեմիում դասի լուծումներ՝ LONGi վահանակներով և հոսանքի բարձրորակ փոխակերպիչներով ՝ նախագծումից մինչև տեղադրում ու թղթաբանություն՝ ամեն ինչ Ձեր փոխարեն։
                        </div>
                        <div className="welcome-left-img" />
                        <Button link={"/about"} text="Իմանալ ավելին" />
                    </div>

            </div>
            <div className="welcome-right">
                <div className="welcome-titles">
                    <h1>0% Տոկոսադրույք՝ ՀՀ ողջ տարածքում</h1>
                </div>
                <div className="welcome-right-video" >
                    <video className="welcome-video" loop autoPlay muted>
                        <source src="src/images/gifs/gif1.mp4" type="video/mp4" />
                        <source src="src/images/gifs/gif1.mp4" type="video/ogg" />
                    </video>
                </div>
                <Button link={"/about"} text="Իմանալ ավելին" />

            </div>
        </div>
    );
};

export default WelcomeSection;
