let mix = require('laravel-mix').mix;

mix.js('public/assets/js/app.js', 'public/dist/js')
    .sass('public/assets/sass/app.scss', 'public/dist/css');

