import React from 'react';

const PlayerRow = ({data}) => {
    const {player, image, position, flag, nationality} = data;
    return (
        <tr>
            <td>
                <a className="player-name" href="#">
                    <img className="img" src={image} alt={`Photo for ${player}`} />{player}
                </a>
            </td>
            <td className="hide-s">{position}</td>
            <td className="hide-s">
                <span className={`flag ${flag}`}></span>
                <span className="player-country">{nationality}</span>
            </td>
        </tr>
    )
};

export default PlayerRow;