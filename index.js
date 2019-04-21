module.exports = (babel, options = {}) => ({
  presets: [
    [
      require('@babel/preset-env'),
      {
        modules: false,
        useBuiltIns: 'usage',
        corejs: 3,
        ...options
      }
    ],
    require('@babel/preset-react')
  ],
  plugins: [
    require('@babel/plugin-syntax-dynamic-import')
  ]
})
