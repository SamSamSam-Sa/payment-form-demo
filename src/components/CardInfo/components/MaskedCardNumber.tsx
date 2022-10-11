import React, { useEffect, useRef, useState } from 'react';
import MaskedInput from 'react-text-mask';
import TextField from '@mui/material/TextField';
import { number } from 'card-validator';
import { absLenght } from './formatCard';
import { CardNumberVerification } from 'card-validator/dist/card-number';
import { ICreditCardsProps } from '../interfaces';
import InputAdornment from '@mui/material/InputAdornment';
import PaymentIcon from 'react-payment-icons';
import CardIcon from '@mui/icons-material/Payment';
import { CARD_NUMBER_MASK } from './masks';

const CardNumberMaskCustom = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput {...other} ref={inputRef} mask={CARD_NUMBER_MASK} placeholderChar={'\u2000'} />
  );
};

const MaskedCardNumber = (props: ICreditCardsProps) => {
  const { focus } = props;
  const [creditCardType, setCreditCardType] = useState('');
  const [help, setHelp] = useState('');
  const [textMask, setTextMask] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focus) {
      inputRef && inputRef.current?.focus();
    }
  }, [focus]);

  const handleBlur = (event: any) => {
    const cardNumberValue = event?.target?.value;
    const cardNumberValidator: CardNumberVerification = number(cardNumberValue);
    if (cardNumberValidator.isValid) {
      setHelp('');
    } else {
      setHelp('Number is not valid');
    }
  };

  const handleChange = (event: any) => {
    setTextMask(event?.target?.value);
    const cardNumberValue: string = event?.target?.value;
    const cardNumberValidator: CardNumberVerification = number(cardNumberValue);

    setCreditCardType(cardNumberValidator?.card?.type || '');
    if (absLenght(cardNumberValue) > 0 && !cardNumberValidator.isPotentiallyValid) {
      setHelp('Number is not valid');
    } else if (!/([0-9]+)/.test(cardNumberValue)) {
      setHelp('');
    } else if (cardNumberValidator.isValid) {
      setHelp('');
    }
  };

  return (
    <TextField
      id="cardNumber"
      name="cardNumber"
      label="Card Number"
      margin="normal"
      error={!!help}
      helperText={help}
      required
      fullWidth
      inputRef={inputRef}
      variant="outlined"
      InputProps={{
        inputComponent: CardNumberMaskCustom,
        value: textMask,
        onChange: handleChange as any,
        onBlur: handleBlur,
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

export default MaskedCardNumber;
