"use client";
import React, {useState, useEffect, useMemo, useCallback} from 'react';
import Link from 'next/link';
import {useAuth} from './hooks/useAuth';
import LoadingOverlay from './components/LoadingOverlay';
import Navbar from './components/Navbar';
import Balance from './components/Balance';
import SendShib from './components/modal-windows/SendShib';
import SendTron from './components/modal-windows/SendTron';
import Claim from './components/modal-windows/Claim';
import Boost from './components/modal-windows/Boost';
import Big from 'big.js';
import spinner from '../assets/images/spinner.png';
import trx_icon from './assets/images/trx-icon.svg';
import banner from './assets/images/banner1.png';

function SpinnerClicked() {
    const element = document.getElementById('spinner');
    if (!element.classList.contains('boing')) {
        element.classList.add('boing');
        setTimeout(() => {
            element.classList.remove('boing');
        }, 500);
    }
}

function Page() {
    const {userData, loading, setUserData, loadUserData} = useAuth();
    const [displayText, setDisplayText] = useState('1.0 GH/s');
    const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());

    useEffect(() => {
        loadUserData();
        setLastUpdateTime(Date.now());
    }, [loadUserData]);

    const memoizedPower = useMemo(() => {
        const power = Big(userData?.power || 0.0);
        return power.gte(1000) ? `${power.div(1000).toFixed(1)} TH/s` : `${power.toFixed(1)} GH/s`;
    }, [userData?.power]);

    useEffect(() => {
        setDisplayText(memoizedPower);
    }, [memoizedPower]);

    const updateUserData = useCallback(() => {
        const now = Date.now();
        const elapsedSeconds = (now - lastUpdateTime) / 1000; // время с последнего обновления в секундах
        setUserData(prevData => ({
            ...prevData,
            tronex_balance: Big(prevData.tronex_balance).plus(Big(prevData.step).times(elapsedSeconds))
        }));
        setLastUpdateTime(now);
    }, [lastUpdateTime]);

    useEffect(() => {
        if (userData) {
            const intervalId = setInterval(updateUserData, 50);
            return () => clearInterval(intervalId);
        }
    }, [userData, updateUserData]);

    if (loading) {
        return <LoadingOverlay/>;
    }

    return (
        <div>
            <main>
                <Balance data={userData}/>
                <div className="spinner"><img src={spinner} alt="" id="spinner" onClick={SpinnerClicked}
                                              className="spinner__image spin"
                                              draggable="false"/><img
                    src={trx_icon} className="spinner__icon" alt="" draggable="false"/></div>

                <span className="mined"><span
                    id="balance">{Big(userData.tronex_balance).toFixed(6).toString()}</span> TRX</span>
                <span className="modifier">{displayText} ⚡</span>

                <div className="actions">
                    <a className="action-button action-button__claim button" href="#claim">Claim</a>
                    <a className="action-button action-button__boost button" href="#boost">Boost</a>
                </div>

                <Link className="banner" href="/friends">
                    <img src={banner} alt=""/>
                </Link>
            </main>
            <Navbar/>
            <SendTron/>
            <SendShib/>
            <Boost/>
            <Claim/>
        </div>
    );
}

export default Page;