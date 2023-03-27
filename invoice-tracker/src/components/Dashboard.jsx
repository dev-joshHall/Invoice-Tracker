import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dinoImage from '../imgs/dino.png'
import {
    Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale,
    LinearScale,
    BarElement,
    Title,
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title);
export const doptions = {
    legend: {
        display: false,
    }
};
export const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Chart.js Horizontal Bar Chart',
        },
    },
};

export const data2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [1, 10, 15, 24, 23, 39, 1],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 1',
            data: [1, 10, 15, 24, 23, 39, 1],
            borderColor: 'rgb(114, 164, 212)',
            backgroundColor: 'rgba(	173, 216, 230)',
        }
    ],
};

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [50, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export const baroptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};



export const bardata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [10, 20, 30, 40, 30, 20, 10],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: [10, 20, 30, 40, 30, 20, 10],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

function Dashboard() {
    return (<div>
        <h3 style={{ "paddingLeft": "60px", "paddingTop": "20px", "textDecoration": "underline" }}> Invoicing Dashboard </h3>
        <Container>
            <Row>
                <Col sm={8}> <Bar options={options} data={data2} /></Col>
                <Col sm={4}>
                    <div>
                        <h3 style={{"textAlign": "center" }}> Total Invoices</h3>
                        <h1 style={{ "fontSize": "4em", "textAlign": "center" }}> 123</h1>
                    </div>
                    <div style={{"height": "50%", "padding": "0px"}}>
                        <Doughnut options={doptions} data={data} />
                    </div>
                    
                </Col>
            </Row>
            <Row>
                <Col sm><Bar options={baroptions} data={bardata} /></Col>
                <Col sm><Bar options={baroptions} data={bardata} /></Col>
            </Row>
        </Container>
    </div>

    );
}

export default Dashboard;