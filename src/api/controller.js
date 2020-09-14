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
    },
    addRecord: async (req, res) => {
        try {
            let user = "test";    //let user = req.user.googleId;
            let { stats } = req.body;
            let { k, b, m } = stats;
            if(!k || !b || !m) {
                res.status(400).json({success: false})
            } else {
                const addRecordResult = await StrengthDao.addRecord(user, stats)
                if(!addRecordResult.insertedId){
                    res.status(500).json({success: false, msg: "Something went wrong.."})
                } else {
                    res.status(201).json({success: true})
                }
            }
        } catch (err) {
            console.log(err)
            res.status(500).json({msg: "Something went wrong.."})
        }
    }


};