const express = require('express');
const router = express.Router();

const cheerio = require('cheerio');
const request = require('request');

router.get('/', (req, res) => {
  let changesValues = [];
  let purchase, sale;
  request("https://uy.cotizacion-dolar.com/cotizacion-hoy-uruguay.php", (err, resp, body) => {
    if (!err && resp.statusCode == 200) {
      let $ = cheerio.load(body);
      $('[itemprop=itemListElement]', '.cotizacion-contenido').each(function () {
        purchase = $(this).find('.cc-2b .cotizacion-num').text().replace("$ ", "");
        sale = $(this).find('.cc-3b .cotizacion-num').text().replace("$ ", "");
        changesValues.push({
          initial: $(this).find('.cotizacion-billete').prop('content'),
          name: $(this).find('.cotizacion-billete b').text(),
          purchase: Number(purchase),
          sale: Number(sale)
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
