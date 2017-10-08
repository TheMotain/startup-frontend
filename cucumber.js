common = '--require features';

module.exports = {
    build: common + ' --format progress',
    'default': common,
    'es5': '--tags ~@es6'
};