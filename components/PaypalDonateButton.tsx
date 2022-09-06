import React from 'react';
import Button from './Button';
import styles from './PaypalDonateButton.module.css';

type PaypalDonateButtonProps = Partial<{
    businessId: string,
    recurring: boolean,
    message: string,
    currency: string
}>;

const PaypalDonateButton = ({ businessId = '', recurring, message, currency = 'USD' }: PaypalDonateButtonProps) => (
    <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="business" value={businessId} />
        {!recurring && <input type="hidden" name="no_recurring" value="1" />}
        <input type="hidden" name="item_name" value={message} />
        <input type="hidden" name="currency_code" value={currency} />
        <Button type="submit" style={{fontSize: '2em'}}>Donate</Button>
        <img style={{border:0}} alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    </form>
);

export default PaypalDonateButton;