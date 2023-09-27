import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';

const CaseDemo = () => {

    const [displayBasic, setDisplayBasic] = useState(false);
    const [display, setDisplay] = useState(false);
    const [basic, setBasic] = useState(false);
    const [dropdownItem, setDropdownItem] = useState(null);
    const dropdownItems = [
        { name: 'Male', code: 'option 1' },
        { name: 'Female', code: 'option 2' }
    ];

    return (

        <div className="layout-dashboard" >
            <div class="flex justify-content-end flex-wrap card-container indigo-container" style={{ backgroundColor: 'white', marginTop:'2%' }}>
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Button label="New Case" icon="pi pi-plus" className=" p-button-text mr-2 mb-2" style={{ backgroundColor: 'deep purple', alignContent: 'end' }} />

                </div>
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Button label="New Case Note" icon="pi pi-plus" className=" p-button-text mr-2 mb-2" style={{ backgroundColor: 'deep purple', alignContent: 'end' }} />
                </div>
            </div>
            
            <div className="col-12 lg:col-6 xl:col-2" >
                <Dialog header="New Case Note" visible={basic} style={{ width: '60vw' }} onHide={() => setDisplayBasic(false)}  >
                    <div className="col-12">
                        <div className="card">

                            <div className="p-fluid formgrid grid">
                                <div className="field col-12 md:col-6 ">
                                    <label htmlFor="firstname2">Case Name</label>
                                    <InputText id="firstname2" type="text" />
                                </div>
                                <div className="field col-12 md:col-6 ">
                                    <label htmlFor="firstname2">Status</label>
                                    <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                                </div>
                                <div className="field col-12">
                                    <label htmlFor="firstname2">Description</label>
                                    <textarea id="address" type="text" rows="4" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></textarea>
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
            <div className="col-12 lg:col-6 xl:col-2" >
                <Dialog header="New Case " visible={display} style={{ width: '60vw' }} onHide={() => setDisplay(false)}  >
                    <div className="col-12">
                        <div className="card">

                            <div className="p-fluid formgrid grid">
                                <div className="field col-12 md:col-6 ">
                                    <label htmlFor="firstname2">Case Number</label>
                                    <InputText id="firstname2" type="text" />
                                </div>

                                <div className="field col-12 md:col-6 ">
                                    <label htmlFor="firstname2">Subject</label>
                                    <InputText id="firstname2" type="text" />
                                </div>
                                <div className="field col-12">
                                    <label htmlFor="firstname2">Description</label>
                                    <textarea id="address" type="text" rows="4" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></textarea>
                                </div>
                                <div className="field col-12 md:col-6 ">
                                    <label htmlFor="firstname2">Case Type</label>
                                    <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" ></Dropdown>
                                </div>
                                <div className="field col-12 md:col-6 ">
                                    <label htmlFor="firstname2">Assigned To</label>
                                    <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" ></Dropdown>
                                </div>
                                <div className="field col-12 md:col-6 ">
                                    <label htmlFor="firstname2">Escalated To</label>
                                    <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" ></Dropdown>
                                </div>
                                <div className="field col-12 md:col-6 ">
                                    <label htmlFor="firstname2">Status</label>
                                    <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name"></Dropdown>
                                </div>
                                <div className="field col-12 md:col-6 ">
                                    <label htmlFor="firstname2">Case Origin</label>
                                    <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" ></Dropdown>
                                </div>
                                <div className="field col-12 md:col-6 ">
                                    <label htmlFor="firstname2">Reported by</label>
                                    <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" ></Dropdown>
                                </div>
                                <div className="field col-12 md:col-6">
                                    <label htmlFor="state">Client Account</label>
                                    <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" ></Dropdown>
                                </div>
                                <div className="field col-6">
                                    <label htmlFor="firstname2">Contact Person</label>
                                    <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" ></Dropdown>
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
                        <DataTable paginator rows={5} className="p-datatable-products">
                            <Column field="case_number" header="Case No." ></Column>
                            <Column field="subject" header="Subject" ></Column>
                            <Column field="description" header="Description" ></Column>
                            <Column field="type" header="Case Type" ></Column>
                            <Column field="status" header="Status" ></Column>
                            <Column field="priority" header="Priority" ></Column>
                            <Column field="options" header="Actions" body={<><Link to={"/ViewCase"} style={{ color: 'green' }}>View</Link><p></p></>} >

                            </Column>
                        </DataTable>
                    </div>
                </div>
            </div>
        </div >
    );
};
export default CaseDemo;