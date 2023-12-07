import React from "react";
import { Anime } from "../../Data";
import { useParams } from "react-router-dom";
import { MyTheme } from "../../CustomColor";
import { ThemeProvider } from "@emotion/react";
import { Container, Stack, Typography } from "@mui/material";
import { TransferData } from "../Home/Home";

export const Details = () => {
  const ID = useParams()
  console.log(TransferData)
    const currentData = TransferData.filter(animes => animes.rank === Number(ID.id))
    return (
      <ThemeProvider theme={MyTheme}>
        <Stack>
          <Container
            sx={{
              marginTop: "25px",
              marginBottom: "25px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              fontSize={"24px"}
              fontWeight={"500"}
              mb={"15px"}
              fontFamily={"Fira Code"}
            >
              {currentData[0].title}
            </Typography>
            <img
              width={"50%"}
              style={{ objectFit: "fit" }}
              src={currentData[0].images.jpg.image_url}
              alt="Problem At Our Service. Nothing To Panic!!"
            ></img>
            <Typography
              mr={"15px"}
              ml={"15px"}
              textAlign={"justify"}
              mt={"25px"}
              variant="p"
            >
              {currentData[0].synopsis}
            </Typography>
          </Container>
        </Stack>
      </ThemeProvider>
    );
}