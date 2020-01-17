const express = require('express');
const router = express.Router();

const cheerio = require('cheerio');
const request = require('request');

router.get('/', (req, res) => {
    let changesValues = [];
    request("https://uy.cotizacion-dolar.com/cotizacion-hoy-uruguay.php", (err, resp, body) => {
        if (!err && resp.statusCode == 200) {
            let $ = cheerio.load(body);
            $('[itemprop=itemListElement]', '.cotizacion-contenido').each(function () {
                changesValues.push({
                    initial: $(this).find('.cotizacion-billete').prop('content'),
                    name: $(this).find('.cotizacion-billete b').text(),
                    purchase: Number($(this).find('.cc-2b .cotizacion-num').text()),
                    sale: Number($(this).find('.cc-3b .cotizacion-num').text())
                });
            });
        }
        res.json({
            status: resp.statusCode || 404,
            changesValues: changesValues
        });
    });
});

module.exports = router;