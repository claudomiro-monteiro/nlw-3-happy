import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import mapMarkerImg from "../images/map-marker.svg";

import '../styles/components/sidebar.css';

export default function Sidebar() {
    const navigate = useNavigate();

    return (
        <aside className="sidebar">
            <img src={mapMarkerImg} alt="Happy" />

            <footer>
                <button type="button" onClick={() => navigate('/app')}> 
                    <FiArrowLeft size={24} color="#FFF" />
                </button>
            </footer>
        </aside>
    );
} 
