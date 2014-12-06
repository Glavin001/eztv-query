var assert = require("assert")
var eztvQuery = require('../lib/');

describe('Searching', function() {
  describe('#query()', function() {
    
    it('should return a single episode', function(done) {
      this.timeout(10000);

      eztvQuery('house of cards season 2 episode 5', function(err, episode) {
        // console.log(err, episode);
        if (err) throw err;
        done();
      });

    });

    it('should return an array containing a single episode', function(done) {
      this.timeout(10000);

      eztvQuery('house of cards season 2 episode 5',
      { 
        returnAll: true
      }, function(err, episodes) {
        // console.log(err, episodes.length, episodes);
        if (err) throw err;
        assert.equal(1, episodes.length);
        done();
      });

    });


    it('should return multiple episodes for a season', function(done) {
      this.timeout(10000);

      eztvQuery('house of cards season 2', 
        { 
          returnAll: true 
        }, 
        function(err, episodes) {
          // console.log(err, episodes.length, episodes);
          if (err) throw err;
          assert.equal(true, episodes.length > 0);
          done();
      });

    });

  });
});