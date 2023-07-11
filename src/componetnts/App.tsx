import React, { useEffect } from 'react';
import { Banner, Header } from "modules";
import { Users } from "../modules/Users/Users";
import { useStores } from "../hooks";

export const App = () => {
  const { rootStore: { positionStore: { getPositions } } } = useStores();

  useEffect(() => {
    getPositions();
  }, [getPositions]);

  return (
    <>
      <Header/>
      <Banner/>
      <Users/>
    </>
  )
}
