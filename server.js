import 'zone.js/dist/zone-node';
import 'reflect-metadata';

// DOM libs required for Firebase

import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import { join } from 'path';

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');
const APP_NAME = 'resume-builder';

const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP
} = require(`./dist/${APP_NAME}-server/main`);

enableProdMode();

const app = express();

// Set the engine
app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)]
  })
);


// app.get('/**/*', (req, res) => {
//   res.render(join(DIST_FOLDER, APP_NAME, 'index'), {
//     req,
//     res
//   });
// });

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, APP_NAME));

// Static Assets
app.get('*.*', express.static(join(DIST_FOLDER, APP_NAME)));

// Point all routes to Universal
app.get('/', (req, res) => {
  res.render('index', {req});
});
app.get('/login', (req, res) => {
  res.render('index', {req});
});
app.get('/get-started', (req, res) => {
  res.render('index', {req});
});
app.get('/contact-us', (req, res) => {
  res.render('index', {req});
});
app.get('/about-us', (req, res) => {
  res.render('index', {req});
});
app.get('/user/*', (req, res) => {
  res.sendFile(join(DIST_FOLDER, APP_NAME, 'index.html'));
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
