import React from "react";
import { MyTheme } from "../../CustomColor";
import { ThemeProvider, Typography } from "@mui/material";
import "./Home.css"
import { Link } from "react-router-dom";
import { SimpleData } from "../../Data";
import { Stack } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, Container } from '@mui/material';
import { Anime } from "../../Data";
import "./Home.css"
import { AccordionInfo } from "../../Data";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Review } from "../Review/Review";

const DemoPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  backgroundColor: "#eee9b4",
  fontFamily: "Fira Code",
  fontSize : "24px",
  letterSpacing: "-.5px",
  fontWeight: "100",
  alignItems: "center",
}));

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-title">Welcome to Ani Watch</h1>
      <p className="hero-subtitle">
        Explore your favorite animes, characters and more!
      </p>
    </div>
  );
};

export const Home = () => {
    return (
      <ThemeProvider theme={MyTheme}>
        <Hero />
        <Stack
          bgcolor={"#FAFAFA"}
          direction={"column"}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            fontFamily={"Fira Code"}
            fontWeight={"500"}
            mr={"20px"}
            ml={"20px"}
            padding={'30px'}
          >
            Popular Animes
          </Typography>{" "}
          <br></br>
          <br></br>
          <Stack
            sx={{
              display: "flex",
              gap: "3rem",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {Anime.map((anime) => {
              return (
                <Card
                  sx={{
                    maxWidth: 345,
                    marginBottom: "20px",
                    borderRadius: "6px",
                  }}
                >
                  <CardActionArea sx={{ backgroundColor: "secondary.main" }}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={anime.url}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontFamily={"Fira code"}
                      >
                        {anime.Name}
                      </Typography>
                      <Typography
                        variant="body"
                        fontSize={"14px"}
                        fontFamily={"Fira Code"}
                        sx={{ letterSpacing: "-.5px" }}
                        color={"text"}
                      >
                        {anime.info.substring(0, 150) + "..."}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "info.main",
                    }}
                  >
                    <Link to={`/${anime.id}`}>
                      <Button size="small" color="text" >
                        Read more
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              );
            })}
          </Stack>

          <Review />

          <Container sx={{ marginTop: "10px", marginBottom: "30px" }}>
            {AccordionInfo.map((info) => {
              return (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography fontFamily={"Fira Code"}>
                      {info.Ques}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography fontFamily={"Fira Code"}>
                      {info.Answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Container>
        </Stack>
      </ThemeProvider>
    );
}
