## AngularJS - NodeJS - Path API - Demo
This is just a sample app to play with:

1. [Path API](https://api.path.com/developers)
2. [NodeJS v.4.x.x](https://nodejs.org/en)
3. [AngularJS v.1.x.x](https://angularjs.org/)
4. [Satellizer v.0.15.5](https://github.com/sahat/satellizer)
Satellizer is a token-based authentication module for AngularJS with built-in support for OAuth Provider

The demo app is a web application ( - Displaying a list of songs from [BBC Radio](http://www.bbc.co.uk/radio1) - ) where users ( signing in using their [Path](https://path.com) accounts ) can post a `Photo Moment` to [Path](https://path.com) platform with Cover album as a photo and Title & Artist name as caption.

#### Folder structures information
```sh
<root-folder>
├── config.js ( Common file )
├── gulpfile.babel.js
├── src
│   ├── components
│   │   ├── component1
│   │   │   ├── component1Controller.js
│   │   │   ├── Component1Directive.js
│   │   │   ├── Component1Service.js
│   │   │   ├── component1.html
│   │   │   └── component1.js
│   │   └── ...
│   ├── config.js ( Angular App Config )
│   ├── index.html ( Base HTML file )
│   └── index.js ( Angular Boot )
├── static
│   ├── css
│   │   ├── component1.css
│   │   └── ... *.css
│   └── img
│       └── *.png
└── support
    ├── path.js
    ├── server ( You should to create your own server, this is just an example )
    │   ├── config.js
    │   ├── express.js
    │   ├── router.js
    │   └── routers
    │       ├── auth.js
    │       ├── moment.js
    │       └── playlist.js
    └── webpack.js ( Webpack config )
```

## Register Application
Link can be found at [https://api.path.com/developers/app/new](https://api.path.com/developers/app/new)

## Installation
The demo app is using NodeJS and NPM, please make sure if NodeJS and NPM have already been installed in your environment.

#### 1. Enter to project directory
``$ cd angularjs-nodejs-path-api-demo``

#### 2. Install (Dev)Dependencies
``$ npm install``

#### 3. Set your Client ID & Client Secret in config files.
**Client ID**
```sh
<root-folder>
├── config.js ( Set your client id in this file )
└── ...
```
**Client Secret**
```sh
<root-folder>
└── support
    ├── server
    │   ├── config.js ( Set your client secret in this file )
    │   └── ...
    └── ...
```

#### 4. Build & Run
``$ npm start``
> The default task will build and run a temporary Server to handle request for records or information.

Then visit [http://localhost:3000](http://localhost:3000)

## License
![image](https://cloud.githubusercontent.com/assets/1286932/18624796/77c317e6-7e74-11e6-974c-12dc6d5ae663.png)
