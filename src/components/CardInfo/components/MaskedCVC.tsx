import React, { useEffect, useRef, useState } from 'react';
import { ICreditCardsProps } from '../interfaces';
import { absLenght } from '../formatCard';
import { Verification } from 'card-validator/dist/types';
import { cvv } from 'card-validator';
import MaskedInput from 'react-text-mask';
import { CVC_MASK } from './masks';
import { StyledMaskedCardAdditional } from './style';

const CVCMaskCustom = (props) => {
  const { inputRef, ...other } = props;

  return <MaskedInput {...other} ref={inputRef} mask={CVC_MASK} placeholderChar={'\u2000'} />;
};

const MaskedCVC = (props: ICreditCardsProps) => {
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
    const value = event?.target?.value;
    const valueVeryfied: Verification = cvv(value);
    const CVCLength = absLenght(value);

    if (CVCLength > 0 && CVCLength !== 3) {
      setHelp('Incorect CVC');
    } else if (CVCLength > 0 && !valueVeryfied.isPotentiallyValid) {
      setHelp('Dont now what but something sticky');
    } else if (valueVeryfied.isValid) {
      setHelp('');
    }
  };

  const handleChange = (event: any) => {
    setTextMask(event?.target?.value);
  };

  return (
    <StyledMaskedCardAdditional
      name="cvc"
      error={!!help}
      margin="normal"
      helperText={help}
      required
      id="cvc"
      label="CVC"
      inputRef={inputRef}
      variant="outlined"
      onChange={handleChange}
      onBlur={handleBlur}
      InputProps={{
        inputComponent: CVCMaskCustom,
        value: textMask,
        onChange: handleChange as any,
        onBlur: handleBlur,
      }}
    />
  );
};

export default MaskedCVC;
