import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import PersonalDemo from '../components/menu/PersonalDemo';
import ConfirmationDemo from '../components/menu/ConfirmationDemo';
import PaymentDemo from '../components/menu/PaymentDemo';
import SeatDemo from '../components/menu/SeatDemo';
import Cases from './Cases';
import CaseDemo from '../components/menu/CaseDemo';

const MenuDemo = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const navigate = useNavigate();
    const location = useLocation();

    const checkActiveIndex = useCallback(() => {
        const paths = location.pathname.split('/');
        const currentPath = paths[paths.length - 1];

        switch (currentPath) {
            case 'seat':
                setActiveIndex(1);
                break;
            case 'payment':
                setActiveIndex(2);
                break;
            case 'confirmation':
                setActiveIndex(3);
                break;
            case 'case':
                setActiveIndex(4);
                break;
            default:
                break;
        }
    }, [location]);

    useEffect(() => {
        checkActiveIndex();
    }, [checkActiveIndex]);

    const wizardItems = [
        { label: 'Company Information', command: () => navigate('/menu') },
        { label: 'Contact Person Information', command: () => navigate('/menu/seat') },
        { label: 'Product Lines', command: () => navigate('/menu/payment') },
        { label: 'Communications', command: () => navigate('/menu/confirmation') },
        { label: 'Cases', command: () => navigate('/menu/case') }
    ];


    return (
        <div className="grid p-fluid">

            <div className="col-12 md:col-12">
                <div className="card card-w-title">
                    
                    <TabMenu model={wizardItems} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
                    <Routes>
                        <Route exact path={'/'} element={<PersonalDemo />} />
                        <Route path={'/confirmation'} element={<ConfirmationDemo />} />
                        <Route path={'/payment'} element={<PaymentDemo />} />
                        <Route path={'/seat'} element={<SeatDemo />} />
                        <Route path={'/case'} element={<CaseDemo />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default MenuDemo;
 