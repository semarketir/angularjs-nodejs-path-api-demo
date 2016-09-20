import path from 'path';

const NODE_MODULES = path.join(__dirname, '../node_modules');
const DIST = path.join(__dirname, '../dist');
const SRC = path.join(__dirname, '../src');
const STATIC = path.join(__dirname, '../static');

export default {
    NODE_MODULES,
    DIST: {
        BASE: DIST,
        CSS: `${DIST}/css`,
        IMG: `${DIST}/img`
    },
    SRC,
    JS: `${SRC}/**/*.js`,
    IMAGE: `${STATIC}/img/**/*`,
    CSS: `${STATIC}/css/**/*.css`,
    TEMPLATE: `${SRC}/components/**/*.html`,
    HTML: `${SRC}/index.html`
};
