var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors');

var bears = [
    {   id: '1', name: 'Poon'   },
    {   id: '2', name: 'Tor'    },
    {   id: '3', name: 'JJ'     }
];

var last_bear_id = 4;
router.route('/bears')
    .get(function (req, res) {
        res.send(bears);
    })
    .post(function (req, res) {
        var bear = {};
        bear.name = req.body.name;
        bear.id = '' + (last_bear_id++);
        bears.push(bear);
        res.json({ message: 'Bear created!' });
    })

router.route('/bears/:id')
    .delete(function (req, res) {
        bears = bears.filter(b => b.id !== req.params.id)
        res.json({ message: 'Bear deleted!' })
    });

app.use(cors());
// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);
app.listen(8000);