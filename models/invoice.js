const mongoose = require('mongoose')
//schema
const Schema = mongoose.Schema;
const InvoiceSchema = new Schema({
    invoiceNumber: Number,
    product: String,
    description: String,
    orderedQuantity: Number,
    unitOfMeasure: String,
    unitPrice: Number,
    total: Number,
    taxes: Number,
    status: String,
    bulkId: Number,
    attributes: Array,
    companyName: String,
    billedDate: String,
    phoneNumber: String,
    email: String,
    streetAddress: String,
    address_2: String,
    zip: String,
    city: String,
    state: String,
    country: String
})

//Model
const Invoice = mongoose.model('InvoiceRecord', InvoiceSchema);

module.exports = Invoice;