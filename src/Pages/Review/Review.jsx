import { React } from "react";
import { useState, useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MyTheme } from "../../CustomColor";
import { Container, Stack, ThemeProvider, TextField, Alert} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import "./Review.css"

const Store = [
  {
    Name: "Alice",
    AnimeName: "Attack on Titan",
    Review:
      "A gripping story with intense action and deep characters. The plot twists keep you on the edge of your seat.",
  },
  {
    Name: "Bob",
    AnimeName: "Naruto",
    Review:
      "An epic journey of a young ninja. The character development and fight scenes are legendary.",
  },
  {
    Name: "Charlie",
    AnimeName: "One Piece",
    Review:
      "A fantastic adventure with a diverse cast and a world full of mysteries. The humor and camaraderie are top-notch.",
  },
  {
    Name: "Diana",
    AnimeName: "My Hero Academia",
    Review:
      "A fresh take on the superhero genre with unique powers and engaging storylines. The character arcs are well-developed.",
  },

];


export const Review = () => {
    return (
      <div className="flex flex-wrap gap-4 p-4 flex-center justify-around">
        {Store.map((review, index) => (
          <div
            key={index}
            className="w-full sm:w-80 md:w-72 lg:w-60 bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
          >
            <h2
              className="text-xl font-semibold text-gray-800 mb-2 truncate"
              style={{ fontFamily: "Fira Code" }}
            >
              {review.Name}
            </h2>
            <h3
              className="text-lg font-bold text-gray-600 mb-2 truncate"
              style={{ fontFamily: "Fira Code" }}
            >
              {review.AnimeName}
            </h3>
            <p
              className="text-sm text-gray-700"
              style={{ fontFamily: "Fira Code" }}
            >
              {review.Review.length > 200
                ? review.Review.substring(0, 200) + "..."
                : review.Review}
            </p>
          </div>
        ))}
      </div>
    );
}


export const ReviewPage = () => {

    const nameRef = useRef(null);
    const animenameRef = useRef(null);
    const reviewRef = useRef(null);

    const [modal, setModal] = useState(false)
  
  const SubmitHandler = (event) => {
    event.preventDefault()
    Store.unshift({
      Name: nameRef.current.value,
      AnimeName: animenameRef.current.value,
      Review: reviewRef.current.value,
    });
    setModal(true)
    setTimeout(() => {setModal(prev => !prev)},3000)
  }

    return (
      <Stack mt={"15px"} mb={"15px"}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {modal && (
            <Alert sx={{ maxWidth : "300px" }} severity="success">
              Your review has been posted successfully !!
            </Alert>
          )}
        </Container>
        <form
          onSubmit={(event) => {
            SubmitHandler(event);
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              className="ReviewText"
              label="Name"
              variant="outlined"
              inputRef={nameRef}
              sx={{
                width: "300px",
                display: "flex",
                marginBottom: "10px",
                marginTop: "10px",
                fontFamily: "Fira Code",
              }}
            />
            <TextField
              label="Anime Name"
              variant="outlined"
              inputRef={animenameRef}
              sx={{
                width: "300px",
                display: "flex",
                marginBottom: "10px",
                marginTop: "10px",
                fontFamily: "Fira Code",
              }}
            />
            <textarea
              placeholder="Share Your Review Here"
              ref={reviewRef}
              style={{
                width: "292px",
                marginBottom: "15px",
                marginTop: "15px",
                height: "150px",
                fontFamily: "Fira Code",
              }}
            ></textarea>
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              endIcon={<SendIcon />}
            >
              {" "}
              Post{" "}
            </Button>
          </Container>
        </form>
      </Stack>
    );
}