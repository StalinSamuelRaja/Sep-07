class UberPricingCalculator {
    constructor(distance, duration, isSurge) {
      this.baseFare = 75; 
      this.perMinuteRate = 1.5; 
      this.perKilometerRate = 7; 
      this.surgeMultiplier = isSurge ? 1.5 : 1; 
      this.distance = distance; 
      this.duration = duration; 
    }
  
    calculatePrice() {
      const price = (
        this.baseFare +
        this.perMinuteRate * this.duration +
        this.perKilometerRate * this.distance
      ) * this.surgeMultiplier;
  
      return `₹${price.toFixed(2)}`;
    }
  }
  
 
  const distance = 10; 
  const duration = 20; 
  const isSurge = false; 
  
  const calculator = new UberPricingCalculator(distance, duration, isSurge);
  const totalPrice = calculator.calculatePrice();
  
  console.log(`The estimated Uber price is: ${totalPrice}`);
  