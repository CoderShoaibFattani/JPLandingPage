import { Grid, Typography } from "@mui/material";
import pic3 from "../assets/image.jpg";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const ThirdSection = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "600px",
        width: {
          lg: "100%",
          md: "100%",
          sm: "100%",
        },
      }}
    >
      <img src={pic3} alt="" style={{ borderRadius: "50%", height: "200px" }} />
      <Typography component="h1" variant="h3" sx={{ textAlign: "center" }}>
        MUHAMMAD ALI MUGHAL
      </Typography>
      <Typography component="p" variant="p" sx={{ textAlign: "center" }}>
        Founder of Jawan Pakistan
      </Typography>
      <Typography component="p" variant="h5" sx={{ textAlign: "center" }}>
        <FormatQuoteIcon />
      </Typography>
      <Typography component="p" variant="p" sx={{ textAlign: "center" }}>
        We aim to be most efficient provider of business process outsourcing
        services by setting the industry standards for cost and quality of
        services. Our long term success will be driven by our relentless focus
        on recruiting and developing the most talented pool of human capital in
        our industry.
      </Typography>
    </Grid>
  );
};

export default ThirdSection;
