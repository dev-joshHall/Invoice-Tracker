import React, { Component, useNavigate } from 'react';
import axios from 'axios';
import styles from "../style/newrecordstyle.module.css"


class CreateRecord extends Component {
    state = {
        invoice_number: '',
        bulk_id: '',
        product: '',
        status: '',
        billed_date: '',
        paid_date: '',
        notes: '',
        taxes: '',
        order_total: '',
        description: '',
        quantity: '',
        unit: '',
        unit_price: '',
        total: '',
        first_name: '',
        last_name: '',
        company_name: '',
        phone_number: '',
        email: '',
        street_address: '',
        address_2: '',
        zip: '',
        city: '',
        state: '',
        country: '',

        testData: []
    }

    componentDidMount = () => {
        this.getInvoiceNumber();
        this.getBulkId();
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        })
    }

    submit = (event) => {
        event.preventDefault();

        const payload = {
            invoice_number: this.state.invoice_number,
            bulk_id: this.state.bulk_id,
            status: this.state.status,
            billed_date: this.state.billed_date,
            paid_date: this.state.paid,
            notes: this.state.notes,
            taxes: this.state.taxes,
            order_total: this.state.order_total,
            product: [this.state.product],
            description: [this.state.description],
            quantity: [this.state.quantity],
            unit: [this.state.unit],
            unit_price: [this.state.unit_price],
            total: [this.state.total],
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            company_name: this.state.company_name,
            phone_number: this.state.phone_number,
            email: this.state.email,
            street_address: this.state.street_address,
            address_2: this.state.address_2,
            zip: this.state.zip,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
        }

        axios({
            url: 'http://localhost:8080/api/singleInvoicePost',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('Success')
            })
            .catch(() => {
                console.log('ERROR')
            })
        this.state.status = '';


    }

    getInvoiceNumber = () => {
        axios.get('http://localhost:8080/api/getNewInvoiceNumber')
            .then((response) => {
                const data = response.data
                //can change testData to mach any array you set in the state
                console.log(data);
                const invoiceNumber = data + 1;
                this.setState({ invoice_number: invoiceNumber })
                console.log("Data has been recieved")

            })
            .catch(() => {
                console.log("error has occured")
            })
    }

    getBulkId = () => {
        axios.get('http://localhost:8080/api/getNewBulkId')
            .then((response) => {
                const data = response.data
                //can change testData to mach any array you set in the state
                console.log(data);
                const bulk_id = data + 1;
                this.setState({ bulk_id: bulk_id })
                console.log("Data has been recieved")

            })
            .catch(() => {
                console.log("error has occured")
            })
    }
    render() {
        console.log('State ', this.state)

        return (
            <div>

                <form onSubmit={this.submit}
                    className={styles.form}>
                    <div className='form-input'>
                        <h3> Create Record</h3>
                        <div className={styles.section}>

                            <span className={styles.sectionTitle}>Invoice Summary</span>
                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> Status</span>
                                </div>
                                <input
                                    className={styles.input}
                                    type="textarea"
                                    name="status"
                                    value={this.state.status}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>
                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> Billed Date</span>
                                </div>
                                <input
                                    className={styles.input}
                                    type="textarea"
                                    name="billed_date"
                                    value={this.state.billed_date}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>

                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> Paid Date</span>
                                </div>
                                <input
                                    className={styles.input}
                                    type="textarea"
                                    name="paid_date"
                                    value={this.state.paid_date}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>

                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> Notes</span>
                                </div>
                                <textarea

                                    style={{ "height": "100px", "borderWidth": "2px" }}
                                    className={styles.input}
                                    name="notes"
                                    value={this.state.notes}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>
                            <div style={{ "padding": "5px" }}> </div>
                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> Taxes</span>
                                </div>
                                <input
                                    className={styles.input}
                                    type="textarea"
                                    name="taxes"
                                    value={this.state.taxes}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>

                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> Order Total</span>
                                </div>
                                <input
                                    className={styles.input}
                                    type="textarea"
                                    name="order_total"
                                    value={this.state.order_total}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className={styles.section}>

                            <span className={styles.sectionTitle}>Product Information</span>
                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> Product </span>
                                </div>
                                <input
                                    className={styles.input}
                                    type="textarea"
                                    name="product"
                                    value={this.state.product}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>
                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> Description</span>
                                </div>
                                <input
                                    className={styles.input}
                                    type="textarea"
                                    name="description"
                                    value={this.state.description}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>

                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> Quantity</span>
                                </div>
                                <input
                                    className={styles.input}
                                    type="textarea"
                                    name="quantity"
                                    value={this.state.quantity}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>

                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> Unit</span>
                                </div>
                                <input
                                    className={styles.input}
                                    type="textarea"
                                    name="unit"
                                    value={this.state.unit}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>

                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> Unit Price</span>
                                </div>
                                <input
                                    className={styles.input}
                                    type="textarea"
                                    name="unit_price"
                                    value={this.state.unit_price}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>

                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> Total</span>
                                </div>
                                <input
                                    className={styles.input}
                                    type="textarea"
                                    name="total"
                                    value={this.state.total}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className={styles.section}>

                            <span className={styles.sectionTitle}>Contact Information</span>
                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> First Name </span>
                                </div>
                                <input
                                    className={styles.input}
                                    type="textarea"
                                    name="first_name"
                                    value={this.state.first_name}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>
                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> Last Name</span>
                                </div>
                                <input
                                    className={styles.input}
                                    type="textarea"
                                    name="last_name"
                                    value={this.state.last_name}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>

                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> Company Name</span>
                                </div>
                                <input
                                    className={styles.input}
                                    type="textarea"
                                    name="company_name"
                                    value={this.state.company_name}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>

                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> Phone Number</span>
                                </div>
                                <input
                                    className={styles.input}
                                    type="textarea"
                                    name="phone_number"
                                    value={this.state.phone_number}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>

                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> Email</span>
                                </div>
                                <input
                                    className={styles.input}
                                    type="textarea"
                                    name="email"
                                    value={this.state.email}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>

                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> Street Address</span>
                                </div>
                                <input
                                    className={styles.input}
                                    type="textarea"
                                    name="street_address"
                                    value={this.state.street_address}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>

                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> Address 2</span>
                                </div>
                                <input
                                    className={styles.input}
                                    type="textarea"
                                    name="address_2"
                                    value={this.state.address_2}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>

                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> Zip </span>
                                </div>
                                <input
                                    className={styles.input}
                                    type="textarea"
                                    name="zip"
                                    value={this.state.zip}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>

                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> City</span>
                                </div>
                                <input
                                    className={styles.input}
                                    type="textarea"
                                    name="city"
                                    value={this.state.city}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>

                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> State</span>
                                </div>
                                <input
                                    className={styles.input}
                                    type="textarea"
                                    name="state"
                                    value={this.state.state}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>

                            <div className={styles.inlineBox}>

                                <div className={styles.inputBox}>
                                    <span className={styles.inputTitle}> Country</span>
                                </div>
                                <input
                                    className={styles.input}
                                    type="textarea"
                                    name="country"
                                    value={this.state.country}
                                    placeholder=''
                                    onChange={this.handleChange} />
                            </div>
                        </div>

                    </div>

                    <button className={styles.create} onClick={() => window.location.href = "/Upload"}> Create </button>
                </form>

                <div className="testDataArea">

                </div>
            </div>

        )

    }
}

export default CreateRecord;