import '../styles/UpcomingEvents.css';

const BASE_URL = import.meta.env.BASE_URL;


const UpcomingEvents = () => {
    return (
        <div className="upcoming-events">
            <div className="upcoming-events-left">
                <video className="upcoming-events-video" loop autoPlay muted>
                    <source src={BASE_URL + "/images/gifs/0dram.mp4"} type="video/mp4" />
                </video>
            </div>
            <div className="upcoming-events-right">
                <img className="upcoming-events-img" src={BASE_URL + "/images/araqel.jpg"} alt="Event" />
            </div>
        </div>
    );
};

export default UpcomingEvents;
