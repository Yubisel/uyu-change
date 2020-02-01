const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.json({
        status: 200,
        changesValues: 'asd'
    });
});

router.get('/json', (req, res) => {

    var isoCurrencies = require('../../data/iso.currencies.json');

    // let tmpCountriesKeys = Object.keys(isoCountries);
    let tmpCurrenciesKeys = Object.keys(isoCurrencies);

    let tmp = {};

    for (const keyCur of tmpCurrenciesKeys) {
        tmp[keyCur] = {
            "code": isoCurrencies[keyCur].code,
            "numeric": isoCurrencies[keyCur].numeric,
            "nameEn": isoCurrencies[keyCur].nameEn,
            "nameEs": isoCurrencies[keyCur].nameEs,
            "countries": isoCurrencies[keyCur].cont,
            "symbol": isoCurrencies[keyCur].symbol
        };
    }

    res.json({
        status: 0,
        tmp: tmp
    });
});

module.exports = router;