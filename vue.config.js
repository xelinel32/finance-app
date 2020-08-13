module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    port: 3000,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
}
