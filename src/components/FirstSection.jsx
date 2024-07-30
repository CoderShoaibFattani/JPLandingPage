import { Box, Grid, Typography } from "@mui/material";
import pic1 from "../assets/1.png";

const FirstSection = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        alignItems: "center",
        height: {
          lg: "600px",
          md: "1000px",
          sm: "1000px",
          xs: "1000px",
        },
        justifyContent: {
          sm: "center",
          md: "center",
        },
      }}
    >
      <Grid item lg={6} md={12} sm={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: {
              lg: "flex-start",
              md: "center",
              sm: "center",
              xs: "center",
            },
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            color="#006838"
            sx={{ marginBottom: "20px", fontSize: "36px" }}
          >
            Introduction to
          </Typography>
          <Typography
            component="h1"
            variant="h2"
            color="#006838"
            sx={{ marginBottom: "20px", fontSize: "36px" }}
          >
            Jawan Pakistan
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{ marginBottom: "20px", lineHeight: "30px" }}
          >
            The foundation of every state is the education and skills set of its
            youth. Jawan Pakistan is such an organization of Pakistan who is not
            only working on youth education but also enhancing skills set in
            youth either Free of cost or in a very low cost. This initiative,
            initially developed by a single person and with almost no seed
            capital, promotes entrepreneurship and innovation and Sustainable
            Development Goal, which promotes inclusive and sustainable economic
            growth.
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={6} md={12} sm={12}>
        <img src={pic1} alt="" height={300} />
      </Grid>
    </Grid>
  );
};

export default FirstSection;
