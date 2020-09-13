const StrengthDao = require('../dao/dao');

module.exports = {
    test: (req, res) => {
        try {
            res.status(200).json({msg: "Alles gut."})
        } catch (err) {
            res.status(500).json({msg: "Something went wrong.."})
        }
    },
    testGet: async (req, res) => {
        try {
            const testGetResult = await StrengthDao.testGet();
            console.log(testGetResult)
            res.status(200).json({success: true, data: testGetResult});
        } catch (err) {
            console.log(err)
            res.status(500).json({msg: "Something went wrong.."})
        }
    }


};