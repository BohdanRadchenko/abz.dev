import React from 'react';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Button } from "componetnts";
import { useScrollById } from "hooks";
import { EViewBlocks } from "constant";
import Banner360Img from 'assets/images/banner360.png'
import Banner768Img from 'assets/images/banner768.png'
import Banner1024Img from 'assets/images/banner1024.png'
import BannerImg from 'assets/images/banner.png'


export const Banner = () => {
  const handleClickRegister = useScrollById(EViewBlocks.REGISTRATION);
  return (
    <Box
      sx={theme => ( {
        height: 500,
        maxWidth: 1170,
        position: "relative",
        margin: "0 auto",
        [theme.breakpoints.up('md')]: {
          height: 650,
        }
      } )}
    >
      <picture className="banner">
        <source
          media="(max-width: 767px)"
          srcSet={Banner360Img}
        />
        <source
          media="(max-width: 1023px)"
          srcSet={Banner768Img}
        />
        <source
          media="(max-width: 1170px)"
          srcSet={Banner1024Img}
        />
        <img
          src={BannerImg}
          alt="banner"
        />
      </picture>
      <Stack
        spacing={4}
        alignItems="center"
        px={2}
        paddingTop={5}
        maxWidth="380px"
        margin="0 auto"
        height="100%"
        sx={theme => ( {
          [theme.breakpoints.up('sm')]: {
            padding: 0,
            justifyContent: "center",
          }
        } )}
      >
        <Stack spacing="21px">
          <Typography
            variant="title"
            color="white"
            align="center"
          >
            Test assignment for front-end developer
          </Typography>
          <Typography
            color="white"
            align="center"
          >
            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
            understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They
            should also be excited to learn, as the world of Front-End Development keeps evolving.
          </Typography>
        </Stack>
        <Box>
          <Button
            text="Sign up"
            onClick={handleClickRegister}
          />
        </Box>
      </Stack>
    </Box>
  );
};
