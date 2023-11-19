import * as React from "react";
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

export const Review = () => {
    return (
      <ThemeProvider theme={MyTheme}>
        <Container>
          <Stack direction={"row"} alignItems={"center"}>
            <Typography
              fontSize={'24px'}
              fontWeight={'500'}
              fontFamily={"Fira Code"}
              mt={"15px"}
              mb={"15px"}
            >
              Reviews
            </Typography>
            <Link to={"/addreview"}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<AddIcon />}
                size="small"
                sx={{ height: "30px", marginLeft: "60px" }}
              >
                Add a review
              </Button>
            </Link>
          </Stack>

          <Stack
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "3rem",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            {Store.map((info) => {
              return (
                <Card sx={{ width: "250px" }}>
                  <CardContent sx={{ backgroundColor: "info.light" }}>
                    <Typography
                      mb={"5px"}
                      variant="h6"
                      component="div"
                      fontFamily={"Fira Code"}
                      borderBottom={"1px solid #333333"}
                    >
                      {info.Name}
                    </Typography>
                    <Typography
                      variant="body1"
                      margin={'0px'}
                      lineHeight={'16px'}
                      height={"50px"}
                      fontFamily={"Fira Code"}
                      color={"text.dark"}
                      fontWeight={"500"}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      {info.AnimeName}
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                      height={"50px"}
                      variant="body2"
                      fontFamily={"Fira Code"}
                    >
                      {info.Review.length <= 50
                        ? info.Review
                        : info.Review.substring(0, 50) + "..."}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </Stack>
        </Container>
      </ThemeProvider>
    );
}

const Store = [
  {Name : 'John', AnimeName : 'Chainsaw man', Review : 'Nice work!!, but there is some problem'},
  { Name: 'Vanamuthu V', AnimeName: 'The Devil Is A Parttimer', Review: 'A Awesome thinking and no lag in story line. Enjoyed a lot!!' },
]

export const ReviewPage = () => {

    const nameRef = React.useRef(null);
    const animenameRef = React.useRef(null);
    const reviewRef = React.useRef(null);

    const [modal, setModal] = React.useState(false)
  
  const SubmitHandler = (event) => {
    event.preventDefault()
    Store.push({
      Name: nameRef.current.value,
      AnimeName: animenameRef.current.value,
      Review: reviewRef.current.value,
    });
    setModal(true)
    setTimeout(() => {setModal(prev => !prev)},2000)
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