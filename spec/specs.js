describe('palindrome', function() {
    it("returns true if the input reads the same forward as backward", function() {
        expect(palindrome('mom')).to.equal(true);
    });

    it("returns false if the inputs does not read the same forward as backward", function() {
        expect(palindrome('hello')).to.equal(false);
    });

});
