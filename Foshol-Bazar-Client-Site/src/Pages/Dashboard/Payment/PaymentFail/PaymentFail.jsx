import React from 'react';
import './PaymentFail.css'

const PaymentFail = () => {
    return (
        <div className='min-h-screen demo1 w-full sm:w-1/2 mx-auto'>
            <div className=" shadow-md shadow-orange-300 p-8 sm:p-8 lg:p-20">
                <div className="ui-error">
                    <svg viewBox="0 0 87 87" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Group-2" transform="translate(2.000000, 2.000000)">
                                <circle id="Oval-2" stroke="rgba(252, 191, 191, .5)" strokeWidth="4" cx="41.5" cy="41.5" r="41.5"></circle>
                                <circle className="ui-error-circle" stroke="#F74444" strokeWidth="4" cx="41.5" cy="41.5" r="41.5"></circle>
                                <path className="ui-error-line1" d="M22.244224,22 L60.4279902,60.1837662" id="Line" stroke="#F74444" strokeWidth="3" strokeLinecap="square"></path>
                                <path className="ui-error-line2" d="M60.755776,21 L23.244224,59.8443492" id="Line" stroke="#F74444" strokeWidth="3" strokeLinecap="square"></path>
                            </g>
                        </g>
                    </svg>
                </div>

                <h1 className='text-orange-500 text-center mt-6 italic text-2xl  sm:text-5xl'>OOPS! Payment Failed Try Again</h1>
            </div>


        </div>
    );
};

export default PaymentFail;