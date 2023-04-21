# EsBuild with Amplify

The following config needs to be setup to define `global` in order to successfully run Amplify with EsBuild

```js
// build.mjs
import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['index.jsx'],
  bundle: true,
  outfile: 'out.js',
  define: {
    "global": 'window',
  }
}).then(() => console.log('Done.'))
.catch(() => process.exit(1))
```