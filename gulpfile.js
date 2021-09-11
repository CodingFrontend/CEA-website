"use strict";

let gulp = require("gulp");
let plumber = require("gulp-plumber");
let sourcemap = require("gulp-sourcemaps");
let sass = require("gulp-sass");
let postcss = require("gulp-postcss");
let autoprefixer = require("autoprefixer");
let csso = require("gulp-csso");
let rename = require("gulp-rename");
let imagemin = require("gulp-imagemin");
let svgstore = require("gulp-svgstore");
let del = require("del");
let posthtml = require("gulp-posthtml");
let include = require("posthtml-include");
let server = require("browser-sync").create();
let babel = require('gulp-babel');
let webpack = require('webpack-stream');

const htmlPage = ["src/*.html", "src/**/*.html", "!src/html-const/**/*.html", "!src/html-const/*.html"];

const jsFileMin = ['src/js/main.js'];

const jsFileCopy = ["src/js/lib/**/*.js"];

let pathPublic = 'public/static/';
let pathPublicHTML = 'public/';

gulp.task("css", function () {
	return gulp
		.src("src/styles/template_styles.scss")
		.pipe(plumber())
		.pipe(sourcemap.init())
		.pipe(
			sass({
				includePaths: require("node-normalize-scss").includePaths
			})
		)
		.pipe(postcss([autoprefixer()]))
		.pipe(gulp.dest(pathPublic))
		.pipe(csso())
		.pipe(rename("main.min.css"))
		.pipe(sourcemap.write("."))
		.pipe(gulp.dest(pathPublic))
		.pipe(server.stream());
});

gulp.task("html", function () {
	return gulp
		.src(htmlPage)
		.pipe(posthtml([include()]))
		.pipe(gulp.dest(pathPublicHTML));
});

// переделать позже

gulp.task('jsmin', function () {
	return gulp.src(jsFileMin)
		.pipe(plumber())
		.pipe(sourcemap.init())
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(babel({
			presets: ['@babel/preset-env']
		}))
		.pipe(rename('main.js'))
		.pipe(sourcemap.write('.'))
		.pipe(gulp.dest(`${pathPublic}js/`))
		.pipe(server.stream());
});


gulp.task("jscopy", async function () {
	return gulp
		.src(jsFileCopy)
		.pipe(gulp.dest(`${pathPublic}js/lib/`));
});

gulp.task("images", function () {
	return gulp
		.src(["src/img/**/*.{png,jpg,webp,svg,ico}"])
		.pipe(
			imagemin([
				imagemin.optipng({ optimizationLevel: 3 }),
				imagemin.jpegtran({ progressive: true }),
				imagemin.svgo()
			])
		)
		.pipe(gulp.dest(`${pathPublic}img/`));
});

gulp.task("imagesFast", function () {
	return gulp
		.src(["src/img/**/*.{png,jpg,webp,svg,ico}"])
		.pipe(gulp.dest(`${pathPublic}img/`));
});

gulp.task("copy", function () {
	return gulp
		.src("src/**/*.{ttf,woff,woff2}")
		.pipe(gulp.dest(pathPublic));
});


gulp.task("copyIco", function () {
	return gulp
		.src("src/**/*.ico")
		.pipe(gulp.dest(pathPublicHTML));
});


gulp.task("sprite", function () {
	return (
		gulp
			.src("src/img/sprite/**/*.svg")
			.pipe(
				svgstore({
					inLineSvg: true,
					minify: false
				})
			)
			.pipe(rename("sprite.svg"))
			.pipe(gulp.dest(`${pathPublic}img/`))
	);
});

gulp.task("clean", function () {
	return del([
		"public/**",
		"public/*",
		"!public/",
		"!public/.git",
		"!public/.gitignore",
		"public/*.html",
		"compiled/**",
	]);
});

gulp.task("server", function () {
	server.init({
		server: "public/",
		notify: false,
		open: true,
		cors: true,
		ui: false
	});

	gulp.watch("src/styles/**/*.{scss,sass}", gulp.series("css", "refresh"));
	gulp.watch("src/**/*.html", gulp.series("html", "refresh"));
	gulp.watch("src/js/**/*.js", gulp.series("jsmin", "jscopy", "refresh"));
	gulp.watch("src/img/**/*.{png,jpg,svg}", gulp.series("imagesFast", "refresh"));
	gulp.watch("src/img/**/*.svg", gulp.series("sprite", "html", "refresh"));
});

gulp.task("refresh", function (done) {
	server.reload();
	done();
});


gulp.task("prodPath", function (done) {
	pathPublic = 'compiled/';
	pathPublicHTML = 'compiled/';
	done();
});

gulp.task(
	"start",
	gulp.series(
		"clean",
		"imagesFast",
		"sprite",
		"css",
		"copy",
		"jscopy",
		"jsmin",
		"html",
		"copyIco",
		"server"
	)
);

gulp.task(
	"build",
	gulp.series("clean", "images", "sprite", "css", "copy", "jscopy", "jsmin", "html", "copyIco")
);

gulp.task(
	"build-prod",
	gulp.series("clean", "prodPath", "images", "sprite", "css", "copy", "jscopy", "jsmin", "copyIco")
);
