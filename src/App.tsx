import React, { FunctionComponent } from 'react';

export const App: FunctionComponent = () => {
    return (
        <main className="w-full h-screen bg-neutral-cream p-3 space-y-4">
            <div className="w-full h-[97px] bg-primary-red rounded-xl p-5 text-white flex justify-between">
                <section>
                    <h1 className="text-sm">My balance</h1>
                    <p className="text-2xl font-bold">$921.48</p>
                </section>
                <img className="p-1" src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo" />
            </div>

            <div className="w-full bg-neutral-orange rounded-xl p-5 space-y-5">
                <h1 className="text-2xl font-bold">Spending - Last 7 days</h1>
                <div className="space-y-2 pt-5">
                    <div className="grid grid-cols-7 gap-2 h-[150px] place-items-end">
                        <div className="w-full bg-primary-red rounded-sm" style={{ height: '33%' }}></div>
                        <div className="w-full bg-primary-red rounded-sm" style={{ height: '50%' }}></div>
                        <div className="w-full bg-primary-cyan rounded-sm" style={{ height: '100%' }}></div>
                        <div className="w-full bg-primary-red rounded-sm" style={{ height: '65%' }}></div>
                        <div className="w-full bg-primary-red rounded-sm" style={{ height: '74%' }}></div>
                        <div className="w-full bg-primary-red rounded-sm" style={{ height: '33%' }}></div>
                        <div className="w-full bg-primary-red rounded-sm" style={{ height: '65%' }}></div>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center text-neutral-brown text-xs">
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
                        <h1 className="text-neutral-brown text-sm">Total this month</h1>
                        <p className="text-2xl font-bold">$478.33</p>
                    </section>
                    <section className="text-sm text-right flex flex-col justify-end">
                        <p className="font-bold">+2.4%</p>
                        <h1 className="text-neutral-brown">from last month</h1>
                    </section>
                </div>
            </div>
        </main>
    );
};
