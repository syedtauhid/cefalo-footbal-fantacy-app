import React from 'react';

const PlayerRow = ({data}) => {
    const {name, altIds, info, nationalTeam} = data;
    const playerImgUrl = (altId) => 'https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/' + altId + '.png';
    return (
        <tr>
            <td>
                <a className="player-name" href="#">
                    <img className="img" src={playerImgUrl(altIds.opta)} alt={name.display} />{name.display}
                </a>
            </td>
            <td className="hide-s">{info.positionInfo}</td>
            <td className="hide-s">
                <span className={`flag ${nationalTeam.isoCode}`}></span>
                <span className="player-country">{nationalTeam.country}</span>
            </td>
        </tr>
    )
};

export default PlayerRow;
