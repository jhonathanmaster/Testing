import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import MyHeader from './Header';
import MyFooter from './Footer';

const NotFound =( ) => (
    <React.Fragment>
    <CssBaseline />
    <MyHeader />
    <Container >
      <h2>Page Not Found</h2>
      The page that you are loking for is not register in this website.
    </Container>
    <MyFooter />
  </React.Fragment>
);

export default NotFound;
