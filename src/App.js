import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CarsList from './CarsList'

class App extends Component {
    render() {
        const cars = [{
                id: 1001,
                name: 'Hyundai Xcent',
                color: 'White',
                capacity: '4 seater',
                price: '₹ 350',
                icon: 'xcent.jpg',
                details: {
                    model: 'Hyundai Xcent S (basic model)',
                    features: 'It has 2 Airbags, ABS, EBD, Central locking.',
                    vehicleNo: 'MX-3PD-1000',
                    fuel: 'Petrol',
                    maxSeating: 'upto 4 people'
                }
            },
            {
                id: 1002,
                name: 'Hyundai Creta',
                color: 'Silver',
                capacity: '5 seater',
                price: '₹ 1200',
                icon: 'creta.jpg',
                details: {
                    model: 'Hyundai Creta E 1.5',
                    features: 'It has 2 Airbags, ABS, EBD, Break Assist (BA), Central locking (Remote).',
                    vehicleNo: 'Xy-2kD-9008 ',
                    fuel: 'Diesel',
                    maxSeating: 'upto 5 people'
                }
            },
            {
                id: 1003,
                name: 'Tata Tiago',
                color: 'Mustard',
                capacity: '5 seater',
                price: '₹ 800',
                icon: 'tiago.png',
                details: {
                    model: 'Tata Tiago XE (basic model)',
                    features: 'It has 2 Airbags, ABS, EBD, Speed Alert, Anti theft device, Adjustable Headlights.',
                    vehicleNo: 'YX-3PD-1407',
                    fuel: 'Petrol',
                    maxSeating: 'upto 5 people'
                }
            },
            {
                id: 1004,
                name: 'Maruti Suzuki Ertiga',
                color: 'Red',
                capacity: '7 seater',
                price: '₹ 1500',
                icon: 'ertiga.jpg',
                details: {
                    model: 'Maruti Suzuki Ertiga LXI',
                    features: 'It has 2 Airbags, ABS, EBD,Break Assist (BA), Rear parking sensors, Central locking, Speed sensitive auto lock door.',
                    vehicleNo: 'MY-3PD-1930',
                    fuel: 'Petrol',
                    maxSeating: 'upto 7 people'
                }
            },
            {
                id: 1005,
                name: 'Maruti Suzuki Alto',
                color: 'Blue',
                capacity: '5 seater',
                price: '₹ 500',
                icon: 'alto.jpg',
                details: {
                    model: 'Maruti Suzuki Alto',
                    features: 'It has Airbags, ABS, EBD,Immobiliser, Reverse parking sensors.',
                    vehicleNo: 'MT-3PD-1893',
                    fuel: 'Petrol',
                    maxSeating: 'upto 5 people'
                }
            },
            {
                id: 1006,
                name: 'Maruti Suzuki Vitara Brezza',
                color: 'White',
                capacity: '5 seater',
                price: '₹ 1500',
                icon: 'vitara.jpg',
                details: {
                    model: 'Maruti Suzuki Vitara Brezza LXI',
                    features: 'It has 2 Airbags,ABS, EBD, Anti-Theft Security System, Rear parking sensors with infographic display, Central locking, Security Alarm.',
                    vehicleNo: 'MR-3PD-3430',
                    fuel: 'Petrol',
                    maxSeating: 'upto 5 people'
                }
            },
            {
                id: 1007,
                name: 'Hyundai Grandi10',
                color: 'Red',
                capacity: '5 seater',
                price: '₹ 900',
                icon: 'grand.jpg',
                details: {
                    model: 'Hyundai Grandi10 Magna 1.2 Kappa',
                    features: 'It has 2 Airbags, ABS, EBD, Seat belt warning, Child safety lock, Central locking.',
                    vehicleNo: 'RY-3PD-9930',
                    fuel: 'Petrol',
                    maxSeating: 'upto 5 people'
                }
            },
            {
                id: 1008,
                name: 'Hyundai Verna',
                color: 'Black',
                capacity: '5 seater',
                price: '₹ 1800',
                icon: 'verna.jpg',
                details: {
                    model: 'Hyundai Verna S Plus',
                    features: 'It has 2 Airbags, ABS, EBD, Engine Immobiliser, Central locking, ISOFIX Child Seat Mounts, Speed sensitive auto lock door.',
                    vehicleNo: 'MY-3PD-1730',
                    fuel: 'Petrol',
                    maxSeating: 'upto 5 people'
                }
            }
        ]

        return ( <
            div className = "container" >
            <
            CarsList cars = { cars }
            />       <
            /div>
        )
    }
}

export default App;