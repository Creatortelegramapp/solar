import { useState } from 'react';
import AdvantageCard from './AdvantageCard';
import { theme } from '../constants/constants.js';
import '../styles/Advantages.css';

const Advantages = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const advantages = [
    {
      iconUrl: 'https://themesfamily.com/tm/khaliq/assets/img/feature/011-solar-panel-4.png',
      title: 'Անվճար խորհրդատվությու',
      description: 'Պատրաստվու՞մ եք անցնել արևային էներգիայի, բայց ունեք հարցեր։ AG Solar-ի փորձառու մասնագետները տրամադրում են անվճար խորհրդատվություն՝ օգնելով ընտրել ճիշտ հզորությամբ արևային համակարգ, գնահատել գին–որակ հարաբերակցությունը, հստակեցնել ծախսերի խնայման չափերը և ուսումնասիրել ֆինանսավորման հնարավորությունները',
    },
    {
      iconUrl: 'https://themesfamily.com/tm/khaliq/assets/img/feature/007-solar-energy.png',
      title: 'Արևային կայանների նախագծում և տեղադրում',
      description: 'AG Solar-ի փորձառու մասնագետները իրականացնում են արևային էներգիայի համակարգերի ամբողջական նախագծում և տեղադրում՝ հաշվի առնելով Ձեր տարածքի յուրահատկությունները: Մեր մասնագետները կվերահսկեն ամբողջ ընթացքը՝ սկսած կայանների նախագծից մինչև դրանց ճշգրիտ տեղադրումն ու փորձարկումը՝ ապահովելով կատարյալ որակ և արդյունավետություն։',
    },
    {
      iconUrl: 'https://themesfamily.com/tm/khaliq/assets/img/feature/006-solar-panel-2.png',
      title: 'Տեխնիկական սպասարկում',
      description: 'AG Solar-ի տեխնիկական սպասարկման ծառայությունը ապահովում է Ձեր արևային համակարգի հուսալի, անխափան և արդյունավետ աշխատանքը՝ երկար տարիներ։ Մենք ոչ միայն տեղադրում ենք կայանները, այլև մշտապես հետևում դրանց անխափան գործունեությանը՝ կանխելով հնարավոր խափանումներն ու կորուստները։ Մեր տեխնիկական թիմը կատարում է պարբերական ստուգումներ և անհրաժեշտ վերանայումներ՝ ըստ միջազգային չափանիշների։',
    },
    {
      iconUrl: 'https://themesfamily.com/tm/khaliq/assets/img/feature/009-solar-cell-1.png',
      title: '0% ապառիկ և ֆինանսավորման աջակցություն',
      description: 'AG Solar-ը ձեր կողքին է ոչ միայն արևային կայանը տեղադրելու, այլև այն հնարավորինս մատչելի դարձնելու ճանապարհին։ Մենք առաջարկում ենք 0% ապառիկ և աջակցություն վարկավորման ամբողջ գործընթացում՝ ազատելով ձեզ ավելորդ բարդություններից։',
    },
  ];

  return (
      <div className="advantages-section">
        <h2 className="advantages-title" style={{ color: theme.colors.mainColor }}>
          Մեր Ծառայությունները
        </h2>
        <div className="advantages-list">
          {advantages.map((advantage, index) => (
              <AdvantageCard
                  key={index}
                  iconUrl={advantage.iconUrl}
                  title={advantage.title}
                  description={advantage.description}
                  isHovered={hoveredIndex === index}
                  isOtherHovered={hoveredIndex !== null && hoveredIndex !== index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
              />
          ))}
        </div>
      </div>
  );
};

export default Advantages;
