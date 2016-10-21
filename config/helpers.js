var path = require('path');
var zlib = require('zlib');
var ROOT = path.resolve(__dirname, '..');

// Helper functions

function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

function gzipMaxLevel(buffer, callback) {
  return zlib['gzip'](buffer, {level: 9}, callback);
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(args));
}

function rootNode(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return root.apply(path, ['node_modules'].concat(args));
}

function prependExt(extensions, args) {
  args = args || [];
  if (!Array.isArray(args)) { args = [args] }
  return extensions.reduce(function(memo, val) {
    return memo.concat(val, args.map(function(prefix) {
      return prefix + val;
    }));
  }, ['']);
}

function isWebpackDevServer() {
  return process.argv[1] && !! (/webpack-dev-server/.exec(process.argv[1]));
}

exports.hasProcessFlag = hasProcessFlag;
exports.gzipMaxLevel = gzipMaxLevel;
exports.root = root;
exports.rootNode = rootNode;
exports.prependExt = prependExt;
exports.prepend = prependExt;
exports.isWebpackDevServer = isWebpackDevServer;
