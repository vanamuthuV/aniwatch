import React from "react";
import { TransferData } from "../Home/Home";
import { ThemeProvider , Typography} from "@mui/material";
import { MyTheme } from "../../CustomColor";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const GenresList = [];
const GenresAnimeList = []

export const Genres = () => {
    console.log(TransferData)
    TransferData.map((anime) => {
        anime.genres.map((item) => {
            !GenresList.includes(item.name) ? GenresList.unshift(item.name) : GenresList
        })
    })
    console.log(GenresList)

    TransferData.map((anime) => {
        anime.genres.map((item) => {
            GenresAnimeList.push({'key' : GenresList.indexOf(item.name), ...anime})
        })
    })

    console.log(GenresAnimeList)

    for (let m = 0; m < GenresAnimeList.length; m++) {
        for (let n = 0; n < GenresAnimeList.length; n++) {
            if (GenresAnimeList[m].key < GenresAnimeList[n].key) {
                let temp = GenresAnimeList[m]
                GenresAnimeList[m] = GenresAnimeList[n]
                GenresAnimeList[n] = temp
            }
        }
    }

    console.log(GenresAnimeList)

    let Prev = 0;
    const show = false

    return (
        <ThemeProvider theme={MyTheme}>
            <Typography variant="h1" sx={{fontSize : '30px', fontFamily : 'Fira Code'}}>Trending Animes</Typography><br></br>
            <Typography variant="h3" sx={{ fontSize: '25px', fontWeight: '500', fontFamily: 'Fira Code' }}>{GenresList[0]}</Typography>
        {GenresAnimeList.map((animes) => {
          return (
            <div>
              {animes.key !== Prev && (
                <>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "25px",
                      fontWeight: "500",
                      fontFamily: "Fira Code",
                    }}
                  >
                    {GenresList[animes.key]}
                  </Typography>
                  <br></br>
                </>
              )}
              <Card sx={{ maxWidth: 250 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={animes.images.jpg.image_url}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ fontSize: "20px", fontFamily : 'Fira Code'}}
                    >
                      {animes.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{fontFamily : 'Fira Code'}}>
                      {animes.synopsis.substring(0, 200)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{display : "flex", flexDirection : "row", justifyContent : 'center', alignItems : 'center'}}>
                  <Link to={`/genres/${animes.rank}`}>
                    <Button size="small" sx={{ color: "#403b02", fontFamily : 'Fira Code'}}>
                      More
                    </Button>
                  </Link>
                </CardActions>
              </Card>
              <Typography variant="p" sx={{ display: "none" }}>
                {(Prev = animes.key)}
              </Typography>
            </div>
          );
        })}
      </ThemeProvider>
    );
}