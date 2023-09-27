import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import data from '../assets/flags/users.json';
import { Link } from 'react-router-dom';



const Users = () => {
   

    return (
        <div className="layout-dashboard" >
            <div className="col-12 lg:col-6 xl:col-2" style={{ marginLeft: '90%' }}>
            <Link to="/"> <Button label="Back" icon="pi pi-chevron-left" style={{backgroundColor:'red', borderBlockColor:'red'}} className="mr-2 mb-2" ></Button></Link>
            </div>
            <div className="grid" style={{ backgroundColor: 'white', marginBottom: '2%' }} >
                <div className="col-12 lg:col-6 xl:col-6"  >
                    <div style={{ width: '250%' }}>
                        <InputText id="firstname1" type="text" placeholder="Enter any information about a user" style={{ width: '40%' }} />
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Button label="Search" icon="pi pi-search" className="mr-2 mb-2" ></Button>
                </div>

                                  
            </div>


            <div className="grid" style={{ justifyContent: 'space-evenly' }}>
                <div className="col-12 xl:col-12">
                    <div className="card card-w-title global-sales" >
                        <DataTable value={data} paginator rows={5} className="p-datatable-products">
                            <Column field="id" header="ID" ></Column>
                            <Column field="first_name" header="First Name" ></Column>
                            <Column field="last_name" header="Last Name" ></Column>
                            <Column field="user_name" header="User Name" ></Column>
                            <Column field="gender" header="Gender" ></Column>
                            <Column field="email_address" header="Email Address" ></Column>
                            <Column field="phone_number" header="Phone Number" ></Column>

                            <Column field="options" header="Options" body={<><Link to={"/Users"} style={{ color: 'green' }}>Manage User</Link><p></p></>} >

                            </Column>
                        </DataTable>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;
