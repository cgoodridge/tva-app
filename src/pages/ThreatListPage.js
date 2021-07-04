
import React from 'react';
import threatContent from './threat-content';
import ThreatList from '../components/ThreatList';

const ThreatListPage = () => (
    <>
        <h1>Threats to the Sacred Timeline</h1>
        <ThreatList threats={threatContent}/>
    </>
    
)

export default ThreatListPage;