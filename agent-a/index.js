const axios = require('axios');
const session = async () => {
    const payload = {
        type: "SYN",
        task: "verify_document",
        agentA_id: "0xAgentA",
        min_trust_score: 0.75,
        context: {
            doc_url: "ipfs://abc123",
            deadline: "2025-04-20T12:00:00Z"
        }
    };
    const res = await axios.post("http://localhost:3002", payload);
    console.log("Agent B response:", res.data);
};
session();