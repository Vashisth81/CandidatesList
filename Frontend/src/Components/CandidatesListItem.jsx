import React from "react";

const CandidatesListItem = ({ candidate }) => {
    return (
        <>
            <td className="p-2 border-b">{candidate.full_name}</td>
            <td className="p-2 border-b">{candidate.skills.join(", ")}</td>
            <td className="p-2 border-b">{candidate.years_of_experience}</td>
        </>
    );
};

export default CandidatesListItem;
