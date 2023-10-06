import React, { useCallback, useEffect, useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Accordion } from 'primereact/accordion';
import { AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

const SeatDemo = () => {
    const [displayBasic, setDisplayBasic] = useState(false);

    return (
        <><div className="card">
           
            <p>
                Location: Ntinda-Kisaasi
            </p>
            <p>Marital Status: Married</p>
            <p>Children: 3</p>
            <div className="grid p-fluid" style={{ justifyContent: 'flex-end' }}>
                <div className="col-12 lg:col-6 xl:col-2" style={{ marginLeft: '90%' }}>
                    <Button label="Add Benefits" icon="pi pi-plus" style={{ marginTop: '5%' }} className="mr-2 mb-2" onClick={() => setDisplayBasic(true)} ></Button>
                </div>

            </div>
            <Accordion activeIndex={0}>
                <AccordionTab header="Salary & Other Benefits">
                    <p className="m-0">
                        <h4>Shs.300,000</h4>
                        <p style={{ fontWeight: 'bold' }}>Other Benefits</p>
                        <p>Lunch and Transport: shs.10,000 per day</p>
                    </p>
                </AccordionTab>
            </Accordion>
            <div className="col-12 lg:col-6 xl:col-2" >

<Dialog header="New Staff" visible={displayBasic} style={{ width: '60vw' }} onHide={() => setDisplayBasic(false)}>
    <div className="col-12">
        <div className="card">

            <div className="p-fluid formgrid grid">
               
                <div className="field col-6">
                    <label htmlFor="firstname2">Benefits</label>
                    <InputText id="firstname2" type="text" />
                </div>
                <div className="field col-6">
                    <label htmlFor="firstname2">Amount in Figures</label>
                    <InputText id="firstname2" type="text" />
                </div>
                <div className="field col-6">
                    <label htmlFor="firstname2">Duration/Period</label>
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
        </div>
        </>
    );
};

export default SeatDemo;