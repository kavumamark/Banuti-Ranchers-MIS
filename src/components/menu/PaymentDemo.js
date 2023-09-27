import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Steps } from 'primereact/steps';
import { Card } from 'primereact/card';

const PaymentDemo = () => {
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
            default:
                break;
        }
    }, [location]);

    useEffect(() => {
        checkActiveIndex();
    }, [checkActiveIndex]);

    const wizardItems = [
        { label: 'Lead', command: () => navigate('/menu') },
        { label: 'Prospect', command: () => navigate('/menu') },
        { label: 'Full Client', command: () => navigate('/menu') }

    ];
    return (
        <div className="col-12 md:col-12">
            <div className="card card-w-title">

                <Steps model={wizardItems} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
                {/* <Routes>
                        <Route exact path={'/'} element={<PersonalDemo />} />
                    </Routes> */}
                <div className="grid" style={{ backgroundColor: 'white', marginBottom: '2%' }}>
                    <div className="col-12 lg:col-6 xl:col-4">
                        <div className="card">
                            <Card >
                                <p className="m-0">
                                Lead created on:
                                16/08/2023
                                </p>
                                <p>By: Shamira Naiga</p>
                                <h5 style={{ textAlign: 'center', fontWeight: 'bold' }}> Status: COMPLETED</h5>
                            </Card>
                        </div>
                    </div>
                    <div className="col-12 lg:col-6 xl:col-4">
                        <div className="card">
                            <Card>
                                <p className="m-0" style={{fontWeight:'unset'}}>
                                   Prospect created on: 
                                </p>
                                <p>By:</p>
                                <h5 style={{ textAlign: 'center', fontWeight: 'bold' }}>Status: CONDITION NOT MET</h5>
                            </Card>
                        </div>
                    </div>
                    <div className="col-12 lg:col-6 xl:col-4">
                        <div className="card">
                            <Card>
                            <p className="m-0" style={{fontWeight:'unset'}}>
                                   Full Client created on: 
                                </p>
                                <p>By:</p>
                                <h5 style={{ textAlign: 'center', fontWeight: 'bold' }}>Status: CONDITION NOT MET</h5>
                            </Card>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PaymentDemo;