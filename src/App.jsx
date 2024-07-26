import "@fontsource/roboto/400.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import JPLogo from "./assets/j3.png";
import ComboBox from "./components/ComboBox";
import pic1 from "./assets/1.png";

const App = () => {
  return (
    <Container sx={{ margin: "0px 10px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "30px",
          gap: 2,
          height: "70px",
        }}
      >
        <Box sx={{ width: 270, borderRight: "1px solid black" }}>
          <img src={JPLogo} style={{ height: "45px", width: "250px" }} />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            sx={{
              color: "black",
              textTransform: "none",
              fontSize: "20px",
            }}
          >
            Home
          </Button>
          <Button
            sx={{
              color: "black",
              textTransform: "none",
              fontSize: "20px",
            }}
          >
            About Us
          </Button>
          <ComboBox />
          <Button
            sx={{
              color: "black",
              textTransform: "none",
              fontSize: "20px",
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", alignItems: "center", height: "600px" }}
      >
        <Grid item lg={6} height={400}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              component="h1"
              variant="h2"
              color="#006838"
              sx={{ marginBottom: "20px" }}
            >
              Introduction to
            </Typography>
            <Typography
              component="h1"
              variant="h2"
              color="#006838"
              sx={{ marginBottom: "20px" }}
            >
              Jawan Pakistan
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ marginBottom: "20px", lineHeight: "30px" }}
            >
              The foundation of every state is the education and skills set of
              its youth. Jawan Pakistan is such an organization of Pakistan who
              is not only working on youth education but also enhancing skills
              set in youth either Free of cost or in a very low cost. This
              initiative, initially developed by a single person and with almost
              no seed capital, promotes entrepreneurship and innovation and
              Sustainable Development Goal, which promotes inclusive and
              sustainable economic growth.
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={6} height={400}>
          <img src={pic1} alt="" height={300} width={750} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
