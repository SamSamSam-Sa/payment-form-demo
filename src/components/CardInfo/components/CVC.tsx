import React, { useEffect, useRef, useState } from 'react';
import { ICardINfoProps } from '../interfaces';
import { absLenght } from '../formatCard';
import TextField from '@mui/material/TextField';
import { Verification } from 'card-validator/dist/types';
import { cvv } from 'card-validator';

const CVCField = (props: ICardINfoProps) => {
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
    const CVCvalue = event?.target?.value;
    const CVCLength = absLenght(CVCvalue);
    const value: Verification = cvv(CVCvalue);
    if (CVCLength > 0 && value.isValid) {
      setError(false);
      setHelp('');
    } else {
      setError(true);
      setHelp('Its not valid CVC code');
    }
  };

  const handleChange = (event: any) => {
    const CVCLength = absLenght(inputRef?.current.value);
    const CVCverify: Verification = cvv(event?.target?.value);

    if (CVCLength > 0 && CVCLength !== 3) {
      setError(true);
      setHelp('Incorect CVC length');
    } else if (CVCLength > 0 && !CVCverify.isPotentiallyValid) {
      setError(true);
      setHelp('Dont now what but something sticky');
    } else if (CVCverify.isValid) {
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
      id="cvc"
      label="CVC"
      inputRef={inputRef}
      variant="outlined"
      onChange={handleChange}
      onBlur={handleBlur}
      //   sx={{ width: '47%', ml: 2 }}
    />
  );
};

export default CVCField;
