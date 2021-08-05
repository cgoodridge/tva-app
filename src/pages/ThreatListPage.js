
import React from 'react';
import threatContent from './threat-content';
import ThreatList from '../components/ThreatList';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const ThreatListPage = () => (
    <>
        <Container>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <h1 className="pageHeader">Sacred Timeline</h1>
                </Grid>
                <Grid item xs={12} sm={6} container>
                    <Grid item xs={12} sm={7}>
                        <h2 className="pageHeader">Multiple Nexus Events Detected!</h2>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <div className="redLight"></div>
                    </Grid>
                </Grid>
               
            </Grid>
        </Container>

        <div className="sacredTimeline">
            <video autoPlay loop muted>
                <source src="./video/sacred_timeline.mp4" type="video/mp4"></source>
            </video>
        </div>

        <Container>
            <ThreatList threats={threatContent}/>
        </Container>
    </>
    
)

export default ThreatListPage;