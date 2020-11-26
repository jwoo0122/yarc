import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'out',
    format: 'esm',
  },
  plugins: [
    typescript(),
  ],
}
