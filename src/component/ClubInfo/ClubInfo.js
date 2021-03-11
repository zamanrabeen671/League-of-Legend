import React from 'react';
import MaleImage from '../../img/male.png';
import FemaleImage from '../../img/female.png';
import Facebook from '../../img/Facebook.png';
import Youtube from '../../img/YouTube.png';
import Twitter from '../../img/Twitter.png'
import './ClubInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faMapMarker, faFlag, faMarsStroke} from '@fortawesome/free-solid-svg-icons';

const ClubInfo = (props) => {
    const { strTeam, intFormedYear, strCountry, strGender, strSport, strDescriptionEN, strStadiumThumb, strTeamBadge, strFacebook, strTwitter, strYoutube} = props.club;

    let sideImage;
    if (strGender === 'Male') {
        sideImage = <img src={MaleImage} alt="" className="gender-image" />
    }
    else {
        sideImage = <img src={FemaleImage} alt="" className="gender-image" />
    }
    return (
        <div className="boyd-div">
            <div className="club-info-banner container">
                <img src={strStadiumThumb} alt="" className="banner" />
                <div className="logo-overlay">
                    <img src={strTeamBadge} alt="" className="logo" />
                </div>
            </div>
            <div className="container ">
                <div className="club-details-div">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-sm-12 description-div">
                            <h2>{strTeam}</h2>
                            <p><FontAwesomeIcon icon={faMapMarker} /> Founded: {intFormedYear}</p>
                            <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                            <p><FontAwesomeIcon icon={faFutbol} /> Sports Type: {strSport}</p>
                            <p><FontAwesomeIcon icon={faMarsStroke} /> Gender:  {strGender}</p>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12">
                            {
                                sideImage
                            }
                        </div>
                    </div>
                </div>
                <div className="description">
                    <p>{strDescriptionEN}</p>
                </div>
                <div className="social-icon">
                    <a href={`https://${strFacebook}`} target="_blank" rel="noreferrer"><img src={Facebook} alt="" /></a>
                    <a href={`https://${strTwitter}`} target="_blank" rel="noreferrer"><img src={Twitter} alt="" /></a>
                    <a href={`https://${strYoutube}`} target="_blank" rel="noreferrer"><img src={Youtube} alt="" /></a>
                </div>
            </div>
        </div>
    );
};

export default ClubInfo;