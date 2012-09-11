require.config({
  paths:{
    'xmlrpc-introspect': '../../',
    'mocha': '../vendor/mocha/mocha',
    'chai': '../vendor/chai/chai',
    'phantomjs-mocha': '../vendor/phantomjs-mocha'
  }
});

require(['require',
         'mocha',
         'chai',
         'phantomjs-mocha/reporter'],
function(require, _mocha, _chai, Reporter) {
  mocha.setup({ ui: 'bdd', reporter: Reporter });
  
  require(['../suite'],
  function() {
    mocha.run();
  });
});
