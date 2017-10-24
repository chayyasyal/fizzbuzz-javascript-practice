describe('FizzBuzz', function(){
  debugger;
  var fizzbuzz;
  describe('knows when a number is NOT', function(){
    it('divisible by 3', function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });
  });

});
