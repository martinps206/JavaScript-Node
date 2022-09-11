import * as countryService from "../services/country.service.js"

export const getCountries = (req, res) =>{
    /* res.send('countries'); */
    countryService.getCountries()
    .then((result) => {
        res.status(200).json({
            message: "Countries retrieved successfully",
            data: result[0],
        });
    }).catch((err) => {
        res.status(500).send(err)
    })
};

export const getCountry = (req, res) => {
    const { id } = req.params;
    countryService
    .getCountry(id)
    .then((result) => {
        res.status(200).json({
            message: "Country retrieved successfully",
            data: result[0],
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};

export const createCountry = (req, res) => {
    const country = req.body;
    countryService
    .createCountry(country)
    .then(() => {
        res.status(200).json({
        message: "Country created successfully",
        data: country,
        });
    })
        .catch((err) => {
        res.status(500).send(err);
        });
};

export const updateCountry = (req, res) => {
    const country = req.body;
    const { id } = req.params;
    countryService
        .updateCountry(id, country)
        .then(() => {
        res.status(200).json({
            message: "Country updated successfully",
            data: country,
            });
        })
        .catch((err) => {
        res.status(500).send(err);
        });
};

export const deleteCountry = (req, res) => {
    const { id } = req.params;
    countryService
    .deleteCountry(id)
    .then(() => {
        res.status(200).json({
            message: "Country deleted successfully"
            });
        })
    .catch((err) => {
        res.status(500).send(err);
        });
};