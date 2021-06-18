import Map from '../src/ol/Map.js';
import OSM from '../src/ol/source/OSM.js';
import TileLayer from '../src/ol/layer/Tile.js';
import View from '../src/ol/View.js';
import {OverviewMap, defaults as defaultControls} from '../src/ol/control.js';

const source = new OSM();
const overviewMapControl = new OverviewMap({
  layers: [
    new TileLayer({
      source: source,
    }),
  ],
});

const map = new Map({
  controls: defaultControls().extend([overviewMapControl]),
  layers: [
    new TileLayer({
      source: source,
    }),
  ],
  target: 'map',
  view: new View({
    center: [500000, 6000000],
    zoom: 7,
  }),
});
