require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "BRI Training API is running 🚀"
    });
});

// GET customers
app.get("/api/customers", (req, res) => {
    res.json([
        { id: 1, name: "PT Maju Jaya", city: "Jakarta" },
        { id: 2, name: "PT Nusantara Abadi", city: "Bandung" }
    ]);
});

// GET customer by ID
app.get("/api/customers/:id", (req, res) => {
    res.json({
        id: req.params.id,
        name: "Dummy Customer",
        city: "Jakarta",
        status: "Active"
    });
});

// POST lead
app.post("/api/leads", (req, res) => {
    res.status(201).json({
        success: true,
        message: "Lead created",
        data: {
            id: 1001,
            ...req.body
        }
    });
});

// PUT lead
app.put("/api/leads/:id", (req, res) => {
    res.json({
        success: true,
        message: "Lead updated",
        data: {
            id: req.params.id,
            ...req.body
        }
    });
});

// Error simulation
app.get("/api/error", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Dummy error for testing"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});