import React, { useEffect, useRef, useState } from 'react';
import { ICardINfoProps } from '../interfaces';
import { absLenght } from '../formatCard';
import TextField from '@mui/material/TextField';
import { expirationDate, expirationMonth, expirationYear } from 'card-validator';
import { ExpirationDateVerification } from 'card-validator/dist/expiration-date';
import { ExpirationMonthVerification } from 'card-validator/dist/expiration-month';
import { ExpirationYearVerification } from 'card-validator/dist/expiration-year';

const ExpiryDate = (props: ICardINfoProps) => {
  const { focused } = props;

  const [error, setError] = useState(false);
  const [help, setHelp] = useState('');

  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (focused) {
      inputRef.current.focus();
    }
  }, [focused]);

  const handleBlur = (event: any) => {
    const value: any = event?.target?.value;
    const epirationDate: ExpirationDateVerification = expirationDate(value);
    if (epirationDate.isValid) {
      setError(false);
      setHelp('');
    } else {
      setError(true);
    }
  };

  const handleChange = (event: any) => {
    const value: any = event?.target?.value;
    const expirationDateVeryfied: ExpirationDateVerification = expirationDate(value);
    const expirationMonthVeryfied: ExpirationMonthVerification = expirationMonth(value);
    const expirationYearVeryfied: ExpirationYearVerification = expirationYear(value);
    const DateLength = absLenght(value);
    console.log('TCL ~ file: ExpiryDate.tsx ~ line 43 ~ handleChange ~ DateLength', DateLength);

    if (DateLength > 0 && !expirationMonthVeryfied.isPotentiallyValid) {
      setHelp('Wrong month data');
      setError(true);
    } else if (DateLength > 0 && !expirationYearVeryfied.isPotentiallyValid) {
      setHelp('Wrong year data');
      setError(true);
    } else if (DateLength > 0 && !expirationDateVeryfied.isValid) {
      setHelp('Wrong data');
      setError(true);
    } else {
      setHelp('');
      setError(false);
    }
  };

  return (
    <TextField
      error={error}
      margin="normal"
      helperText={help}
      required
      id="expiryDate"
      label="Expiry date"
      inputRef={inputRef}
      variant="outlined"
      onChange={handleChange}
      onBlur={handleBlur}
      //   sx={{ width: '47%', mr: 2 }}
    />
  );
};

export default ExpiryDate;
