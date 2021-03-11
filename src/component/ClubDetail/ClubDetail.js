import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ClubInfo from '../ClubInfo/ClubInfo';
import './ClubDetail.css';

const ClubDetail = () => {
    const {name} = useParams()
    const [details, setDetails] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${name}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.teams))
    }, [name])
    return (
        <div>

            {
                details.map(club => <ClubInfo club = {club} key = {details.idTeam}></ClubInfo>)
            }
        </div>
    );
};

export default ClubDetail;