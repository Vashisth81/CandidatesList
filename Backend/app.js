require("dotenv").config();
const express = require("express");
const app = express();
const MockCandidateData = require("./MOCK_DATA");
const cors = require("cors");

app.use(
    cors({
        origin: [process.env.ALLOWED_URL_1],
        methods: ["GET"],
        optionsSuccessStatus: 200,
    })
);

app.get(process.env.API_CANDIDATES, (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            const fetchedData = MockCandidateData.sort(
                (a, b) => a.years_of_experience - b.years_of_experience
            );
            return res.status(200).json({ fetchedData });
        }

        const fetchedData = MockCandidateData.filter((candidate) => {
            const nameMatches = candidate.full_name
                .toLowerCase()
                .includes(query.toLowerCase());
            const skillsMatch = candidate.skills.some(
                (skill) => skill.toLowerCase() == query.toLowerCase()
            );
            return nameMatches || skillsMatch;
        }).sort((a, b) => a.years_of_experience - b.years_of_experience);
        return res.status(200).json({ fetchedData });
    } catch (e) {
        return res.status(400).json({
            error: "Bad Request.",
            details: e.message,
        });
    }
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
