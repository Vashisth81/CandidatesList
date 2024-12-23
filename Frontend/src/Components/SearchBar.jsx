import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ setCandidatesData }) => {
    const [query, setQuery] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const fetchData = await axios.get(
                import.meta.env.VITE_SERVER +
                    import.meta.env.VITE_CANDIDATES_API,
                {
                    params: { query },
                }
            );
            setCandidatesData(fetchData.data.fetchedData);
        } catch (e) {
            console.log("Error", e.response.data.details);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                name="query"
                id="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Name or Skill"
                className="flex-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
