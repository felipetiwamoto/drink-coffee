let gulp = require("gulp");
let gulpSass = require("gulp-sass");

function sass() {
    return gulp.src("./src/assets/sass/**/*.scss")
        .pipe(gulpSass())
        .pipe(gulp.dest("./src/assets/css"));
}

gulp.task("sass", () => {
    gulp.watch("./src/assets/sass/**/*.scss", sass);
})