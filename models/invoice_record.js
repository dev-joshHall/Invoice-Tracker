const MongoClient = require('mongodb').MongoClient;

data = {
    "invoiceNumber": "10008",
    "product": ["tires"],
    "description": ["Boxes of tires"],
    "orderedQuantity": ["100"],
    "unitOfMeasure": ["Crates"],
    "unitPrice": ["50"],
    "total": ["5000.0"],
    "orderTotal": "5000.0",
    "taxes": "150.0",
    "status": "Paid",
    "bulkId": "10000",
    "attributes": [""],
    "companyName": "TiresI need",
    "billedDate": "10/22/2022",
    "phoneNumber": "8012345678",
    "email": "admin@tires.org",
    "streetAddress": "1234 tires Lane",
    "address 2": "",
    "zip": "12345",
    "city": "Salt Lake City",
    "state": "Utah",
    "country": "United States"
}
async function main() {
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

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
    console.log("databases: ");
    databasesList.databases.forEach(db => console.log(db.name))
}

async function createInvoice(client, newInvoice) {
    const result = await client.db("WinvoiceDB").collection("invoice_record").insertOne(newInvoice);
    console.log(result)
}

async function findOneListingByName(client, nameOfListing) {
    const result = await client.db("WinvoiceDB").collection("invoice_record").find({}).toArray()
    if (result) {
        console.log(`Found a listing in the collection:`)
        console.log(result)
        console.log(result[2].orderedQuantity[0].$numberLong)
    } else {
        console.log('No listings found')
    }
}
main().catch(console.err);
