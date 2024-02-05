import React from 'react';
import './pageHeader.css'

const PageHeader = ({ sectionBackText, bgColor,route}) => {
    return (
        <section className={`bg-${bgColor}-500 relative bg-img pt-28`}>
            <div className="flex items-center justify-center max-w-screen-xl min-h-[40vh] mx-auto">
                <section className="z-10 space-y-4">
                    <h1 className="text-white font-bold text-4xl">Foshol Bazar</h1>
                    <p className="text-white font-bold text-xl text-center">Home{route} </p>
                </section>
            </div>
            <div className="white-curve-after hidden sm:block"></div>
            <div className="section-back-text">{sectionBackText}</div>
        </section>



    );
};

export default PageHeader;