import classNames from 'classnames';
import React, { FunctionComponent, useEffect, useState } from 'react';

interface DailyExpense {
    day: string;
    amount: number;
}

export const App: FunctionComponent = () => {
    const [dailyExpenses, setDailyExpenses] = useState<DailyExpense[]>([]);
    const amounts = dailyExpenses.map((item) => item.amount);
    const days = dailyExpenses.map((item) => item.day);
    const maxAmount = Math.max(...amounts);
    const today = new Date().getDay() > 0 ? new Date().getDay() - 1 : 6;

    useEffect(() => {
        const getData = async () => {
            const data: DailyExpense[] = await fetch(
                `${window.location.host.includes('localhost') ? '' : '/fm-expense-chart-component'}/json/data.json`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                },
            ).then((response) => response.json());

            if (data) setDailyExpenses(data);
        };

        getData();

        return () => {
            setDailyExpenses([]);
        };
    }, []);

    return (
        <main className="w-full h-screen bg-neutral-cream p-3 flex flex-col gap-4 place-items-center place-content-center">
            <div className="w-full h-[97px] bg-primary-red rounded-xl p-5 text-white flex justify-between md:w-[540px] md:h-[125px] md:p-6">
                <section className="h-full grid">
                    <h2 className="text-sm md:text-base">My balance</h2>
                    <p className="text-2xl font-bold md:text-3xl">$921.48</p>
                </section>
                <img className="p-1 md:p-2" src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo" />
            </div>

            <div className="w-full bg-neutral-orange rounded-xl p-5 space-y-5 md:w-[540px] md:p-6 md:space-y-6">
                <h1 className="text-2xl font-bold md:text-3xl">Spending - Last 7 days</h1>
                <div className="space-y-2 pt-5">
                    <div className="grid grid-cols-7 gap-2 h-[150px] place-items-end md:gap-5">
                        {amounts.length &&
                            amounts.map((amount, index) => {
                                return (
                                    <div
                                        className={classNames(
                                            { 'bg-primary-cyan': today === index },
                                            'w-full bg-primary-red rounded-sm relative cursor-pointer group transition-all duration-300 ease-in-out origin-bottom animate-grow hover:bg-opacity-50 md:rounded-md',
                                        )}
                                        style={{ height: `${(amount / maxAmount) * 100}%` }}>
                                        <div className="absolute -top-7 -m-[20%] w-[140%] p-1 bg-neutral-dark-brown rounded-sm text-white text-center opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 md:rounded-md">
                                            {`$${amount}`}
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center text-neutral-brown text-xs md:gap-5 md:text-sm">
                        {days.length && days.map((day) => <p>{day}</p>)}
                    </div>
                </div>
                <hr className="border-neutral-cream border" />
                <div className="flex justify-between">
                    <section className="space-y-1">
                        <h2 className="text-neutral-brown text-sm md:text-base">Total this month</h2>
                        <p className="text-2xl font-bold md:text-5xl">$478.33</p>
                    </section>
                    <section className="text-sm text-right flex flex-col justify-end md:text-base">
                        <p className="font-bold">+2.4%</p>
                        <h2 className="text-neutral-brown">from last month</h2>
                    </section>
                </div>
            </div>
        </main>
    );
};
