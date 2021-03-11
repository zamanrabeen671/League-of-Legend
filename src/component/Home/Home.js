import React, { useEffect, useState } from 'react';
import ShowClub from '../ShowClub/ShowClub';

import './Home.css'
const Home = () => {
    const [club, setClub] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
            .then(res => res.json())
            .then(data => setClub(data.teams.slice(0, 15)))
    }, [])
    return (
        <div className="Home-container">
            <div className="banner-div">
                <div className="banner-overlay">
                    <h1 className="club-name">League of Legends</h1>
                </div>
            </div>
            <div className="container club-div">
                <div className='row'>
                    {
                        club.map(clubName =>
                            <div className="col-md-6 col-lg-4 col-sm-12">
                                <ShowClub clubName={clubName} key = {club.idTeam}></ShowClub>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;