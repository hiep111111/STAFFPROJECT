import UserRouter from "./UserRoute.js";

const routes = (app) => {
    app.use('/Auth',UserRouter );
}

export default routes;