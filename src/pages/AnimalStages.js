import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom';
import data from '../assets/flags/systemusers.json';
import { Link } from 'react-router-dom';
import { confirmPopup } from 'primereact/confirmpopup';
import ViewStage from './ViewStage';
import { Dropdown } from 'primereact/dropdown';


function AnimalStages() {

    const [displayBasic, setDisplayBasic] = useState(false);
    const [checkboxValue, setCheckboxValue] = useState([]);
    const [displayConfirmation, setDisplayConfirmation] = useState(false);
    const navigate = useNavigate();
    const [Item, setItem] = useState(null);

    const Items = [
        { name: 'Male', code: 'Option 1' },
        { name: 'Female', code: 'Option 2' },
    ];

    const onCheckboxChange = (e) => {
        let selectedValue = [...checkboxValue];
        if (e.checked) selectedValue.push(e.value);
        else selectedValue.splice(selectedValue.indexOf(e.value), 1);

        setCheckboxValue(selectedValue);
    };
    const confirmationDialogFooter = (
        <>
            <Button type="button" label="No" icon="pi pi-times" onClick={() => setDisplayConfirmation(false)} className="p-button-text" />
            <Button type="button" label="Yes" icon="pi pi-check" onClick={() => setDisplayConfirmation(false)} className="p-button-text" autoFocus />
        </>
    );

    const [visibleRight, setVisibleRight] = useState(false);
    const [dropdownItem, setDropdownItem] = useState(null);
    const dropdownItems = [
        { name: 'Male', code: 'option 1' },
        { name: 'Female', code: 'option 2' }
    ];
    const toast = useRef(null);
    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const confirm1 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    }
    return (
        <div className='flex flex-column gap-2'>
            <div class="flex justify-content-end flex-wrap card-container green-container">
                <Button type="button" label="Back" className="mr-2 mb-2" style={{ backgroundColor: 'amber', marginLeft: '90%', marginBottom: '18%' }}></Button>
            </div>

            <div className='grid ' style={{ backgroundColor: "white" }}>
                <div className="col-12 lg:col-6 xl:col-6"  >
                    <div style={{ width: '250%' }}>
                        <InputText id="firstname1" type="text" placeholder="Enter any information about a user" style={{ width: '40%' }} />
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Button label="Search" icon="pi pi-search" className="mr-2 mb-2" style={{ backgroundColor: 'amber' }}></Button>
                </div>

            </div>
            <div className="col-12 lg:col-6 xl:col-2" >
                <Dialog header="New Animal Category" visible={displayBasic} style={{ width: '50vw' }} onHide={() => setDisplayBasic(false)}  >
                    <div className="col-12">
                        <div className="card">
                            <div className="p-fluid formgrid grid">
                                <div className="field col-4">
                                    <label for="clientid">Animal Category</label>
                                    <input id="clientid" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                                </div>
                                <div className="field col-12 md:col-4">
                                    <label for="clientname">Gender</label>
                                    <Dropdown id="state" value={Items} onChange={(e) => setItem(e.value)} options={Items} optionLabel="name" placeholder="Select One"></Dropdown>
                                </div>
                                <div className="field col-12 md:col-4">
                                    <label for="clientname">Stages</label>
                                    <input id="clientname" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
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

            <div className="col-12">
                <div className="card">
                    <div class="flex justify-content-end flex-wrap card-container green-container">


                        <div className="col-12 lg:col-6 xl:col-2" >
                            <Button type="button" label="Export" icon="pi pi-arrow-circle-up" onClick={() => { navigate("/AddUser") }} style={{ backgroundColor: "amber" }} />
                        </div>
                        <div className="col-12 lg:col-6 xl:col-2" >
                            <Button type="button" label="Add New" icon="pi pi-plus" onClick={() => setDisplayBasic(true)} style={{ backgroundColor: "deep purple" }} />
                        </div>
                    </div>
        
                    <DataTable value={data} rowGroupMode="rowspan" groupRowsBy="animal_name"
                        sortMode="single" sortField="animal_name" sortOrder={1} >
                        <Column header="No." headerStyle={{ width: '3rem' }} body={(data, options) => options.rowIndex + 1}></Column>
                        <Column field="animal_name" header="Animal Category" style={{ minWidth: '200px' }}></Column>
                        <Column field="gender" header="Gender" style={{ minWidth: '150px' }}></Column>
                        <Column field="stages" header="Stages" style={{ minWidth: '150px' }}></Column>
                        <Column field="options" header="Actions" body={<><Link to={"/ViewStage"} style={{ color: 'green' }}>View</Link> </>} ></Column>
                        
                    </DataTable>
                </div>
            </div>
        </div>

    );
};
export default AnimalStages;
