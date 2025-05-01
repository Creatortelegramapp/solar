import { useEffect, useState } from "react";

const Banner = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            style={{
                width: "100%",
                height: "80vh",
                backgroundImage: "url(./images/sectionFon.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    width: isMobile ? "90%" : "50%", 
                    height: "60%",
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                    gap: "5%",
                    overflowY: isMobile ? "auto" : "visible", // մոբայլում scroll
                    paddingRight: isMobile ? "10px" : "0px",
                }}
            >
                <h3
                    style={{
                        fontSize: "20px",
                        zIndex: 2,
                    }}
                >
                    ՄԵՆՔ ՕԳՏԱԳՈՐԾՈՒՄ ԵՆՔ LONGI ԵՐԿԿՈՂՄԱՆԻ ԱՐԵՎԱՅԻՆ ՎԱՀԱՆԱԿՆԵՐ
                </h3>
                <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Մենք տեղադրում ենք LONGi բրենդի 540-600 Վատտ հզորության պրեմիում դասի երկկողմանի արևային վահանակներ, որոնք համարվում են ոլորտի ամենավստահելի և արդյունավետ լուծումներից մեկը՝ շնորհիվ իրենց ամրության, արտադրողականության և ժամանակի դիմացկունության։ Այս LONGi վահանակները դիմացկուն են և պատրաստված են դիմանալու ինչպես ձյան հաստ շերտերին, այնպես էլ ուժգին քամիներին՝ երաշխավորելով կայուն աշխատանք ցանկացած եղանակային իրավիճակում։
                </p>
            </div>
        </div>
    );
};

export default Banner;
