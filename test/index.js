const assert=require('chai').assert;
const index=require('../index.js');

describe('index.js', ()=>{
    it('Adding two number', ()=>{
        const result= index.addNum(2,2);
        assert.equal(4,result);
    })
    it('Subtracting two number', ()=>{
        const result= index.subNum(2,2);
        assert.equal(0,result);
    })
    it('Multiplying two number', ()=>{
        const result= index.mulNum(2,2);
        assert.equal(4,result);
    })
})