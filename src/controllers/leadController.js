const createLead = (req, res) => {
    res.status(201).json({
        success: true,
        message: "Lead created",
        data: {
            id: 1001,
            ...req.body
        }
    });
};

const updateLead = (req, res) => {
    const { id } = req.params;

    res.json({
        success: true,
        message: "Lead updated",
        data: {
            id: Number(id),
            ...req.body
        }
    });
};

module.exports = {
    createLead,
    updateLead
};