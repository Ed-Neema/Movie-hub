import React from "react";
import { img_300, unavailable } from "../../config/config";
import Badge from "@mui/material/Badge";
import "./SingleContent.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ContentModal from "../ContentModal/ContentModal";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ae947e",
    },
    secondary: {
      main: "#053e85",
    },
  },
});

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
