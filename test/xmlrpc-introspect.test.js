define(['xmlrpc-introspect'],
function(introspect) {

  describe("xmlrpc-introspect", function() {
    
    it('shoud export service setup function', function() {
      expect(introspect).to.exist;
      expect(introspect).to.be.a('function');
    });
    
    describe("setup function", function() {
      var service = introspect();
      
      it('shoud return service object', function() {
        expect(service).to.be.an.instanceOf(Object);
      });
      
      it('shoud return service with listMethods function', function() {
        expect(service.listMethods).to.exist;
        expect(service.listMethods).to.be.a('function');
      });
      
      it('shoud return service with methodSignature function', function() {
        expect(service.methodSignature).to.exist;
        expect(service.methodSignature).to.be.a('function');
      });
      
      it('shoud return service with methodHelp function', function() {
        expect(service.methodHelp).to.exist;
        expect(service.methodHelp).to.be.a('function');
      });
    });
    
  });
  
  return { name: "test.xmlrpc-introspect" }
});
