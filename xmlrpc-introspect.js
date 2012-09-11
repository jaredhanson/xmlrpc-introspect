define(['exports', 'module'],
function(exports, module) {

  exports = module.exports = function(caps) {
  
    var service = new Object();
    service.listMethods = function(result) {
      return result(null, null);
    }
    
    service.methodSignature = function(result) {
      return result(null, null);
    }
    
    service.methodHelp = function(result) {
      return result(null, null);
    }
    
    return service;
  }
});

