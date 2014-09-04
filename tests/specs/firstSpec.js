  describe('FirstDummyTest', function() {

    it('should work', function() {
      var done = true;
      var data = 1;

      waitsFor(function() { return done; });

      runs(function(){
        expect(data).not.toBe(null);
        expect(data).toEqual(1);
      });

    });

  });