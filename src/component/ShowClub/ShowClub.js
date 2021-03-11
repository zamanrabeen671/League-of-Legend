import React from 'react';
import { useHistory } from 'react-router';
import './ShowClub.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
const ShowClub = (props) => {
    const history = useHistory();
    const {strTeam, strTeamBadge, idTeam, strSport} = props.clubName;
    const ExploreHandler = id => {
        const url = `/club/${id}`;
        history.push(url)
    }
    return (
        <div className="club-container container">
            <img src={strTeamBadge} alt="" className="logos"/>
            <h1>{strTeam}</h1>
            <p>Sports Type: {strSport}</p>
            <button className="btn btn-success" onClick={() => ExploreHandler(idTeam)}>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    );
};

export default ShowClub;