import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import MovieCreationRoundedIcon from "@mui/icons-material/MovieCreationRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LiveTvRoundedIcon from "@mui/icons-material/LiveTvRounded";
import { useNavigate } from "react-router-dom";
export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    // eslint-disable-next-line default-case
    switch (value) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/movies");
        break;
      case 2:
        navigate("series");
        break;
      case 3:
        navigate("/search");
        break;
    }
  }, [value]);

  return (
    <Box
      sx={{
        width: 500,
        position: "fixed",
        bottom: 0,
        backgroundColor: "#030C1A",
        zIndex: 100,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          width: '100%',
          position: "fixed",
          bottom: 0,
          backgroundColor: "#030C1A",
          backgroundImage:
            "background-image: linear-gradient(to right, #030c1a, #090715, #0b040d, #080105, #000000)",
          zIndex: 100,
          fontFamily: "inherit",
        }}
      >
        <BottomNavigationAction
          label="Trending"
          icon={<WhatshotRoundedIcon />}
          style={{ color: "rgba(249, 211, 180, 1)" }}
        />
        <BottomNavigationAction
          label="Movies"
          icon={<MovieCreationRoundedIcon />}
          style={{ color: "rgba(249, 211, 180, 1)" }}
        />
        <BottomNavigationAction
          label="TV Series"
          icon={<LiveTvRoundedIcon />}
          style={{ color: "rgba(249, 211, 180, 1)" }}
        />
        <BottomNavigationAction
          label="Search"
          icon={<SearchRoundedIcon />}
          style={{ color: "rgba(249, 211, 180, 1)" }}
        />
      </BottomNavigation>
    </Box>
  );
}
