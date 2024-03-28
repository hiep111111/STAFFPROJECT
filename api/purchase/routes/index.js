import purchaseRequestRouter from './purchaseRequestRoute.js'
import purchaseOrderRouter from './purchaseOrderRoute.js'

const routes = (app) => {
    app.use('/purchase/request',purchaseRequestRouter );
    app.use('/purchase/order', purchaseOrderRouter );
}

export default routes;