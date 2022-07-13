import React from "react";
import MembersList from '../../../data/MembersList.json';

import '../../../assets/css/Table.css'
export default function Table(){
    const MemberArray = MembersList["members"]
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Member</th>
                        <th>Assignment</th>
                    </tr>
                    {MemberArray.map(member => (
                        <>
                            <tr key={member.name}>
                                <td key={member.name}>{member.name}</td>
                                <td key={member.assignment}>{member.assignment}</td>
                            </tr>
                        </>
                    ))}
                </tbody>

            </table>
        </>
    )
}