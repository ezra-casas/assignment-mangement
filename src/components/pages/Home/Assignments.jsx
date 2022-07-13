import React from 'react'
import assignmentList from '../../../data/Assignments.json'

import '../../../assets/css/assignments.css';

export default function Members() {
    const assignmentArray = assignmentList.assignments
    
    return (
        <>
            <div className='assignment-list'>
                <label htmlFor="list-dropdown"><h1>Assignments:</h1></label>
                <input type="text" name="assignment" id="assignment" placeholder='Assignment...'/>
                <select name="assignments" id="assignments-dropdown">
                    {assignmentArray.map(member => (
                        <option key={Math.floor(Math.random() * 100000)}>{member.assignment}</option>
                    ))}
                </select>
                
            </div>
        </>
    )
}
