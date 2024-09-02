import { React, useEffect, useState } from "react";
import { MyTheme } from "../../CustomColor";
import { ThemeProvider, Typography } from "@mui/material";
import "./Home.css";
import { Link } from "react-router-dom";
import { SimpleData } from "../../Data";
import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, Container } from "@mui/material";
import { Anime } from "../../Data";
import "./Home.css";
import { AccordionInfo } from "../../Data";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Review } from "../Review/Review";
import { info } from "autoprefixer";

const url = "https://api.jikan.moe/v4/anime";

export let TransferData;

const DemoPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  backgroundColor: "#eee9b4",
  fontFamily: "Fira Code",
  fontSize: "24px",
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

const SearchGenres = () => {
  return (
    <ThemeProvider theme={MyTheme}>
      <div className="flex justify-center items-center bg-gray-100 my-10">
        <Link to="/genres">
          <div className="p-6 bg-white shadow-lg rounded-lg hover:bg-blue-100 transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <p className="text-2xl font-bold text-gray-800 transition-transform transform hover:translate-x-2">
              Search By Genres
            </p>
          </div>
        </Link>
      </div>
    </ThemeProvider>
  );
};


export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(false);
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((da) => {
        console.log(da.data);
        TransferData = da.data;
        setData(da.data.slice(0, 12));
        setLoading((prev) => !prev);
      });
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
    return Data.map((info) => {
      return (
        <div className="flex flex-wrap justify-center">
          <div className="max-w-xs w-full m-4 bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100 duration-300 ease-in-out">
            <a href="/path-to-info" className="block">
              <img
                src={info.images.jpg.image_url}
                alt="anime-image"
                className="w-full h-48 object-cover transition-transform transform hover:scale-110 duration-300 ease-in-out"
              />
              <div className="p-4">
                <h2
                  className="text-lg font-semibold text-gray-800 truncate mb-2"
                  style={{ fontFamily: "Fira Code" }}
                >
                  {info.title.length <= 30
                    ? info.title
                    : info.title.substring(0, 30) + "..."}
                </h2>
                <p className="text-sm text-gray-700 mt-1">
                  {info.synopsis.length > 150
                    ? info.synopsis.substring(0, 150) + "..."
                    : info.synopsis}
                </p>
              </div>
              <div className="bg-gray-200 p-3 flex justify-center items-center">
                <Link
                  to={`/${info.rank}`}
                  className="text-blue-500 hover:text-blue-700 font-semibold transition-colors duration-300 ease-in-out"
                >
                  Read more
                </Link>
              </div>
            </a>
          </div>
        </div>
      );
    });
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
        <p
          fontFamily={"Fira Code"}
          className="text-center my-10 text-3xl font-bold"
        >
          Trending Animes
        </p>{" "}
        <br></br>
        <br></br>
        <Stack
          ml={"30px"}
          mr={"30px"}
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
          {!loading && <SearchGenres />}
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
                  <Typography fontFamily={"Fira Code"}>{info.Ques}</Typography>
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
};
