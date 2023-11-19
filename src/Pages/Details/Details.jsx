import React from "react";
import { Anime } from "../../Data";
import { useParams } from "react-router-dom";
import { MyTheme } from "../../CustomColor";
import { ThemeProvider } from "@emotion/react";

export const Details = () => {
    const ID = useParams()
    const currentData = Anime.filter(animes => animes.id === Number(ID.id))
    return (
        <ThemeProvider theme={MyTheme}>
            
        </ThemeProvider>
    )
}