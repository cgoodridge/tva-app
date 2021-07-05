
import React from 'react';
import threatContent from './threat-content';
import ThreatList from '../components/ThreatList';
import Container from '@material-ui/core/Container';


const ThreatListPage = () => (
    <>
        <Container>
            <h1 className="pageHeader">Sacred Timeline</h1>
        </Container>

        <div className="sacredTimeline">
            <svg className="sacredTimelinePath">
                <path>
                    
                </path>
            </svg>
        </div>

        <Container>
            <ThreatList threats={threatContent}/>
        </Container>
    </>
    
)

export default ThreatListPage;