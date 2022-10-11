import React from 'react';
import { InfoWrapper } from './style';
import Grid from '@mui/material/Grid';
import ProductItem from '../../../../components/ProductItem/ProductItem';
import { PRODUCT_ITEMS } from '../../../../mock/mock';
import Typography from '@mui/material/Typography';
import { StyledDivider } from './style';

const Info = () => {
  return (
    <InfoWrapper>
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>
        {PRODUCT_ITEMS.map((item) => (
          <ProductItem key={item.title} item={item} />
        ))}
      </Grid>
      <StyledDivider>
        <Typography variant="h4" color="common.white">
          {'Total: $20'}
        </Typography>
      </StyledDivider>
    </InfoWrapper>
  );
};

export default Info;
