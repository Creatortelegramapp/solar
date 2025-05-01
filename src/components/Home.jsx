
import Banner from '../components/Banner';
import Advantages from '../components/Advantages';
import ContactForm from '../components/ContactForm';
import UpcomingEvents from '../components/UpcomingEvents';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import LatestNews from '../components/LatestNews';

const Home = () => {
    return (
        <div>
            <Hero />
            <Welcome />
            <Advantages />
            <Banner />
            <LatestNews />
            <UpcomingEvents />
            <ContactForm />
        </div>
    );
};

// Արտահանում ենք Home բաղադրիչը
export default Home;