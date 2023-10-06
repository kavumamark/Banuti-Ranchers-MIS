import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import SeatDemo from '../components/menu/SeatDemo';
import CaseDemo from '../components/menu/CaseDemo';
import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';


const MenuDemo = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [displayBasic, setDisplayBasic] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const checkActiveIndex = useCallback(() => {
        const paths = location.pathname.split('/');
        const currentPath = paths[paths.length - 1];

        switch (currentPath) {
            case 'seat':
                setActiveIndex(1);
                break;
            case 'case':
                setActiveIndex(2);
                break;
            default:
                break;
        }
    }, [location]);

    useEffect(() => {
        checkActiveIndex();
    }, [checkActiveIndex]);

    const wizardItems = [
        { label: 'More Information', command: () => navigate('/menu') },


    ];


    return (
        <div className="grid p-fluid">
            <div className="col-12 lg:col-6 xl:col-8" style={{ textAlign: 'center' }}  >
                <Card title="Ms. Ania Cella">

                    <Avatar image="assets\layout\images\avatar-julia.png" size='large' shape="circle" />
                    <p>
                        ania@pahappa.com
                    </p>
                    <p>0707811116 or 077781116</p>
                    <p>Muteesa II Road, Ntinda</p>

                </Card>
            </div>

            <div className="col-12 md:col-12">
                <div className="card card-w-title">

                    <TabMenu model={wizardItems} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
                    <Routes>
                        <Route path={'/'} element={<SeatDemo />} />
                    </Routes>

                </div>

            </div>
        </div>
    );
};

export default MenuDemo;
