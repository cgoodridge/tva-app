import React from 'react';
import { Link } from 'react-router-dom';

const ThreatList = ({ threats }) => (
    <>
    {threats.map((threat, key) => (

        <Link key={key} to={`/threat/${threat.name}`}>
            <h3>{threat.title}</h3>
            <p>{threat.content[0].substring(0,150)}...</p>
        </Link>

    ))}
    </>
);

export default ThreatList;