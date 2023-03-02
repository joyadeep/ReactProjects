import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import PaidCard from "../components/PaidCard";
import TopList from "../components/TopList";
import Trending from "../components/Trending";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Overview = () => {
  // SwiperCore.use([Autoplay,Pagination])
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={40}
            slidesPerView={1}
          >
            {[1, 2, 3, 4].map((index) => (
              <SwiperSlide key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    overflow: "hidden",
                    height: "300px",
                    background:
                      "url('https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                    backgroundSize: "cover",
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      height: "100px",
                      alignItems: "center",
                      px: 3,
                      justifyContent: "space-between",
                      background: "rgba( 0,0,0 , 0.2 )",
                      backdropFilter: "blur( 10px )",
                    }}
                  >
                    <Box>
                      <Button sx={{ p: 0 }}>
                        <Typography variant="caption" sx={{ color: "#70B8FF" }}>
                          Graphics and design
                        </Typography>
                      </Button>
                      <Typography variant="h6" sx={{ color: "white" }}>
                        Super Mario : Bros
                      </Typography>
                      <Typography variant="body2" sx={{ color: "white" }}>
                        Save the world from evil with Mario Bros
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      disableElevation
                      size="small"
                      sx={{
                        bgcolor: "#419cff",
                        textTransform: "none",
                        borderRadius: "20px",
                        px: 3,
                        fontSize: "16px",
                        fontWeight: "500",
                        letterSpacing: "0",
                      }}
                    >
                      Download
                    </Button>
                  </Box>
                </Paper>
              </SwiperSlide>
            ))}
          </Swiper>
          <TopList />
        </Grid>
        <Grid item xs={4}>
          <Trending />
          <PaidCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
