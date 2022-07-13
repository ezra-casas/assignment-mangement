import React from 'react'
import MemberList from '../../../data/MembersList.json'

import '../../../assets/css/members.css'
export default function Members() {
    const MembersArray = MemberList.members
    // maps in react cannot use {}
    return (
        <>
            <div className='member-list'>
                <label htmlFor="list-dropdown"><h1>Members:</h1></label>
                <input type="text" placeholder='Members name...' />
                <select name="members" id="members-dropdown">
                    {MembersArray.map(member => (
                        <option key={member.name}>{member.name}</option>
                    ))}
                </select>
                
            </div>
        </>
    )
}
