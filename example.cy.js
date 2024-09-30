let add = (a, b) => a + b; 
let subtract = (a, b) => a - b; 
let divide = (a, b) => a/b; 
let multiply = (a, b) => a*b; 

//describe o context 

describe ('Unit testing for our dummy aplication', () => {
  context('Math with POSITIVE numbers', () => {
//it - specify 
  it('should add positive numbers', () => {
  expect(add(1, 2)).to.eq(3); 
}); 
  it('should substract positive numbers', () => {
  expect((4, 2)).to.eq(2); 
  }); 
  it('should divide positive numbers', () => {
    expect(divide(4, 2)).to.eq(2); 
   }); 
  it('should multiply positive numbers', () => {
    expect(multiply(4, 2)).to.eq(8);  
  }); 

});

  describe ('Math with DECIMAL numbers', () => {
    it('should add decimal numbers', () => {
      expect((4.4, 2.2)).to.eq(2.2); 
  });
   
    }); 

    it('should substract decimal numbers', () => {
      expect((4.4, 2.2)).to.eq(2.2); 
    }); 
    
    });


 
