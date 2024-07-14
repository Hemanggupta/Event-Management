import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useNavigate } from 'react-router-dom';
import { ROUTER_CONSTANTS } from '../../Routes/routes.model';
import eventImg from './../../assets/Images/event-placeholder.jpg';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Card className="glass-card hero-card">
        <div
          className="img-wrapper d-flex
        flex-column justify-content-center align-items-center"
        >
          <img className="event-img p-3" src={eventImg} alt="Event" />
          <Button
            onClick={() => navigate(ROUTER_CONSTANTS.REGISTER)}
            label="Register"
            className="register-btn mx-auto rounded bg-warning p-button-raised p-button-rounded"
          />
        </div>
      </Card>
    </>
  );
}

export default Home;
