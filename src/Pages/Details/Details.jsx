import React from "react";
import { Anime } from "../../Data";
import { useParams } from "react-router-dom";
import { MyTheme } from "../../CustomColor";
import { ThemeProvider } from "@emotion/react";
import { Container, Stack, Typography } from "@mui/material";

export const Details = () => {
    const ID = useParams()
    const currentData = Anime.filter(animes => animes.id === Number(ID.id))
    return (
      <ThemeProvider theme={MyTheme}>
        <Stack>
                <Container sx={{ marginTop: '25px', marginBottom: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography fontSize={'24px'} fontWeight={'500'} mb={'15px'}fontFamily={'Fira Code'} >
                        {currentData[0].Name}
                    </Typography>
                    <img
                width={'50%'}
              style={{ objectFit: "fit"}}
              src={currentData[0].url}
              alt={currentData[0].Name}
                    ></img>
                    <Typography mr={'15px'} ml={'15px'} textAlign={'justify'} mt={'25px'} variant="p">
                        {currentData[0].info}
                    </Typography>
          </Container>
        </Stack>
      </ThemeProvider>
    );
}