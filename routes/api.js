const express = require('express');
const Invoice = require('../models/invoice')
const Test = require('../models/test')
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

router.get('/api/getinvoicedata-All', (req, res) => {
    async function main() {
        const uri = "mongodb+srv://WinvoiceDB:Winvoice4TheWin@cluster0.erdkqut.mongodb.net/?retryWrites=true&w=majority"
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        try {
            await client.connect();
            //await listDatabases(client);
            //await createInvoice(client, data);
            const data = await findOneListingByName(client, "");
            res.json(data);
            console.log(data)

        } catch (e) {
            console.error(e)
        } finally {
            await client.close();
        }
    }

    async function findOneListingByName(client, nameOfListing) {
        const result = await client.db("WinvoiceDB").collection("invoice_record").find({}).toArray()
        if (result) {
            return result;
        } else {
            console.log('No listings found')
        }
    }
    main().catch(console.err);
});

router.post('/api/singleInvoicePost', (req, res) => {
    async function main() {
        const data = req.body
        console.log(data);
        const uri = "mongodb+srv://WinvoiceDB:Winvoice4TheWin@cluster0.erdkqut.mongodb.net/?retryWrites=true&w=majority"
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        try {
            await client.connect();
            //await listDatabases(client);
            await createInvoice(client, data);
            //await findOneListingByName(client, "");

        } catch (e) {
            console.error(e)
        } finally {
            await client.close();
        }
    }

    async function createInvoice(client, newInvoice) {
        const result = await client.db("WinvoiceDB").collection("invoice_record").insertOne(newInvoice);
        console.log(result)
    }

    main().catch(console.err);

})

router.post('/api/BulkInvoicePost', (req, res) => {
    async function main() {
        const data = req.body
        console.log(data);
        const uri = "mongodb+srv://WinvoiceDB:Winvoice4TheWin@cluster0.erdkqut.mongodb.net/?retryWrites=true&w=majority"
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        try {
            await client.connect();
            //await listDatabases(client);
            await createInvoice(client, data);
            //await findOneListingByName(client, "");

        } catch (e) {
            console.error(e)
        } finally {
            await client.close();
        }
    }

    async function createInvoice(client, newInvoice) {
        const result = await client.db("WinvoiceDB").collection("invoice_record").insertMany(newInvoice);
        console.log(result)
    }

    main().catch(console.err);

})

router.get('/api/getNewInvoiceNumber', (req, res) => {
    async function main() {
        const uri = "mongodb+srv://WinvoiceDB:Winvoice4TheWin@cluster0.erdkqut.mongodb.net/?retryWrites=true&w=majority"
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        try {
            await client.connect();
            //await listDatabases(client);
            //await createInvoice(client, data);
            const data = await getNewInvoiceNumber(client, "");
            res.json(data)
            console.log(data)

        } catch (e) {
            console.error(e)
        } finally {
            await client.close();
        }
    }

    async function getNewInvoiceNumber(client, nameOfListing) {
        const object = await client.db("WinvoiceDB").collection("invoice_record").find().sort({ invoice_number: -1 }).limit(1).toArray();
        const result = object[0].invoice_number
        if (result) {
            return result;
        } else {
            console.log('No listings found')
        }
    }
    main().catch(console.err);

})

router.get('/api/getNewBulkId', (req, res) => {
    async function main() {
        const uri = "mongodb+srv://WinvoiceDB:Winvoice4TheWin@cluster0.erdkqut.mongodb.net/?retryWrites=true&w=majority"
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        try {
            await client.connect();
            //await listDatabases(client);
            //await createInvoice(client, data);
            const data = await getNewBulkNumber(client, "");
            res.json(data)
            console.log(data)

        } catch (e) {
            console.error(e)
        } finally {
            await client.close();
        }
    }

    async function getNewBulkNumber(client, nameOfListing) {
        const object = await client.db("WinvoiceDB").collection("invoice_record").find().sort({ bulk_id: -1 }).limit(1).toArray();
        const result = object[0].bulk_id
        if (result) {
            return result;
        } else {
            console.log('No listings found')
        }
    }
    main().catch(console.err);

})
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