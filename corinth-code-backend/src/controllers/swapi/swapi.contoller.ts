import axios from "axios";
import { NextFunction, Request, RequestHandler, Response } from "express";
import { SwapiPerson } from "../../types/swapi/swapi-person";
import strings from './swapi.controller.strings';
const baseUrl = strings.baseUrl;

const getPeople: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    let uri = baseUrl + strings.apiRoutes.people;
    const search = req.query.search;
    if (search) {
        uri = uri + `?search=${search}`;
    }

    let people: SwapiPerson[] = [];
    let isMore = true;

    while (isMore === true) {
        await axios.get(uri)
        .then((response) => {
            people.push(...response.data.results);
            if (response.data.next) {
                isMore = true;
                uri = response.data.next;
            } else {
                isMore = false;
                return res.status(200).send({ results: people, query: search });
            }
        })
        .catch((error) => {
            isMore = false;
            return res.status(200).send({ error: error.message });
        });
    }
}

const getPerson: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    const url = req.query.url;
    if (!url) {
        return res.status(200).send({ 'error': 'Must include URL query parameter' });
    }
    await axios.get(`${url}`)
        .then((response) => {
            return res.status(200).send(response.data);
        })
        .catch((error) => {
            return res.status(200).send({ error: error.message });
        })
}

const getFilm: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    let url = req.query.url;
    if(!url) {
        return res.status(200).send({ 'error': 'Must include URL query parameter' });
    }
    await axios.get(`${url}`)
        .then((response) => {
            return res.status(200).send(response.data);
        })
        .catch((error) => {
            return res.status(200).send({ error: error.message });
        })

}

const getStarship: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    let url = req.query.url;
    if(!url) {
        return res.status(200).send({ 'error': 'Must include URL query parameter' });
    }
    await axios.get(`${url}`)
        .then((response) => {
            return res.status(200).send(response.data);
        })
        .catch((error) => {
            return res.status(200).send({ error: error.message });
        })

}

const getHomeworld: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    let url = req.query.url;
    if(!url) {
        return res.status(200).send({ 'error': 'Must include URL query parameter' });
    }
    await axios.get(`${url}`)
        .then((response) => {
            return res.status(200).send(response.data);
        })
        .catch((error) => {
            return res.status(200).send({ error: error.message });
        })

}

export { getPeople, getPerson, getFilm, getStarship, getHomeworld };