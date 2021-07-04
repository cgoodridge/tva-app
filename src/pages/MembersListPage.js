import React, { useState, useEffect }  from 'react';
import threatContent from './threat-content';
import MembersList from '../components/MembersList';

const MembersListPage = ({ match }) => {

    const name = match.params.name;
    const threat = threatContent.find(threat => threat.name === name);


    const [members, setMembersList] = useState({ title: '', name: '', status: '', bio: ''});

    useEffect(() => {

        const fetchData = async () => {
            const result = await fetch(`/api/members`);
            const body = await result.json();
            setMembersList(body);
            console.log(body);
        }
        fetchData();
        
    }, [name]);

    return(
    
        <>
            <h1>Members</h1>
            <MembersList members={members}/>
        </>
        
    )
}




export default MembersListPage;