import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['index.jsx'],
  bundle: true,
  outfile: 'out.js',
  define: {
    "global": 'window',
  }
}).then(() => console.log('done!'))
.catch(() => process.exit(1))