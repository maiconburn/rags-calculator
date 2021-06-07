import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function NumberOfPeople() {
  return (
    <Container>
      <Box>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item>
            <Typography variant="h4">
              How many people are there in your household?
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
