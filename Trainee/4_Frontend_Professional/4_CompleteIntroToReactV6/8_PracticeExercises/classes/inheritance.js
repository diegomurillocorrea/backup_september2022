class Animal {
    constructor ( name, usesLitter ) {
        this._name = name;
        this._usesLitter = usesLitter;
        this._behavior = 0;
    }

    get name () {
        return this._name;
    }

    get behavior () {
        return this._behavior;
    }

    get behavior () {
        return this._usesLitter;
    }

    incrementBehavior () {
        this._behavior++;
    }
};

class Doctor {
    constructor ( name, insurance ) {
      this._name = name;
      this._remainingVacationDays = 20;
      this._insurance = insurance;
    }
  
    takeVacationDays () {
    }
  }
  
  class Nurse {
    constructor ( name, certifications ) {
      this._name = name;
      this.__remainingVacationDays = 20;
      this._certifications = certifications;
    }
  
    takeVacationDays () {
  
    }
  
    addCertification() {
        
    }
  
  }