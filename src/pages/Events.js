import React, { useState, useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import data from '../assets/flags/events.json';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';


const Events = () => {
    const [calendarValue, setCalendarValue] = useState(null);
    const [calendar, setCalendar] = useState(null);
    const [displayBasic, setDisplayBasic] = useState(false);

    return (
        <div className="layout-dashboard">
             <div class="flex justify-content-around flex-wrap card-container indigo-container" style={{ backgroundColor: 'white' }}>
                    <div className="col-12 lg:col-6 xl:col-6"  >
                        <div style={{ width: '250%' }}>
                            <InputText id="firstname1" type="text" placeholder="Enter any information about an event" style={{ width: '40%' }} />
                        </div>
                    </div>
                    <div className="col-12 lg:col-6 xl:col-2" >
                        <Button label="Search" icon="pi pi-search" className="mr-2 mb-2" style={{ backgroundColor: 'deep purple' }} ></Button>
                    </div>
                    <div className="col-12 lg:col-6 xl:col-2" >
                        <Button label="New Event" icon="pi pi-plus" className="mr-2 mb-2" style={{ backgroundColor: 'deep purple' }} onClick={() => setDisplayBasic(true)} ></Button>
                    </div>
                </div>
            <div className="grid">
               
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Dialog header="New Event" visible={displayBasic} style={{ width: '60vw' }} onHide={() => setDisplayBasic(false)}  >
                        <div className="col-12">
                            <div className="card">

                                <div className="p-fluid formgrid grid">
                                    <div className="field col-12 md:col-6 ">
                                        <label htmlFor="firstname2">Event Name</label>
                                        <InputText id="firstname2" type="text" />
                                    </div>

                                    <div className="field col-12 md:col-6 ">
                                        <label htmlFor="firstname2">Start Date</label>
                                        <Calendar showIcon showButtonBar value={calendarValue} onChange={(e) => setCalendarValue(e.value)}></Calendar>
                                    </div>
                                    <div className="field col-12 md:col-6 ">
                                        <label htmlFor="firstname2">End Date</label>
                                        <Calendar showIcon showButtonBar value={calendar} onChange={(e) => setCalendar(e.value)}></Calendar>
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
                <div className="col-12 md:col-12 lg:col-12">
                    <div className="card card-w-title">
                        <h5>Schedule</h5>
                        <FullCalendar events={data.data} plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} initialDate="2023-09-22" headerToolbar={{ left: 'prev,next', center: 'title', right: '' }} editable />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;