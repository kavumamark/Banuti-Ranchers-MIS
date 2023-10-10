import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Dialog } from 'primereact/dialog';
import data from '../assets/flags/animal.json';
const Sales =() =>{

    const [displayBasic, setDisplayBasic] = useState(false);
    const [displayConfirmation, setDisplayConfirmation] = useState(false);
    const [dropdownItem, setDropdownItem] = useState(null);
    const [setItem] = useState(null);
    const dropdownItems = [
        { name: 'Milk', code: 'Option 1' },
        { name: 'Meat', code: 'Option 2' },
        { name: 'Manure', code: 'Option 3' },
        { name: 'Skins', code: 'Option 3' }
    ];

    const Items = [
        { name: 'Litres', code: 'Option 1' },
        { name: 'Kilograms', code: 'Option 2' },
        { name: 'N/A', code: 'Option 3' }
    ];
    const confirmationDialogFooter = (
        <>
            <Button type="button" label="No" icon="pi pi-times" onClick={() => setDisplayConfirmation(false)} className="p-button-text" />
            <Button type="button" label="Yes" icon="pi pi-check" onClick={() => setDisplayConfirmation(false)} className="p-button-text" autoFocus />
        </>
    );
    
    return(
        
        
        <div className="layout-dashboard" >

            <div className="col-12">
                <div className="card">
                    <div className="grid p-fluid" style={{ justifyContent: 'flex-end' }}>
                        <div className="col-12 lg:col-6 xl:col-1" style={{ marginLeft: '90%' }}>
                            <Link to="/"> <Button label="Back" icon="pi pi-chevron-left" style={{ backgroundColor: '#E91E63', borderBlockColor: 'red' }} className="mr-2 mb-2" ></Button></Link>
                        </div>

                    </div>
                </div>
            </div>
            <div class="flex justify-content-around flex-wrap card-container indigo-container" style={{ backgroundColor: 'white' }}>
                <div className="col-12 lg:col-6 xl:col-6"  >
                    <div style={{ width: '250%' }}>
                        <InputText id="firstname1" type="text" placeholder="Enter any information about sales" style={{ width: '40%' }} />
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Button label="Search" icon="pi pi-search" className="mr-2 mb-2" ></Button>
                </div>
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Button label="Add" icon="pi pi-plus" className="mr-2 mb-2"  onClick={() => setDisplayBasic(true)} ></Button>
                </div>
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Button type="button" label="Export" icon="pi pi-arrow-circle-up"  />
                </div>

            </div>
            <div className="col-12 lg:col-6 xl:col-2" >
                <Dialog header="Add" visible={displayBasic} style={{ width: '30vw' }} onHide={() => setDisplayBasic(false)}  >
                    <div className="col-12">
                        <div className="card">

                            <div className="p-fluid formgrid grid">
                                <div className="field col-12 md:col-12 ">
                                    <label htmlFor="firstname2">Transaction ID</label>
                                    <InputText id="firstname2" type="text" />
                                </div>
                                <div className="field col-12 md:col-12 ">
                                    <label htmlFor="firstname2">Product Type</label>
                                    <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                                </div>
                               
                                <div className="field col-12">
                                    <label htmlFor="firstname2">Amount Sold</label>
                                    <textarea id="address" type="text" rows="4" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></textarea>
                                </div>
                                
                                <div className="field col-12 md:col-12 ">
                                    <label htmlFor="firstname2">Dimensions</label>
                                    <Dropdown id="state" value={Items} onChange={(e) => setItem(e.value)} options={Items} optionLabel="name" placeholder="Select One"></Dropdown>
                                </div>

                                <div className="field col-12 md:col-6 ">
                                    <label htmlFor="firstname2">Date Sold</label>
                                    <InputText id="firstname2" type="text" />
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
                        </div>
                    </div>
                </Dialog>
            </div >
        
    <div className="grid" style={{ justifyContent: 'space-evenly' }}>
    <div className="col-12 xl:col-12">
        <div className="card card-w-title global-sales" >
        <h5>Sales Details</h5>
            <DataTable value={data} paginator rows={5} className="p-datatable-products">
                <Column field="tag_no" header="Transaction ID" ></Column>
                <Column field="full_name" header="Product Type" ></Column>
                <Column field="breed" header="Amount Sold" ></Column>
                <Column field="dam_no" header="Dimensions" ></Column>
                <Column field="dob" header="Date Sold" ></Column>
                <Column field="action" header="Action" style={{ flexGrow: 1, flexBasis: '200px' }} body={() => <><><Button type="button" icon="pi pi-pencil" onClick={() => setDisplayBasic(true)}style={{backgroundColor:"blue"}}></Button></><Button type="button" icon="pi pi-trash" className="p-button-danger" onClick={() => setDisplayConfirmation(true)}></Button></>}></Column>
            </DataTable>
            <Dialog header="Confirmation" visible={displayConfirmation} onHide={() => setDisplayConfirmation(false)} style={{ width: '350px' }} modal footer={confirmationDialogFooter}>
                            <div className="flex align-items-center justify-content-center">
                                <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                                { (
                                <span>Are you sure you want to delete <b>{data.name}</b>?</span>
                                )}
                            </div>
                            </Dialog>
        </div>
    </div>
</div>
</div>
);
};
export default Sales;