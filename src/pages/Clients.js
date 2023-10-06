import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import data from '../assets/flags/clients.json';
import { Link } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import MenuDemo from './MenuDemo';

const Clients = () => {
    const [displayBasic, setDisplayBasic] = useState(false);
    const [dropdownItem, setDropdownItem] = useState(null);
    const dropdownItems = [
        { name: 'Male', code: 'option 1' },
        { name: 'Female', code: 'option 2' }
    ];
    return (

        <div className="layout-dashboard" >
            <div className="col-12 lg:col-6 xl:col-2" style={{ marginLeft: '90%' }}>
                <Link to="/"> <Button className='button-success' label="Back" icon="pi pi-chevron-left" style={{ backgroundColor: 'deep purple' }}  ></Button></Link>
            </div>
            <div className="grid" style={{ backgroundColor: 'white', marginBottom: '2%' }} >
                <div className="col-12 lg:col-6 xl:col-6"  >
                    <div style={{ width: '250%' }}>
                        <InputText id="firstname1" type="text" placeholder="Enter any information about a staff member" style={{ width: '40%' }} />
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Button label="Search" icon="pi pi-search" className="mr-2 mb-2" ></Button>
                </div>
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Button label="New Staff" icon="pi pi-plus" className="mr-2 mb-2" onClick={() => setDisplayBasic(true)}>

                    </Button>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-2" >

                <Dialog header="New Staff" visible={displayBasic} style={{ width: '60vw' }} onHide={() => setDisplayBasic(false)}>
                    <div className="col-12">
                        <div className="card">

                            <div className="p-fluid formgrid grid">
                                <div className="field col-12 md:col-6 ">
                                    <label htmlFor="firstname2">First Name</label>
                                    <InputText id="firstname2" type="text" />
                                </div>

                                <div className="field col-12 md:col-6 ">
                                    <label htmlFor="firstname2">Last Name</label>
                                    <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" ></Dropdown>
                                </div>
                                <div className="field col-6">
                                    <label htmlFor="firstname2">Username</label>
                                    <InputText id="firstname2" type="text" />
                                </div>
                                <div className="field col-6">
                                    <label htmlFor="firstname2">Email Address</label>
                                    <InputText id="firstname2" type="text" />
                                </div>
                                <div className="field col-6">
                                    <label htmlFor="firstname2">Phone Number</label>
                                    <InputText id="firstname2" type="text" />
                                </div>
                                <div className="field col-6">
                                    <label htmlFor="firstname2">Salary Amount</label>
                                    <InputText id="firstname2" type="text" />
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-content-center " >
                            <div className="field col-12 md:col-6" >
                                <Button label="Save" icon="pi pi-save" className="mr-2 mb-2" style={{ backgroundColor: 'green', borderBlockColor: 'green' }}></Button>
                            </div>
                            <div className="field col-12 md:col-6" >
                                <Button label="Cancel" icon="pi pi-times" className="mr-2 mb-2" style={{ backgroundColor: 'red', borderBlockColor: 'red' }}></Button>
                            </div>
                        </div>
                    </div>
                </Dialog>

            </div>

            <div className="grid" style={{ justifyContent: 'space-evenly' }}>
                <div className="col-12 xl:col-12">
                    <div className="card card-w-title global-sales" >
                        <DataTable value={data} paginator rows={5} className="p-datatable-products">
                            <Column field="id" header="Staff ID" ></Column>
                            <Column field="companyName" header="First Name" ></Column>
                            <Column field="contact_person" header="Last Name" ></Column>
                            <Column field="companyLocation" header="Username" ></Column>
                            <Column field="phone_number" header="Phone Number" ></Column>
                            <Column field="companyEmail" header="Email Address" ></Column>
                            <Column field="options" header="Options"
                                body={<>
                                    <Link to={"/MenuDemo"} style={{ color: 'green' }}><p>Manage Staff</p> </Link>
                                </>} >

                            </Column>
                        </DataTable>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Clients;