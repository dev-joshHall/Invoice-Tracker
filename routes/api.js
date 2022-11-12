const express = require('express');
const Invoice = require('../models/invoice')
const Test = require('../models/test')
const router = express.Router();

router.get('/api/getInvoiceData', (req, res) => {

    Invoice.find({})
        .then((data) => {
            console.log("Data: ", data)
            res.json(data)
        })
        .catch((error) => {
            console.log('error: ', dataerror)
        });
});

router.get('/api/name', (req, res) => {
    const data = {
        username: 'John',
        age: 100
    };
    res.json(data);
});

router.get('/api/test', (req, res) => {
    Test.find({})
        .then((data) => {
            console.log("DATA: ", data)
            res.json(data)
        })
        .catch((error) => {
            console.log('error: ', dataerror)
        });
});
router.post('/api/testPost', (req, res) => {
    console.log("body: ", req.body);
    const data = req.body
    const newTestPost = new Test(data)
    newTestPost.save((error) => {
        if (error) {
            res.status().json({ msg: "sorry internal server error" })
        } else {
            res.json({
                msg: 'we recieved your message'
            })
        }
    }
    )

})
module.exports = router;