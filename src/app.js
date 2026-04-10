require("dotenv").config();

const express = require("express");
const cors = require("cors");

const customerRoutes = require("./routes/customerRoutes");
const leadRoutes = require("./routes/leadRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "BRI Training API is running"
    });
});

app.use("/api/customers", customerRoutes);
app.use("/api/leads", leadRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});