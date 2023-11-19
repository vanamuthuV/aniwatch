import {React, useEffect, useState } from "react";
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

const url = "https://api.jikan.moe/v4/top/anime";

const DemoPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  backgroundColor: "#eee9b4",
  fontFamily: "Fira Code",
  fontSize : "24px",
  letterSpacing: "-.5px",
  fontWeight: "100",
  alignItems: "center"
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

    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState(false);
    const [Data, setData] = useState([]);

    useEffect(() => {
      fetch(url)
        .then(response => response.json()).then(da => {
          console.log(da.data)
          setData(da.data)
          setLoading(prev => !prev)
        })
    }, []);

    const Loader = () => {
      return (
        <ThemeProvider theme={MyTheme}>
          <Typography variant="h4">Loading....</Typography>
        </ThemeProvider>
      );
    };

    const Status = () => {
      return (
        <ThemeProvider theme={MyTheme}>
          <Typography variant="h6">Status Code : 200</Typography>
        </ThemeProvider>
      );
    };

    const AnimeCards = () => {
      {
        return Data.map((info) => {
          return (
            <Card
              sx={{
                maxWidth: 280,
                marginBottom: "15px",
                marginTop : '15px',
                borderRadius: "6px",
              }}
            >
              <CardActionArea sx={{ backgroundColor: "secondary.main" }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={info.images.jpg.image_url}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    fontSize={'18px'}
                    fontWeight={'500'}
                    height={'50px'}
                    component="div"
                    fontFamily={"Fira code"}
                  >
                    {info.title.length <= 30 ? info.title : info.title.substring(0,30) + "..."}
                  </Typography>
                  <Typography
                    variant="body"
                    fontSize={"14px"}
                    fontFamily={"Fira Code"}
                    sx={{ letterSpacing: "-.5px", textAlign: "justify" }}
                    color={"text"}
                  >
                    {info.synopsis.substring(0, 150) + "..."}
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
                <Link to={`/${info.rank}`}>
                  <Button size="small" color="text">
                    Read more
                  </Button>
                </Link>
              </CardActions>
            </Card>
          );
        });
      }
    };
    
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
            padding={"30px"}
          >
            Trending Animes
          </Typography>{" "}
          <br></br>
          <br></br>
          <Stack
            ml={'30px'}
            mr={'30px'}
            sx={{
              display: "flex",
              gap: "1.2rem",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
          
            {loading && <Loader />}
            {status && <Status />}
            {!loading && <AnimeCards />}
            
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