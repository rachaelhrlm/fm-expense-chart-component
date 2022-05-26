import React, { FunctionComponent } from 'react';

export const App: FunctionComponent = () => {
    return (
        <main className="w-full h-screen bg-neutral-cream p-3 flex flex-col gap-4 place-items-center place-content-center">
            <div className="w-full h-[97px] bg-primary-red rounded-xl p-5 text-white flex justify-between md:w-[540px] md:h-[125px] md:p-6">
                <section className="h-full grid">
                    <h1 className="text-sm md:text-base">My balance</h1>
                    <p className="text-2xl font-bold md:text-3xl">$921.48</p>
                </section>
                <img className="p-1 md:p-2" src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo" />
            </div>

            <div className="w-full bg-neutral-orange rounded-xl p-5 space-y-5 md:w-[540px] md:p-6 md:space-y-6">
                <h1 className="text-2xl font-bold md:text-3xl">Spending - Last 7 days</h1>
                <div className="space-y-2 pt-5">
                    <div className="grid grid-cols-7 gap-2 h-[150px] place-items-end md:gap-5">
                        <div className="w-full bg-primary-red rounded-sm md:rounded-md" style={{ height: '33%' }}></div>
                        <div className="w-full bg-primary-red rounded-sm md:rounded-md" style={{ height: '50%' }}></div>
                        <div className="w-full bg-primary-cyan rounded-sm md:rounded-md" style={{ height: '100%' }}></div>
                        <div className="w-full bg-primary-red rounded-sm md:rounded-md" style={{ height: '65%' }}></div>
                        <div className="w-full bg-primary-red rounded-sm md:rounded-md" style={{ height: '74%' }}></div>
                        <div className="w-full bg-primary-red rounded-sm md:rounded-md" style={{ height: '33%' }}></div>
                        <div className="w-full bg-primary-red rounded-sm md:rounded-md" style={{ height: '65%' }}></div>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center text-neutral-brown text-xs md:gap-5 md:text-sm">
                        <p>mon</p>
                        <p>tue</p>
                        <p>wed</p>
                        <p>thu</p>
                        <p>fri</p>
                        <p>sat</p>
                        <p>sun</p>
                    </div>
                </div>
                <hr className="border-neutral-cream border" />
                <div className="flex justify-between">
                    <section className="space-y-1">
                        <h1 className="text-neutral-brown text-sm md:text-base">Total this month</h1>
                        <p className="text-2xl font-bold md:text-5xl">$478.33</p>
                    </section>
                    <section className="text-sm text-right flex flex-col justify-end md:text-base">
                        <p className="font-bold">+2.4%</p>
                        <h1 className="text-neutral-brown">from last month</h1>
                    </section>
                </div>
            </div>
        </main>
    );
};
