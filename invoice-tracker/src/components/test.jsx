import React, { Component } from 'react';
import axios from 'axios';

class test extends Component {
    state = {
        name: '',
        note: '',
        testData: [],
        invoiceData:[]
    }

    componentDidMount = () => {
        this.getTestData();
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
            name: this.state.name,
            note: this.state.note
        }

        axios({
            url: 'http://localhost:8080/api/testPost',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('Success')
            })
            .catch(() => {
                console.log('ERROR')
            })

    }
    //can change the name of function
    getTestData = () => {
        axios.get('http://localhost:8080/api/getinvoicedata-All')
            .then((response) => {
                const data = response.data
                //can change testData to mach any array you set in the state
                this.setState({ testData: data })
                console.log("Data has been recieved")

            })
            .catch(() => {
                console.log("error has occured")
            })
    }

    displayTestData = (testDatas) => {
        if (!testDatas.length) return null;

        return testDatas.map((data, index) => (
            <div key={index}>
                <div> {data.description.map((data, index) => (
                    <div key={index}>
                        <p>{data}</p>
                    </div>
                ))} </div>
            </div>
        ));
    };

    render() {
        console.log('State ', this.state)

        return (
            <div>
                <h1> Welcome to the app</h1>
                <form onSubmit={this.submit}>
                    <div className='form-input'>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            placeholder='name'
                            onChange={this.handleChange} />
                    </div>
                    <div className='form-input'>
                        <input
                            type="text"
                            name="note"
                            value={this.state.note}
                            placeholder='note'
                            onChange={this.handleChange} />
                    </div>
                    <button>Submit</button>
                </form>

                <div className="testDataArea">
                    {this.displayTestData(this.state.testData)}
                </div>
            </div>

        )

    }
}

export default test;