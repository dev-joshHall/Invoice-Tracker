//Libraries
const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')

//constants
const app = express();
const PORT = 8080;

const routes = require('./routes/api')

const ASHTONTEST = 'mongodb+srv://m001-student:Stuff@cluster0.dxosm2l.mongodb.net/?retryWrites=true&w=majority';
const INVOICEDB = 'mongodb+srv://WinvoiceDB:Winvoice4TheWin@cluster0.erdkqut.mongodb.net/?retryWrites=true&w=majority'
//mongo connection
mongoose.connect(INVOICEDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("Mongo DB Connected");
});


app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//Saving data
// const data = {
//     invoiceNumber: 100005,
//     product: "Bread",
//     description: "Lots of bread",
//     orderedQuantity: 1000,
//     unitOfMeasure: "loafs",
//     unitPrice: 2,
//     total: 2000,
//     taxes: 20,
//     status: "Pending",
//     bulkId: 12345,
//     attributes: [],
//     companyName: "Jingle Bell Bread",
//     billedDate: "10-07-2022",
//     phoneNumber: "8013456789",
//     email: "admin@jinglebellbread.com",
//     streetAddress: "1234 smith rd",
//     address_2: "Suite 4",
//     zip: "12345",
//     city: "Salt Lake City",
//     state: "Utah",
//     country: "United States"
// }

//const newInvoiceRecord = new Invoice(data)

// newInvoiceRecord.save((error)=>{
//     if (error) {
//         console.log("Ooops something went wrong")
//     }
//     else{
//         console.log('Data has been saved')
//     }
// })
//api's

//used items
app.use(cors());

app.use(morgan('tiny'));
app.use('/', routes)


//listen ports
app.listen(PORT, console.log(`server is starting at ${PORT}`))