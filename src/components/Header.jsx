import { Button, Grid } from "@mui/material";
import JPLogo from "../assets/j3.png";
import ComboBox from "./ComboBox";
import "../index.css";
import "@fontsource/roboto/400.css";

const Header = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        alignItems: "center",
        // justifyContent: {
        //   lg: "flex-start",
        //   sm: "center",
        //   md: "flex-start",
        // },
      }}
    >
      <Grid
        item
        lg={3}
        md={4}
        sm={12}
        sx={{
          borderRight: { lg: "1px solid black", sm: "none" },
        }}
      >
        <img src={JPLogo} style={{ height: "45px", width: "250px" }} />
      </Grid>
      <Grid item lg={7} md={8} sm={12} sx={{ display: "flex" }}>
        <Button
          sx={{
            color: "black",
            textTransform: "none",
            fontSize: "20px",
            width: "120px",
          }}
        >
          Home
        </Button>
        <Button
          sx={{
            color: "black",
            textTransform: "none",
            fontSize: "20px",
            width: "120px",
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
            width: "120px",
          }}
        >
          Contact Us
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
