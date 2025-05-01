import "../../styles/About.css"

const BASE_URL = import.meta.env.BASE_URL;

function About() {
    return (
        <div className="About">
            <div className="About-header">
                ՄԵր Մասին
            </div>
            <div className="About-main">

                <div className="About-content-one About-content">
                    <div className="About-main-img">
                        <img src={BASE_URL + "images/anoutImg1.jpg"} alt=""/>
                    </div>
                    <div className="About-main-info">
                        <p>AG Solar-ը արևային էներգիայի ոլորտում առաջատար ընկերություն է, որն առաջարկում է բարձր
                            արդյունավետությամբ և հուսալիությամբ արևային լուծումներ։Մեր համակարգերը նախագծվում են՝
                            նվազեցնելու էլեկտրաէներգիայի ծախսը և շրջակա միջավայրի վրա թողած բացասական ազդեցությունը՝
                            միաժամանակ ապահովելով երկարաժամկետ ու կայուն արդյունք։
                        </p>
                    </div>
                </div>
                <div className="About-content-two About-content">
                    <div className="About-main-info">
                        <p>
                            Մեր թիմը բաղկացած է ոլորտում բազմամյա փորձ ունեցող մասնագետներից, ովքեր միավորել են իրենց ուժերն ու փորձը՝ առաջարկելու հուսալի և որակյալ ծառայություներ։
                            AG Solar-ն օգտագործում է միայն միջազգային ճանաչում ունեցող ապրանքանիշերի բարձրակարգ սարքավորումներ․
                            - Օգտագործում ենք LONGi բրենդի պրեմիում դասի երկկողմանի արևային վահանակներ, որոնք համարվում են ոլորտի ամենավստահելի և արդյունավետ լուծումներից մեկը՝ շնորհիվ իրենց ամրության, արտադրողականության և ժամանակի դիմացկունության։
                        </p>
                    </div>
                    <div className="About-main-img">
                        <img src="/images/anoutImg2.jpg" alt=""/>
                    </div>

                </div>
                <div className="About-content-two About-content">

                    <div className="About-main-img">
                        <img src="/images/anoutImg3.jpg" alt=""/>
                    </div>
                    <div className="About-main-info">
                        <p>
                            - Կիրառում ենք հոսանքի բարձրորակ փոխակերպիչներ՝ նախատեսված կայուն, անվտանգ և արդյունավետ աշխատանքի համար՝ հարմարեցված Ձեր տարածքի տեխնիկական պայմաններին։

                            Երկկողմանի տեխնոլոգիայի շնորհիվ մեր վահանակները հավաքում են էներգիա, ինչպես ուղիղ արևի ճառագայթներից, այնպես էլ տարածքից անդրադարձած լույսից՝ ապահովելով առավելագույն արտադրողականություն։

                        </p>
                    </div>

                </div>
                <div className="About-content-two About-content">
                    <div className="About-main-info">
                        <p>
                            Մեր ծառայությունները ներառում են անհատական մոտեցում, նախագծում, ճշգրիտ հաշվարկներ և որակյալ տեղադրում։ Յուրաքանչյուր կայան մշակվում է՝ հիմնվելով տարածքի առանձնահատկությունների և Ձեր սպառման կարիքների վրա։

                            Մեր նպատակն է՝ արևային էներգիան դարձնել հասանելի և գործնական ընտրություն յուրաքանչյուր ընտանիքի և բիզնեսի համար։
                            Մեր առաքելությունն է՝ նպաստել ավելի կանաչ, մաքուր և անկախ էներգետիկ ապագայի ստեղծմանը։
                        </p>
                    </div>
                    <div className="About-main-img">
                        <img src="/images/anoutImg4.jpg" alt=""/>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default About;