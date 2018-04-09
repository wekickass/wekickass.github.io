module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-for'),
    require('postcss-each'),
    require('postcss-css-variables'),
    require('postcss-conditionals'),
    require('postcss-calc'),
    require('postcss-nesting'),
    require('autoprefixer')
  ]
}
