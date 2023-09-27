import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom';
import data from '../assets/flags/Roles.json';
import { Checkbox } from 'primereact/checkbox';

const Roles = () => {


    const [displayBasic, setDisplayBasic] = useState(false);
    const [checkboxValue, setCheckboxValue] = useState([]);
    const [displayConfirmation, setDisplayConfirmation] = useState(false);
    const navigate = useNavigate();

    const confirmationDialogFooter = (
        <>
            <Button type="button" label="No" icon="pi pi-times" onClick={() => setDisplayConfirmation(false)} className="p-button-text" />
            <Button type="button" label="Yes" icon="pi pi-check" onClick={() => setDisplayConfirmation(false)} className="p-button-text" autoFocus />
        </>
    );
    const onCheckboxChange = (e) => {
        let selectedValue = [...checkboxValue];
        if (e.checked) selectedValue.push(e.value);
        else selectedValue.splice(selectedValue.indexOf(e.value), 1);

        setCheckboxValue(selectedValue);
    };
    return (
        <><div class="flex justify-content-end flex-wrap card-container green-container">
            <Button type="button" label="Back" className="mr-2 mb-2" style={{ backgroundColor: 'deep purple', marginLeft: '90%', marginBottom: '18%' }}></Button>
        </div>
            <div className='grid ' style={{ backgroundColor: "white" }}>
                <div className="col-12 lg:col-6 xl:col-6"  >
                    <div style={{ width: '250%' }}>
                        <InputText id="firstname1" type="text" placeholder="Enter any information about a user" style={{ width: '40%' }} />
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Button label="Search" icon="pi pi-search" className="mr-2 mb-2" style={{ backgroundColor: 'deep purple' }}></Button>
                </div>
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Button type="button" label="Export" icon="pi pi-arrow-circle-up" onClick={() => { navigate("/AddUser") }} style={{ backgroundColor: "deep purple" }} />
                </div>
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Button type="button" label="Add New" icon="pi pi-plus" onClick={() => setDisplayBasic(true)} style={{ backgroundColor: "deep purple" }} />
                </div>

            </div>
            <div className="col-12 lg:col-6 xl:col-2" >
                <Dialog header="New Role" visible={displayBasic} style={{ width: '50vw' }} onHide={() => setDisplayBasic(false)}  >
                    <div className="col-12">
                        <div className="card">

                            <div className="p-fluid formgrid grid">
                                <div className="field col-12 md:col-12 ">
                                    <label htmlFor="firstname2">Name</label>
                                    <InputText id="firstname2" type="text" />
                                </div>

                                <div className="field col-12">
                                    <label htmlFor="firstname2">Description</label>
                                    <textarea id="address" type="text" rows="4" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></textarea>
                                </div>
                                <div className="field col-12 md:col-12 ">
                                    <label htmlFor="firstname2">Permissions</label>

                                </div>
                                <div className="grid">
                                    <div className="col-12 md:col-6">
                                        <div className="field-checkbox">
                                            <Checkbox inputId="checkOption1" name="option" value="Chicago" checked={checkboxValue.indexOf('Chicago') !== -1} onChange={onCheckboxChange} />
                                            <label htmlFor="checkOption1">Export Clients</label>
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <div className="field-checkbox">
                                            <Checkbox inputId="checkOption2" name="option" value="Los Angeles" checked={checkboxValue.indexOf('Los Angeles') !== -1} onChange={onCheckboxChange} />
                                            <label htmlFor="checkOption2">Edit Clients</label>
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <div className="field-checkbox">
                                            <Checkbox inputId="checkOption3" name="option" value="New York" checked={checkboxValue.indexOf('New York') !== -1} onChange={onCheckboxChange} />
                                            <label htmlFor="checkOption3">Delete Clients</label>
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <div className="field-checkbox">
                                            <Checkbox inputId="checkOption3" name="option" value="New York" checked={checkboxValue.indexOf('New York') !== -1} onChange={onCheckboxChange} />
                                            <label htmlFor="checkOption3">View Clients</label>
                                        </div>
                                    </div>
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
            <><h5>Roles</h5>
                <DataTable value={data}>
                    <Column field="No" header="No." style={{ flexGrow: 1, flexBasis: '160px' }} frozen></Column>
                    <Column field="Role" header="Role" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
                    <Column field="description" header="Description" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="permissions" header="Permissions" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="action" className='flex gap-2' header="Action" style={{ flexGrow: 1, flexBasis: '200px' }} body={() => <><><Button type="button" icon="pi pi-pencil" onClick={() => setDisplayBasic(true)} style={{ backgroundColor: "#239B47" }}></Button></><Button type="button" icon="pi pi-trash" className="p-button-danger" onClick={() => setDisplayConfirmation(true)}></Button></>}></Column>
                </DataTable>
                <Dialog header="Confirmation" visible={displayConfirmation} onHide={() => setDisplayConfirmation(false)} style={{ width: '350px' }} modal footer={confirmationDialogFooter}>
                    <div className="flex align-items-center justify-content-center">
                        <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                        {(
                            <span>Are you sure you want to delete <b>{data.name}</b>?</span>
                        )}
                    </div>
                </Dialog>
            </></>

    );
};
export default Roles;
