import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ButtonIncrementDecrement from "../components/ButtonIncrementDecrement";
import NavBar from "../components/NavBar";
import Stepper from "../components/Steeper";

export default function Index() {
  return (
    <div>
      <NavBar />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="h4" align="center">
              How many people are there in your household?
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box my="2rem">
            <Typography variant="body1" variantMapping="p" align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ipsum tellus, auctor vel urna vel, consequat posuere nisi. Ut
              porta interdum mollis. Duis efficitur elit sed nisi efficitur
              sollicitudin. Aliquam vel dolor malesuada, elementum massa at,
              dictum erat. Aliquam erat volutpat. Suspendisse eget quam ut nunc
              viverra ullamcorper id nec nunc. Aliquam quis arcu et arcu
              ultricies tempus non eu diam. Vestibulum sed faucibus risus.
              Vestibulum dictum arcu dolor, non congue odio tincidunt in. Aenean
              ut metus pharetra, blandit neque tempor, semper dolor. Phasellus
              at efficitur arcu, nec dignissim enim. Quisque ac pretium nibh,
              vitae porta elit. Suspendisse condimentum fringilla rutrum. Sed a
              commodo enim, tincidunt convallis nibh. Integer mollis mauris ut
              porta interdum.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
