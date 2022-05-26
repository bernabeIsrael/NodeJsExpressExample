
async function test(req, res) {
    try {
        const response = {
            ok: true
        }
        res.json(response);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = test;