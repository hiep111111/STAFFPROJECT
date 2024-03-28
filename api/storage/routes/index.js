import stockAdvaneRouter from "./stockAdvaneRoute.js";
import stockReturnRouter from "./stockReturnRoute.js";

const routes = (app) => {
    app.use('/stock/advantage',stockAdvaneRouter );
    app.use('/stock/return', stockReturnRouter );
}

export default routes;