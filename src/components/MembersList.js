import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const MemberList = ({ members }) => (
    <>
    {members.map((member, key) => (

        <Card key={key}>
            <Typography variant="h5" component="h2">
                {member.title}
            </Typography>
        </Card>

    ))}
    </>
);

export default MemberList;