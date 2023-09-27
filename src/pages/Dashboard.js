import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';
import { Menu } from 'primereact/menu';
import { Checkbox } from 'primereact/checkbox';

const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Sales',
            data: [12, 19, 3, 5, 2, 3, 9],
            borderColor: ['#7E57C2'],
            borderWidth: 3,
            borderDash: [5, 5],
            fill: false,
            pointRadius: 3,
            tension: 0.4
        },
        {
            label: 'Income',
            data: [1, 2, 5, 3, 12, 7, 15],
            backgroundColor: ['rgba(187,222,251,0.2)'],
            borderColor: ['#42A5F5'],
            borderWidth: 3,
            fill: true,
            tension: 0.4
        },
        {
            label: 'Expenses',
            data: [7, 12, 15, 5, 3, 13, 21],
            borderColor: ['#FFB300'],
            borderWidth: 3,
            fill: false,
            pointRadius: [4, 6, 4, 12, 8, 0, 4],
            tension: 0.4
        },
        {
            label: 'New Users',
            data: [3, 7, 2, 17, 15, 13, 19],
            borderColor: ['#66BB6A'],
            borderWidth: 3,
            fill: false,
            tension: 0.4
        }
    ]
};
const doughnutData = {
    labels: ['Alive', 'Dead',],
    datasets: [
        {
            data: [300, 50,],
            backgroundColor: ['#112FF5', '#F51120'],
            hoverBackgroundColor: ['#edb575', '#6fc0dd']
        }
    ]
};

const chartOptions = {
    responsive: true,
    hover: {
        mode: 'index'
    },
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: 'Month'
            }
        },
        y: {
            display: true,
            title: {
                display: true,
                text: 'Value'
            }
        }
    }
};

const Dashboard = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);

    const items = [
        { label: 'Save', icon: 'pi pi-fw pi-check' },
        { label: 'Update', icon: 'pi pi-fw pi-refresh' },
        { label: 'Delete', icon: 'pi pi-fw pi-trash' }
    ];

    const menuRef = useRef(null);

    const menuToggle = (event) => {
        menuRef.current.toggle(event);
    };


    return (
        <div className="layout-dashboard">
            <div className="grid">
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="overview-box sales">
                        <i className="overview-icon pi pi-dollar"></i>
                        <span className="overview-title">Sales</span>
                        <i className="overview-arrow pi pi-chevron-circle-up"></i>
                        <div className="overview-numbers">$ 92,440</div>
                        <div className="overview-subinfo">21% more than last month</div>
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="overview-box views">
                        <i className="overview-icon pi pi-search"></i>
                        <span className="overview-title">Veterinary visits</span>
                        <i className="overview-arrow pi pi-chevron-circle-up"></i>
                        <div className="overview-numbers">7029</div>
                        <div className="overview-subinfo">2% more than month</div>
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="overview-box users">
                        <i className="overview-icon pi pi-users"></i>
                        <span className="overview-title">Alive Animals</span>
                        <i className="overview-arrow pi pi-chevron-circle-up"></i>
                        <div className="overview-numbers">9522</div>
                        <div className="overview-subinfo">7% more than last month</div>
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="overview-box checkin">
                        <i className="overview-icon pi pi-map-marker"></i>
                        <span className="overview-title">Dead Animals</span>
                        <i className="overview-arrow pi pi-chevron-circle-up"></i>
                        <div className="overview-numbers">8</div>
                        <div className="overview-subinfo">10% more than last month</div>
                    </div>
                </div>

                <div className="col-12 lg:col-8">
                    <div className="card card-w-title statistics">
                        <h5>Statistics</h5>
                        <Chart type="line" data={chartData} options={chartOptions} />
                    </div>
                </div>

                
                <div className="col-12 md:col-12 lg:col-4">
                    <div className="card card-w-title tasks">
                        <h5>Tasks</h5>
                        <ul>
                            <li>
                                <Checkbox checked={checked1} onChange={(e) => setChecked1(e.checked)} />
                                <span>Sales Reports</span>
                                <span className="task-badge red"></span>
                            </li>
                            <li>
                                <Checkbox checked={checked2} onChange={(e) => setChecked2(e.checked)} />
                                <span>Pay Invoices</span>
                                <span className="task-badge orange"></span>
                            </li>
                            <li>
                                <Checkbox checked={checked3} onChange={(e) => setChecked3(e.checked)} />
                                <span>Next Vaccination</span>
                                <span className="task-badge orange"></span>
                            </li>
                            <li>
                                <Checkbox checked={checked4} onChange={(e) => setChecked4(e.checked)} />
                                <span>Next Ranch Visit </span>
                                <span className="task-badge green"></span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-12 md:col-12 lg:col-4">
                    <div className="card card-w-title resolution-center p-fluid">
                        <h5>Animals Statistics</h5>

                        <div className="card" style={{ marginTop: "5%"}}>
                <div className="flex justify-content-center">
                    <Chart style={{ position: 'relative', width: '700%' }} type="doughnut" data={doughnutData} />
                </div>
            </div>
                    </div>
                </div>

                <div className="col-12 lg:col-4">
                    <div className="user-card card">
                        <div className="user-card-header">
                            <img src="assets/layout/images/dashboard/bg-header.png" alt="babylon-layout" className="profile-image" />
                        </div>
                        <div className="user-card-content">
                            <Menu ref={menuRef} popup model={items} appendTo={document.body} />
                            <Button id="user-button" type="button" icon="pi pi-bars" className="secondary-btn" onClick={menuToggle} />

                            <div className="user-detail">
                                <ul>
                                    <li className="clearfix">
                                        <i className="pi pi-list"></i>
                                        <span className="project-title">Tasks</span>
                                        <span className="project-detail">3 open</span>
                                        <div className="project-progressbar">
                                            <div className="project-progressbar-value" style={{ width: '50%' }}></div>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <i className="pi pi-dollar"></i>
                                        <span className="project-title">Revenue</span>
                                        <span className="project-detail">+20%</span>
                                        <div className="project-progressbar">
                                            <div className="project-progressbar-value" style={{ width: '20%' }}></div>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <i className="pi pi-money-bill"></i>
                                        <span className="project-title">Payments</span>
                                        <span className="project-detail">24 new</span>
                                        <div className="project-progressbar">
                                            <div className="project-progressbar-value" style={{ width: '65%' }}></div>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <i className="pi pi-users"></i>
                                        <span className="project-title">Animals</span>
                                        <span className="project-detail">+80%</span>
                                        <div className="project-progressbar">
                                            <div className="project-progressbar-value" style={{ width: '80%' }}></div>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <i className="pi pi-money-bill"></i>
                                        <span className="project-title">Sales</span>
                                        <span className="project-detail">+45</span>
                                        <div className="project-progressbar">
                                            <div className="project-progressbar-value" style={{ width: '45%' }}></div>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <i className="pi pi-chart-bar"></i>
                                        <span className="project-title">Lactating Animals</span>
                                        <span className="project-detail">+75</span>
                                        <div className="project-progressbar">
                                            <div className="project-progressbar-value" style={{ width: '75%' }}></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                

            </div>
        </div>
    );
};

export default Dashboard;
