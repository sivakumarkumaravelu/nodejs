// in TDD , first write test code
//npm install chai --save-dev
var chai = require('chai');
var expect = require('chai').expect;
var word = require('./index');

describe('sanitize', ()=> {

    //hooks
    console.log('hooks');
    beforeEach(()=> {
        console.log('before each test');
    });

    before(()=> {
        console.log('before all tests')
    })

    after(()=> {
        console.log('after all tests');
    })

    it('testing expects', ()=> {
        var inputWord = 'Hello World';
        var outputWord = word.sanitize(inputWord);
        expect(outputWord).to.equal('hello world');
    });
});
//> mocha indexspec.js