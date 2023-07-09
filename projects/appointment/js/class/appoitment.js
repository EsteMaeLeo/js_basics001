class Appoitments {
    constructor() {
      this.appoitments = [];
    }
  
    addApoitment(appoitment) {
      this.appoitments = [...this.appoitments, appoitment];
      console.log(this.appoitments);
    }
  
    deleteAppoitment(id) {
      this.appoitments = this.appoitments.filter(
        (appotiment) => appotiment.id !== id
      );
    }
  
    editAppoitment(editAppoitment) {
      this.appoitments = this.appoitments.map((appoitment) =>
        appoitment.id === editAppoitment.id ? editAppoitment : appoitment
      );
    }
  }

  export default Appoitments;