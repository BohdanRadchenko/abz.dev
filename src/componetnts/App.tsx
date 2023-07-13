import React, { lazy, Suspense } from 'react';
import { Loader } from 'componetnts';

const HeaderLazy = lazy(() => import('modules/Header'));
const BannerLazy = lazy(() => import('modules/Banner'));
const UsersLazy = lazy(() => import('modules/Users'));
const RegistrationLazy = lazy(() => import('modules/Registration'));

export const App = () => {
  return (
    <Suspense fallback={<Loader loading/>}>
      <HeaderLazy/>
      <BannerLazy/>
      <UsersLazy/>
      <RegistrationLazy/>
    </Suspense>
  )
}
