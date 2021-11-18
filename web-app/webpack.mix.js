let mix = require('laravel-mix');

mix.js('src/main.js', 'public/js')
   .sass('src/sass/style.scss', 'public/css')
   .browserSync('http://laravel-vue-example.local/');
