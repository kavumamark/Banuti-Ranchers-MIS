import React, { useState, useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import data from '../assets/flags/events.json';


const Events = () => {
    return (
        <div className="layout-dashboard">
            <div className="grid">           
               
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