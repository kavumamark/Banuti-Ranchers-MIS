import React, {useState } from 'react';
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import { Link } from 'react-router-dom';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import data from '../assets/flags/users.json';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';

const ViewStage = () => {

    const [displayBasic, setDisplayBasic] = useState(false);
    //const [setItem] = useState(null);
    
    const [Item, setItem] = useState(null);

    const Items = [
        { name: 'Male', code: 'Option 1' },
        { name: 'Female', code: 'Option 2' },
    ];
    return (
        <><div class="flex justify-content-end flex-wrap card-container green-container">
            <Button type="button" label="Back" className="mr-2 mb-2" style={{ backgroundColor: 'amber', marginLeft: '90%', marginBottom: '18%' }}></Button>
        </div>
            <div className="grid" style={{ backgroundColor: 'white', marginBottom: '2%' }}>

                <div className="card">
                    <Fieldset legend="Workflows" >

                        <div className="p-fluid formgrid grid">
                        <div className="field col-12 md:col-4">
                                <label for="clientname">Animal Category</label>
                                <Dropdown id="state" value={Items} onChange={(e) => setItem(e.value)} options={Items} optionLabel="name" placeholder="Select One"></Dropdown>
                            </div>
                            <div className="field col-12 md:col-4">
                                <label for="clientname">Stages</label>
                                <input id="clientname" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                            </div>
                            <div className="field col-12 md:col-4">
                                <label for="clientname">Breed</label>
                                <Dropdown id="state" value={Items} onChange={(e) => setItem(e.value)} options={Items} optionLabel="name" placeholder="Select One"></Dropdown>
                            </div>
                        </div>
                        <div className='grid' style={{ justifyContent: 'flex-end' }}>
                            <div class="flex justify-content-end ">
                                <div className="field col-12 md:col-4" style={{ marginRight: '10%' }}>
                                    <Button label="Save" icon="pi pi-save"  ></Button>

                                </div>
                                <div className="field col-12 md:col-8" >
                                    <Button label="Add Stage" icon="pi pi-plus" onClick={() => setDisplayBasic(true)} ></Button>
                                </div>
                            </div>
                        </div>


                    </Fieldset>

                </div>
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Dialog header="New User" visible={displayBasic} style={{ width: '70vw' }} onHide={() => setDisplayBasic(false)}  >
                        <div className="col-12">
                            <div className="card">
                                <div className="p-fluid formgrid grid">
                                    <div className="field col-4">
                                        <label for="clientid">Stage Name</label>
                                        <input id="clientid" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                                    </div>
                                    <div className="field col-12 md:col-4">
                                        <label for="clientname">Life span</label>
                                        <input id="clientname" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                                    </div>
                                    <div className="field col-6">
                                        <label for="location">Gender</label>
                                        <input id="location" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
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

            </div>
            <div className="card">
                <Fieldset legend="Stage Details" >
                    <DataTable value={data.data} paginator rows={5} className="p-datatable-products">
                        <Column field="id" header="No." style={{ flexGrow: 1, flexBasis: '160px' }} frozen></Column>
                        <Column field="stage_name" header="Stage Name" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
                        <Column field="life_span" header="Lifespan" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="entry_condition" header="Entry Condition" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="exit_condition" header="Exit Condition" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>

                        <Column field="action" className='flex gap-2' header="Action" style={{ flexGrow: 1, flexBasis: '200px' }} body={() => <><Link to={"/ViewStage"} style={{ color: 'green' }}>Edit</Link><Link to={"/ViewStage"} style={{ color: 'green' }}>Delete</Link></>}></Column>
                    </DataTable>
                </Fieldset>
            </div></>
    );
};
export default ViewStage;