import { Box, Button, Card, CardMedia, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Base from "../Base/Base";
import "./Dashboard.css";

function Reward() {
  const navigate = useNavigate();
  return (
    <Base>
      <Grid container>
        <Grid item xs={12}>
          <Box>
            <img src="https://etimg.etb2bimg.com/photo/94641055.cms"></img>
          </Box>
          <Box>
            <Button onClick={() => navigate("/home/dashboard")} variant='contained'>
              Back To Navigate
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Base>
  );
}

export default Reward;
