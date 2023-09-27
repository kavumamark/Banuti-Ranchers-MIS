import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const ConfirmationDemo = () => {
    return (
        <div className="grid p-fluid">
            <div className="col-12 md:col-12">            
                <div className="card card-w-title">
                <div className="col-12 lg:col-6 xl:col-3" style={{justifyContent:'end'}}>
                    <Button label="Add communication" icon="pi pi-plus" className=" p-button-text mr-2 mb-2" style={{backgroundColor:'deep purple', alignContent:'end'}} />
                </div>
                    <div className="card">
                        <Card >

                            <div className="col-12 lg:col-6 xl:col-12">
                                <p style={{ fontWeight: 'bold', textAlign: 'end' }}>13-Sept-2023 at 10:00am</p>
                            </div>
                            <div class="flex justify-content-around flex-wrap card-container indigo-container" style={{ backgroundColor: 'white', justifyContent:'space-evenly' }}>
                                <div className="col-12 lg:col-6 xl:col-2" style={{textAlign:'left'}}>
                                    <Button label="OUTGOING" className="p-button-raised p-button-success mr-2 mb-2" />

                                </div>

                                <div className="col-12 lg:col-6 xl:col-10">
                                    <p style={{ fontWeight: 'bold'}}>Follow up on EgoSMS via Phone Call</p>
                                </div>
                            </div>

                            <div className="col-12 lg:col-6 xl:col-12">
                                <p >Client wanted to make sure his issue was being handled</p>
                                <p >By: Sssentongo Gregory</p>
                            </div>
                            <div className="col-12 lg:col-6 xl:col-6" style={{ justifyContent: 'flex-end', marginLeft: '80%' }}>

                                <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary mr-2 mb-2" />
                                <Button icon="pi pi-comment" className="p-button-rounded p-button-info mr-2 mb-2" />
                                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning mr-2 mb-2" />
                            </div>
                        </Card>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default ConfirmationDemo;
