/** @type {import("snowpack").SnowpackUserConfig } */
import rollupPluginNodePolyfills from 'rollup-plugin-node-polyfills';
export default {
  mount: {
    /* ... */
  },
  plugins: [
    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    polyfillNode: true,
    rollup: {
      plugins: [rollupPluginNodePolyfills({crypto: true, stream: true, buffer: true, process: true})],
    },
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
