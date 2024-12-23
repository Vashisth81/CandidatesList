import React from "react";
import CandidatesListItem from "./CandidatesListItem";

const CandidatesList = ({ candidatesData }) => {
    return (
        <table className="w-full border-collapse border border-gray-300 text-left text-sm">
            <thead>
                <tr className="bg-gray-100">
                    <td className="p-2 border-b">Name</td>
                    <td className="p-2 border-b">Skills</td>
                    <td className="p-2 border-b">Experience</td>
                </tr>
            </thead>
            <tbody>
                {candidatesData.map((candidate, index) => (
                    <tr
                        key={index}
                        className={`hover:bg-gray-50 ${
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                    >
                        <CandidatesListItem candidate={candidate} />
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CandidatesList;
