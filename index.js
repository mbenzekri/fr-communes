import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import ImageLayer from 'ol/layer/Tile';
import { OSM, TileDebug, XYZ, Raster } from 'ol/source';

const mapcolor = new Map()
const xyz = new XYZ({
    url: 'https://mbenzekri.github.io/frcommunes/fr/communes/{z}/{x}/{y}.png',
    maxZoom: 12,
    minZoom: 5
})

const tilelayer = new TileLayer({
    source: xyz
})

const rastersource= new Raster({
    sources: [ xyz ],
    operation: function (pixels, data) { 
        pixels[0] = pixels[0] 
        pixels[1] = pixels[1] 
        pixels[2] = pixels[2] 
    }
})

const imagelayer = new ImageLayer({
    source: rastersource
})

var map = new Map({
    layers: [
        new TileLayer({
            source: new OSM()
        }),
        tilelayer, // when replaced by  tilelayer line 15 it's ok when replaced by imagelayer from line 28 it fails  
        new TileLayer({
            source: new TileDebug()
        }),
    ],
    target: 'map',
    view: new View({
        center: [260000, 6250000],
        zoom: 5
    })
})

