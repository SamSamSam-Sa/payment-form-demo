import React, { createContext, useCallback, useEffect, useState } from 'react';
import MaskedCVC from './components/MaskedCVC';
import { StyledGrid } from './style';
import { ICardContext, ICardProviderProps, ICreditCard } from './interfaces';
import MaskedCardNumber from './components/MaskedCardNumber';
import MaskedExpiryDate from './components/MaskedExpiryDate';

export const CreditCardDataContext = createContext<ICardContext | null>(null);

export const CardProvider = ({ children }: ICardProviderProps) => {
  const [cardData, setCardData] = useState<ICreditCard | undefined>(undefined);

  return (
    <CreditCardDataContext.Provider value={{ cardData, setCardData }}>
      {children}
    </CreditCardDataContext.Provider>
  );
};

const CardInfo = () => {
  const [focusIndex, setFocusIndex] = useState<boolean[]>([]);
  const [cardData, setCardData] = useState<ICreditCard | undefined>(undefined);

  const leaveField = (index: number) => {
    const indexArray = new Array<boolean>(3).fill(false);
    indexArray[index] = true;
    setFocusIndex(indexArray);
  };

  const setFocusOnFirst = useCallback(() => {
    leaveField(0);
  }, []);

  useEffect(() => {
    leaveField(0);
  }, []);

  useEffect(() => {
    window.addEventListener('focus', setFocusOnFirst);
    return () => {
      window.removeEventListener('focus', setFocusOnFirst);
    };
  }, [setFocusOnFirst]);

  return (
    <CreditCardDataContext.Provider value={{ cardData, setCardData }}>
      <>
        <MaskedCardNumber
          value=""
          leaveFieldCallback={leaveField}
          focus={focusIndex[0]}
          tabIndex={0}
        />
        <StyledGrid container columns={12}>
          <MaskedExpiryDate
            value=""
            leaveFieldCallback={leaveField}
            focus={focusIndex[1]}
            tabIndex={1}
          />
          <MaskedCVC value="" focus={focusIndex[2]} tabIndex={2} />
        </StyledGrid>
      </>
    </CreditCardDataContext.Provider>
  );
};

export default CardInfo;
