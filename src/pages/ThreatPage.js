import React, { useState, useEffect } from 'react';
import threatContent from './threat-content';
import AddCommentForm from '../components/AddCommentForm';
import CommentsList from '../components/CommentsList';
import NotFoundPage from './NotFoundPage';
import ThreatList from '../components/ThreatList';
import ThreatLevelSection from '../components/ThreatLevelSection';

const ThreatPage = ({ match }) => {


    const name = match.params.name;
    const threat = threatContent.find(threat => threat.name === name);


    const [threatInfo, setThreatInfo] = useState({ threatLevel: 0, comments: []});

    useEffect(() => {

        const fetchData = async () => {
            const result = await fetch(`/api/threat/${name}`);
            const body = await result.json();
            setThreatInfo(body);
            console.log(body);
        }
        fetchData();
        
    }, [name]);

    if (!threat) return <NotFoundPage />
    const recentThreats = threatContent.filter(threat => threat.name !== name);

    return(
        <>
            <h1>{threat.title} </h1>
            <ThreatLevelSection threatName={name} threatLevel={threatInfo.threatLevel} setThreatInfo={setThreatInfo}/>
            {threat.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <AddCommentForm threatName={name} setThreatInfo={setThreatInfo} />
            <CommentsList comments={threatInfo.comments} />
            <h3>Recent Threats</h3>
            <ThreatList threats={recentThreats} />
        </>
    );
    
    
}

export default ThreatPage;