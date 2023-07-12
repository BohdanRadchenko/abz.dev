import React, { useEffect } from 'react';
import Container from "@mui/material/Container";
import { useIsInViewport, useStores } from "hooks";
import { EViewBlocks } from "constant";
import { RegistrationSuccessBlock } from "./RegistrationSuccessBlock";
import { RegistrationFormBlock } from "./RegistrationFormBlock";

export const Registration = () => {
  const {
    rootStore: {
      positionStore: {
        getPositions,
        positionsMap,
        isLoadingPositions,
      }
    }
  } = useStores();

  const { ref, value: isInViewport } = useIsInViewport();

  useEffect(() => {
    if ( !isInViewport || isLoadingPositions || !!positionsMap.size ) return;
    getPositions();
  }, [isInViewport, getPositions, isLoadingPositions, positionsMap]);


  return (
    <Container
      id={EViewBlocks.REGISTRATION}
      ref={ref}
      sx={{
        mt: 17.5,
        mb: 12.5,
      }}
    >
      <RegistrationFormBlock/>
      {/*<RegistrationSuccessBlock/>*/}
    </Container>
  );
};
