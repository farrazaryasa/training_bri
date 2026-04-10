const getCustomers = (req, res) => {
    res.json([
        { id: 1, name: "PT Maju Jaya", city: "Jakarta" },
        { id: 2, name: "PT Nusantara Abadi", city: "Bandung" }
    ]);
};

const getCustomerById = (req, res) => {
    const { id } = req.params;

    res.json({
        id: Number(id),
        name: `Customer ${id}`,
        city: "Jakarta",
        status: "Active"
    });
};

module.exports = {
    getCustomers,
    getCustomerById
};