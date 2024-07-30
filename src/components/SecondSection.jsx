import { Box, Grid, Typography } from "@mui/material";
import pic2 from "../assets/2.png";

const SecondSection = () => {
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
        <img src={pic2} alt="" height={300} />
      </Grid>
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
            },
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            color="#006838"
            sx={{ marginBottom: "20px", fontSize: "36px" }}
          >
            Mission And Vision
          </Typography>
          <Typography
            component="h1"
            variant="h2"
            color="#006838"
            sx={{ marginBottom: "20px", fontSize: "36px" }}
          >
            Behind Jawan Pakistan
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{ marginBottom: "20px", lineHeight: "30px" }}
          >
            Our vision is to bring our students into the 21st century through
            innovation and modern technology. To create a better every day life
            for every people. This program is not only impacting the youth in
            monetary perspective but it is also creating some deep-rooted,
            long-term psychological effects e.g. minimizing frustration among
            the unemployed youth.
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{ marginBottom: "20px", lineHeight: "30px" }}
          >
            Our mission is to provide high quality education that connects young
            people with opportunities to transform their lives. The educated
            youngsters who remain unemployed gets frustrated, depressed and
            disheartened when they do not succeed in getting their dream jobs.
            This training reinforces the educated youth to earn well through
            freelancing, develop variety of skills through specified domains and
            promote entrepreneurial culture that diverts youths potentials for
            constructive purposes. This energy diversion definitely make the
            youth more confident, self-reliant and constructive asset for a
            progressing economy.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SecondSection;
