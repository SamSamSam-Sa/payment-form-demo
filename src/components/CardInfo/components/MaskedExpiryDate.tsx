import React, { useEffect, useRef, useState } from 'react';
import { ICreditCardsProps } from '../interfaces';
import { absLenght } from './formatCard';
import { expirationDate } from 'card-validator';
import { ExpirationDateVerification } from 'card-validator/dist/expiration-date';
import { EXPIRY_DATE_MASK } from './masks';
import MaskedInput from 'react-text-mask';
import { StyledMaskedCardAdditional } from './style';

const ExpiryDateMaskCustom = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput {...other} ref={inputRef} mask={EXPIRY_DATE_MASK} placeholderChar={'\u2000'} />
  );
};

const MaskedExpiryDate = (props: ICreditCardsProps) => {
  const { focus } = props;
  const [help, setHelp] = useState('');
  const [textMask, setTextMask] = useState('');

  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (focus) {
      inputRef.current.focus();
    }
  }, [focus]);

  const handleBlur = (event: any) => {
    const value: any = event?.target?.value;
    const expirationDateVeryfied: ExpirationDateVerification = expirationDate(value);
    const DateLength = absLenght(value);

    if (DateLength > 0 && !expirationDateVeryfied.isValid) {
      setHelp('Incorrect date');
    } else {
      setHelp('');
    }
  };

  const handleChange = (event: any) => {
    setTextMask(event?.target?.value);
  };

  return (
    <StyledMaskedCardAdditional
      name="ccexp"
      error={!!help}
      margin="normal"
      helperText={help}
      required
      id="expiryDate"
      label="Expiry date"
      inputRef={inputRef}
      variant="outlined"
      onChange={handleChange}
      onBlur={handleBlur}
      InputProps={{
        inputComponent: ExpiryDateMaskCustom,
        value: textMask,
        onChange: handleChange as any,
        onBlur: handleBlur,
      }}
    />
  );
};

export default MaskedExpiryDate;
