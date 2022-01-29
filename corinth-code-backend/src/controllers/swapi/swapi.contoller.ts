import axios from "axios";
import { NextFunction, Request, RequestHandler, Response } from "express";
import strings from './swapit.controller.strings';
const baseUrl = strings.baseUrl;

const getPeople: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    let uri = baseUrl + strings.apiRoutes.people;
    const search = req.query.search;
    if (search) {
        uri = uri + `?search=${search}`;
    }
   
    await axios.get(uri)
        .then((response) => {
            return res.status(200).send({'results': response.data });
        })
        .catch((error) => {
            return res.status(200).send({ 'error': error.message });
        });
}

const getPerson: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    const url = req.query.url;
    await axios.get(`${url}`)
        .then((response) => {
            return res.status(200).send({ 'results': response.data });
        })
        .catch((error) => {
            return res.status(200).send({ 'error': error.message });
        })
}

export { getPeople, getPerson };