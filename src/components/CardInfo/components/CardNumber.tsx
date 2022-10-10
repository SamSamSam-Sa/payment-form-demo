import React, { useEffect, useRef, useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { ICardINfoProps } from '../interfaces';
import { number } from 'card-validator';
import { absLenght } from '../formatCard';
import { CardNumberVerification } from 'card-validator/dist/card-number';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import PaymentIcon from 'react-payment-icons';
import CardIcon from '@mui/icons-material/Payment';

const CardNumber = (props: ICardINfoProps) => {
  const { focused } = props;

  const [creditCardType, setCreditCardType] = useState('');
  const [error, setError] = useState(false);
  const [help, setHelp] = useState('');

  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (focused) {
      inputRef.current.focus();
    }
  }, [focused]);

  const handleBlur = (event: any) => {
    const cardNumberValue = event?.target?.value;
    const cardNumberValidator: CardNumberVerification = number(cardNumberValue);
    if (cardNumberValidator.isValid) {
      setError(false);
      setHelp('');
    } else {
      setError(true);
      setHelp('Number is not valid');
    }
  };

  const handleChange = (event: any) => {
    const cardNumberValue: string = event?.target?.value;
    const cardNumberValidator: CardNumberVerification = number(cardNumberValue);

    setCreditCardType(cardNumberValidator?.card?.type || '');
    if (absLenght(cardNumberValue) > 0 && !cardNumberValidator.isPotentiallyValid) {
      setError(true);
      setHelp('Number is not valid');
    } else if (!/([0-9]+)/.test(cardNumberValue)) {
      setError(false);
      setHelp('');
    } else if (cardNumberValidator.isValid) {
      setError(false);
      setHelp('');
    }
  };

  return (
    <TextField
      error={error}
      margin="normal"
      helperText={help}
      required
      fullWidth
      id="cardNumber"
      label="Card Number"
      inputRef={inputRef}
      variant="outlined"
      onChange={handleChange}
      onBlur={handleBlur}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {creditCardType === '' ? (
              <CardIcon />
            ) : (
              <PaymentIcon
                id={creditCardType}
                style={{ margin: 10, width: 24 }}
                className="payment-icon"
              />
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CardNumber;
