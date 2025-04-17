const express = require('express');
const app = express();
app.use(express.json());
app.post('/', (req, res) => {
    const { agentA_id } = req.body;
    const response = {
        type: "SYN-ACK",
        agentB_id: "0xAgentB",
        confidence_score: 0.82,
        reputation: 0.91,
        model_version: "v3.4",
        signed_proof: "0xsignature"
    };
    res.json(response);
});
app.listen(3002);