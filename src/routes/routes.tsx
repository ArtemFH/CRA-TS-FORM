import {IndexPage, SignInPage, SignUpPage} from "./pages";
import {LayoutUi, UserUi} from "./components";
import {RouteObject} from "react-router-dom";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <LayoutUi/>,
        children: [
            {
                path: "",
                element: <IndexPage/>
            }
        ]
    },
    {
        path: "user",
        element: <UserUi/>,
        children: [
            {
                path: "sign-in",
                element: <SignInPage/>
            }, {
                path: "sign-up",
                element: <SignUpPage/>
            }
        ]
    }
]