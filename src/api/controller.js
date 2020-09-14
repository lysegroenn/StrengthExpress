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
            //let user = req.user.googleId;
            let { stats, user } = req.body;
            let { k, b, m } = stats;
            if(!stats || !user) {
                res.status(400).json({success: false})
                return
            }
            const addRecordResult = await StrengthDao.addRecord(user, stats)
            console.log(addRecordResult.result.n)
            if(addRecordResult.result.n != 1){
                res.status(500).json({success: false, msg: "Something went wrong.."})
                return
            }
            res.status(201).json({success: true})
        } catch (err) {
            console.log(err)
            res.status(500).json({msg: "Something went wrong.."})
        }
    }


};
