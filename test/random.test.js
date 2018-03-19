describe('Random API:', function() {
    describe('#getRandomColor()', function() {
        it(`/^#[0-9a-fA-F]$/.test(bftools.getRandomColor()) should return true`, function() {
            assert(/^#[0-9a-fA-F]{6}$/.test(bftools.getRandomColor()))
        });
    });

    describe('#getRandomNum()', function() {
        it(`10 <= bftools.getRandomNum(10, 1000) <= 100 should return true`, function() {
            let num = bftools.getRandomNum(10, 1000)
            assert(num <= 1000 && num > 10)
        });
    });
})