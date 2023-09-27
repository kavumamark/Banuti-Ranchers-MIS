import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from 'primereact/checkbox';
import { useState } from 'react';


export const Login = () => {
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);

    return (
<div className="flex align-items-center justify-content-center" style={{ background: "url(/assets/layout/images/download.jpeg" }} >
    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-4 mt-7 mb-8">
        <div className="text-center mb-5 ">
            {/* <img src="assets/layout/images/download.jpeg" alt="hyper" height={50} className="mb-3" /> */}
            <div className="text-900 text-3xl font-medium mt-4 mb-3">WELCOME TO BANUTI RANCHERS MIS</div>
            <span className="text-600 font-medium line-height-3">Don't have an account?</span>
            <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
        </div>

        <div className='mb-3 mt-3'>
            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
            <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3" />

            <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
            <InputText id="password" type="password" placeholder="Password" className="w-full mb-3" />

            <div className="flex align-items-center justify-content-between mb-6">
                <div className="flex align-items-center">
                    <Checkbox id="rememberme" onChange={e => setChecked(e.checked)} checked={checked} className="mr-2" />
                    <label htmlFor="rememberme">Remember me</label>
                </div>
                <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
            </div>

            <Button label="Sign In" onClick={() => {navigate('/') }} icon="pi pi-user" className="w-full mb-6" />
            
        </div>
    </div>
</div>
    




        // <div className="login-body">
        //     <div className="login-panel"></div>

        //     <div className="login-content">
               
        //         <h1>
        //             <span>SIGN IN</span> TO BANUTI RANCHERS MIS
        //         </h1>
        //         <p>Welcome, please use the form to sign-in.</p>

        //         <div className="login-input-wrapper">
        //             <InputText placeholder="Username" />
        //             <i className="pi pi-user"></i>
        //         </div>

        //         <div className="login-input-wrapper">
        //             <InputText placeholder="Password" />
        //             <i className="pi pi-lock"></i>
        //         </div>

              
        //     </div>
        // </div>

    );
};
