const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://WinvoiceDB:Winvoice4TheWin@cluster0.erdkqut.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

client.connect();

const result = client.db("WinvoiceDB").collection("invoice_record").find({}).toArray()
if (result) {
    console.log(`Found a listing in the collection:`)
    console.log(result)
} else {
    console.log('No listings found')
}

console.log(result);