import { Route, Switch } from "react-router-dom";
import { NotFoundPage } from "../pages/notFound";
import { Routes } from "./routes";

export const AppRouter = () => {
    return (
        <Switch>
            {Routes.map(route => <Route key={route.path} {...route}/>)}
            <Route component={NotFoundPage}/>
        </Switch>
    );
};
