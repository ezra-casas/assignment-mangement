import React from 'react'
import MemberList from '../database/MembersList.json'
import {v4 as uuid} from 'uuid';

export default function Home() {
    let createId = uuid();
    const MembersArray = MemberList.members

    
    // maps in react cannot use {}
    return (
        <div className='container'>
            <div className='member-list'>
                <label htmlFor="list-dropdown">Members</label>
                
                <select name="members" id="members-dropdown">
                    {
                    /* Using map only works if used within the return of html elements....
                    TODO: find out why it doens't work outside of return 
                    */}
                    {MembersArray.map(member => (
                        <option key={member.name}>{member.name}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
