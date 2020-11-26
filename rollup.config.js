import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'out',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    external(),
    resolve(),
    typescript({
      tsconfig: 'tsconfig.json',
    }),
  ],
}
