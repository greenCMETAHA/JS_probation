module( "Qunit Boilerplate", {
  setup: function() {
    // prepare something for all following tests
  },
  teardown: function() {
    // clean up after each test
  }
});

test('test for functions "s"', function() {
    var s=sum();

    expect(5);
    ok(s==0, 's must be 0. True');

    ok(s(1)==1, 's(1) must be 1. True');

    ok(s(1)(2)==3, 's(1)(2) must be 3. True');

    ok(s(3)(4)(5)==12, 's(3)(4)(5) must be 12. True');

    ok(s(3)(4)(5)(-1)==11, 's(3)(4)(5) (-1) must be 11. True');

    //ok(s(3)(4)(5)(-1)==5, 's(3)(4)(5) (-1) can\'t be 5. False');  //wrong test

});

