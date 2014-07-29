es = require "ecstatic"
http = require "http"
gulp = require "gulp"
jade = require "gulp-jade"
stylus = require "gulp-stylus"
coffee = require "gulp-coffee"
reload = require "gulp-livereload"
prefix = require "gulp-autoprefixer"

paths =
  dest: "./app"

gulp.task "stylus", ->
  gulp.src "./src/**/*.styl"
    .pipe stylus()
    .pipe prefix()
    .pipe gulp.dest paths.dest
    .pipe reload()

gulp.task "jade", ->
  gulp.src "./src/**/index.jade"
    .pipe jade()
    .pipe gulp.dest paths.dest
    .pipe reload()

gulp.task "coffee", ->
  gulp.src "./src/**/*.coffee"
    .pipe coffee()
    .pipe gulp.dest paths.dest
    .pipe reload()

gulp.task "copy", ->
  gulp.src ["./src/**/*", "!./src/**/*.jade", "!./src/**/*.styl", "!./src/**/*.coffee"]
    .pipe gulp.dest paths.dest
    .pipe reload()


gulp.task "server", (done) ->
  port = 5001
  server = http.createServer es root: "./app/"
  server.listen port, done


gulp.task "watch", ->
  gulp.watch ["./src/**/*.styl"], ["stylus"]
  gulp.watch ["./**/*.jade"], ["jade"]
  gulp.watch ["./**/*.coffee"], ["coffee"]
  gulp.watch ["./src/**/*", "!./src/*.jade", "!./src/*.styl", "!./src/*.coffee"], ["copy"]

gulp.task "default", ["server", "stylus", "jade", "coffee", "copy", "watch"]
