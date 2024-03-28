import StaffRouter from "./purchaseRequestRoute.js";

const routes = (app) => {
    app.use('/Staff',StaffRouter );
}

export default routes;