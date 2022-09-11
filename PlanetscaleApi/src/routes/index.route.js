import { Router } from 'express';

import countryRouter from "./country.route.js"

const indexRouter = Router();

const prefix = "/api";

indexRouter.get(prefix, (req, res) => {
    res.send("Welcome planetscale API")
});

/* indexRouter.get(`${prefix}/country`, (req, res) => {
    res.send('countries')
}) */

indexRouter.use(`${prefix}/country`, countryRouter)

export default indexRouter;
