const expect = require('chai').expect;
const binarySearch = require('../algorithms/binarySearch').binarySearch;

describe('binarySearch', () => {
  it('should be a function', () => {
    expect(binarySearch).to.be.a('function');
  });
  
  it('should return a number', () => {
    const binarySearchTest = binarySearch([1], 1);
    expect(binarySearchTest).to.be.number;
  });
  
  it('should return -1 when nothing is found', () => {
    const binarySearchTester = binarySearch([1, 2, 4], 5);
    expect(binarySearchTester).to.equal(-1);
  });
  
  it('should return the right number when number is found', () => {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    const binarySearchTester2 = binarySearch(primes, 67);
    expect(binarySearchTester2).to.equal(18);
    const primes2 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    const binarySearchTester3= binarySearch(primes, 73);
    expect(binarySearchTester3).to.equal(20);
  });
  
  it('should work for a large data set', () => {
    const bigData = [];
    
    for (let i = 1; i < 1000000; i++) {
      bigData.push(i);
    }
    
    const binarySearchTester4 = binarySearch(bigData, 219328);
    expect(binarySearchTester4).to.equal(219327);
  });
  
});
