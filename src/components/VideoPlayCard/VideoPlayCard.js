import React from "react";
import "./VideoPlayCard.css";
import { Card, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

export default function VideoPlayCard(props) {
  let [openBox, setOpenBox] = React.useState(false);

  return (
    <Card>
      <iframe
        src={"https://www.youtube.com/embed/" + props.videoId}
        frameborder="0"
        width={"100%"}
        className="videoPlayCard"
      ></iframe>
      {props.video.snippet ? (
        <CardContent>
          <div className="description-flex">
            <div>
              <Typography variant="h5"> {props.video.snippet.title}</Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "rgba(0,0,0,0.4)", marginBottom: "16px" }}
              >
                {props.video.snippet.channelTitle}
              </Typography>
            </div>
            <div></div>
          </div>

          <Typography
            variant="div"
            className={openBox ? "" : "overflow-hidden"}
            sx={{
              whiteSpace: "break-spaces",
            }}
          >
            {props.video.snippet.description}
          </Typography>
          <Button onClick={() => setOpenBox(!openBox)}>
            {openBox ? "Weniger anzeigen" : "Mehr ansehen"}
          </Button>
        </CardContent>
      ) : (
        ""
      )}
    </Card>
  );
}
