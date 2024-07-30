import "@fontsource/roboto/400.css";
import FirstSection from "./components/FirstSection";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import { Paper } from "@mui/material";

const App = () => {
  return (
    <Container>
      <Header />
      <Paper elevationY={4}>
        <FirstSection />
        <SecondSection />
      </Paper>
      <ThirdSection />
    </Container>
  );
};

export default App;
