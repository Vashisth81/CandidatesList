import React, { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import CandidatesList from "../Components/CandidatesList";

const CandidatesPage = () => {
    const [candidatesData, setCandidatesData] = useState([]);
    const [sortOrder, setSortOrder] = useState("inc");

    const sortCandidates = (data) => {
        return [...data].sort((a, b) => {
            if (sortOrder == "inc") {
                return a.years_of_experience - b.years_of_experience;
            } else {
                return b.years_of_experience - a.years_of_experience;
            }
        });
    };

    useEffect(() => {
        setCandidatesData((prevData) => sortCandidates(prevData));
    }, [sortOrder]);

    return (
        <div className="p-6 bg-white shadow rounded-lg space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <SearchBar setCandidatesData={setCandidatesData} />
                <div className="flex items-center gap-2">
                    <label htmlFor="sortDropdown">Sort By Experience:</label>
                    <select
                        id="sortDropdown"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="inc">Increasing</option>
                        <option value="dec">Decreasing</option>
                    </select>
                </div>
            </div>
            {candidatesData && candidatesData.length > 0 && (
                <CandidatesList candidatesData={candidatesData} />
            )}
        </div>
    );
};

export default CandidatesPage;
