import React from 'react';
import { observer } from "mobx-react";
import { UserCard } from "componetnts";
import { useStores } from "hooks";

export const UsersList = observer(() => {
  const { rootStore: { positionStore: { positions } } } = useStores();
  console.log('positions', positions);
  return (
    <div>
      <UserCard
        photo="https://frontend-test-assignment-api.abz.agency/images/users/64ad6da0180ad17433.jpeg"
        name="Takamaru Ayako Jurrien"
        mail="Leading specialist of the department long value"
        phone="+380934583571"
      />
    </div>
  )

});
