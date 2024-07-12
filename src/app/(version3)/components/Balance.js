import React from 'react';
import trx from '../assets/images/trx.svg';
import shib from '../assets/images/shib.svg';
import Image from "next/image";

function Balance({data}) {
    return (
        <div className="currencies">
            <div className="currency-balance">
                <div className="currency-balance_left">
                    <div className="currency-balance__logotype">
                        <Image src={trx} alt="" draggable="false"/>
                    </div>
                    <div className="currency-balance__text">
                        <span className="currency-balance__title">Tron Balance</span>
                        <span className="currency-balance__value">{data.tron_balance} TRX</span>
                    </div>
                </div>

                <a className="currency-balance__send-button currency-balance_right button"
                   href="#sendTRX">Send</a>
            </div>
            <div className="currency-balance">
                <div className="currency-balance_left">
                    <div className="currency-balance__logotype">
                        <Image src={shib} alt="" draggable="false"/>
                    </div>
                    <div className="currency-balance__text">
                        <span className="currency-balance__title">BNB Balance</span>
                        <span
                            className="currency-balance__value">{data.shib_balance.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} BNB</span>
                    </div>
                </div>

                <a className="currency-balance__send-button currency-balance_right button"
                   href="#sendSHIB">Send</a>
            </div>
            <div className="currency-balance">
                <div className="currency-balance_left">
                    <div className="currency-balance__logotype">
                        <Image src={shib} alt="" draggable="false"/>
                    </div>
                    <div className="currency-balance__text">
                        <span className="currency-balance__title">BNB Balance</span>
                        <span
                            className="currency-balance__value">{data.shib_balance.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} BNB</span>
                    </div>
                </div>

                <a className="currency-balance__send-button currency-balance_right button"
                   href="#sendSHIB">Send</a>
            </div>
        </div>
    );
}

export default Balance;
