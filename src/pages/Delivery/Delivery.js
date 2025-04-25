
import './style.css';
import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime } from '@mui/material/colors';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import UpdateIcon from '@mui/icons-material/Update';
import delivery from './../../../public/img/delivery/delivery.png';

const theme = createTheme({
  palette: {
    primary: lime,
  },
});

function Delivery() {
  const [open, setOpen] = useState(false);

  const openDeliveryModal = () => {
    setOpen(true);
  };

  const closeDeliveryModal = () => {
    setOpen(false);
  };

  return (
    <div className="delivery wrapper">
      <div className="delivery__banner">
        <h2 className="delivery__header">
          We will deliver quickly to your region
        </h2>
        <div className="delivery__info">
          <div className="delivery__conditions">
            <div className="delivery__conditions-descr">
              <p>
                <MoneyOffIcon />
                Free shipping
              </p>
              <p>
                <SyncAltIcon />
                Returning goods after trying on
              </p>
              <p>
                <UpdateIcon />
                Delivery all year round
              </p>
            </div>

            <div className="delivery__conditions-button">
              <ThemeProvider theme={theme}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={openDeliveryModal}
                >
                  Conditions
                </Button>
              </ThemeProvider>

              <Dialog open={open} aria-labelledby="delivery-modal">
                <DialogTitle id="delivery-modal">DELIVERY INFO</DialogTitle>
                <DialogContent>
                  <DialogContentText>Please, read carefully</DialogContentText>
                  <Typography>
                    If the order is placed with courier delivery, has already
                    arrived at the pick-up point, but has not yet been handed
                    over to the courier, the goods can be received at the
                    pick-up point. The address of the point where the goods are
                    located can be seen by clicking on the product status. The
                    current shelf life of the goods is 14 days after its arrival
                    at the pick-up point.
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={closeDeliveryModal}
                    variant="contained"
                    color="success"
                  >
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>

          <div className="delivery__image">
            <img src={delivery} alt="delivery image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Delivery };
