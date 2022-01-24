import {FC, lazy} from "react";

const Loader = (Component: FC) => (props: any) => (
    <Component {...props} />
);

export const IndexPage = Loader(lazy(() => import('../pages/IndexPage')));
export const SignInPage = Loader(lazy(() => import('../pages/user/SignInPage')));
export const SignUpPage = Loader(lazy(() => import('../pages/user/SignUpPage')));