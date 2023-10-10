const { src, dest, series, watch } = require("gulp");
const concat = require("gulp-concat");
const htmlMin = require("gulp-htmlmin");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const svgSprite = require("gulp-svg-sprite");
const image = require("gulp-image");
const babel = require("gulp-babl");

const styles = () => {
  return src("src/styles/**/*.css")
    .pipe(concat("main.css"))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(dest("dist"));
};

const htmlMinify = () => {
  return src("src/**/*.html")
    .pipe(
      htmlMin({
        collapseWhitespace: true,
      })
    )
    .pipe(dest("dist"));
};

const svgSprites = () => {
  return src("src/**/*.svg")
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg",
          },
        },
      })
    )
    .pipe(dest("dist/img"));
};

const images = () => {
  return src([
    "src/img/**/*.jpg",
    "src/img/**/*.png",
    "src/img/*.svg",
    "src/img/**/*.jpeg",
  ])
    .pipe(image())
    .pipe(dest("dist/img"));
};

const scripts = () => {
  return src("src/**/*.js")
    .pipe(dest("dist"))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    );
};

const resources = () => {
  return src("src/resources/**").pipe(dest("dist/resources"));
};

const fonts = () => {
  return src("src/fonts/**").pipe(dest("dist/fonts"));
};

exports.styles = styles;
exports.htmlMinify = htmlMinify;

exports.default = series(
  styles,
  htmlMinify,
  images,
  svgSprites,
  scripts,
  resources,
  fonts
);
