import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import data from '../assets/cases.json';
import { Dropdown } from 'primereact/dropdown';

const Breeds = () => {

    const [displayBasic, setDisplayBasic] = useState(false);
    const [display, setDisplay] = useState(false);
    const [basic, setBasic] = useState(false);
    const [Item, setItem] = useState(null);
    const Items = [
        { name: 'Cattle', code: 'Option 1' },
        { name: 'Goats', code: 'Option 2' },
    ];

    return (

        <div className="layout-dashboard" >



            <div className="card">
              
                    <div className="col-12 lg:col-6 xl:col-2" style={{ justifyContent: 'flex-end' }} >
                        <Link to="/"> <Button label="Back" icon="pi pi-chevron-left" style={{ backgroundColor: 'deep purple' }} className="mr-2 mb-2" ></Button></Link>
                    </div>

              

            </div>
            <div class="flex justify-content-around flex-wrap card-container indigo-container" style={{ backgroundColor: 'white' }}>
                <div className="col-12 lg:col-6 xl:col-6"  >
                    <div style={{ width: '250%' }}>
                        <InputText id="firstname1" type="text" placeholder="Enter any information about a case" style={{ width: '40%' }} />
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Button label="Search" icon="pi pi-search" className="mr-2 mb-2" style={{ backgroundColor: 'deep purple' }} ></Button>
                </div>
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Button label="New Breed" icon="pi pi-plus" className="mr-2 mb-2" style={{ backgroundColor: 'deep purple' }} onClick={() => setDisplayBasic(true)} ></Button>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-2" >
                <Dialog header="New Breed" visible={displayBasic} style={{ width: '60vw' }} onHide={() => setDisplayBasic(false)}  >
                    <div className="col-12">
                        <div className="card">

                            <div className="p-fluid formgrid grid">
                                <div className="field col-12 md:col-6 ">
                                    <label htmlFor="firstname2">Breed Name</label>
                                    <InputText id="firstname2" type="text" />
                                </div>

                                <div className="field col-12 md:col-6 ">
                                    <label htmlFor="firstname2">Animal Category</label>
                                    <Dropdown id="state" value={Items} onChange={(e) => setItem(e.value)} options={Items} optionLabel="name" placeholder="Select One"></Dropdown>
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
            </div >
           
            <div className="grid" style={{ justifyContent: 'space-evenly' }}>
                <div className="col-12 xl:col-12">
                    <div className="card card-w-title global-sales" >
                        <DataTable value={data} paginator rows={5} className="p-datatable-products">
                            <Column field="no." header="No." ></Column>
                            <Column field="breed_name" header="Breed Name" ></Column>
                            <Column field="animal_type" header="Animal Category" ></Column>
                            {/* <Column field="type" header="Case Type" ></Column> */}
                            <Column field="options" header="Actions" body={<><Link to={"/ViewCase"} style={{ color: 'green' }}>View</Link><p></p></>} >

                            </Column>
                        </DataTable>
                    </div>
                </div>
            </div>
        </div >
    );
};
export default Breeds;