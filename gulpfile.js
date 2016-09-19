var gulp = require('gulp');
var sftp = require('gulp-sftp');

gulp.task('default', function () {
    return gulp.src('build/**/*')
        .pipe(sftp({
            host: 'tahosalodge.org',
            user: 'tahosalodge',
			remotePath: '/srv/users/tahosalodge/apps/dueschecker/public'
        }));
});
