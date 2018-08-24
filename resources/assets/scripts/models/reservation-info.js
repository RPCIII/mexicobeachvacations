export default class ReservationInfo {
    constructor() {
        this.BillingAddress = "";
        this.BillingCity = "";
        this.BillingState = "";
        this.BillingZip = "";
        this.BillingCountry = "";
        this.CreditCardNumber = "";
        this.ExpMonth = 0;
        this.ExpYear = 0;
        this.NameOnCard = "";
        this.CCCVCode = "";
        this.UnitId = 0;
        this.LocationId = 0;
        this.ArrivalDate = "";
        this.DepartureDate = "";
        this.Persons = 2;
        this.FirstName = "";
        this.LastName = "";
        this.MiddleInitial = "";
        this.Title = "";
        this.Email = "";
        this.Address = "";
        this.Address2 = "";
        this.City = "";
        this.State = "";
        this.Zip = "";
        this.Country = "US";
        this.WorkPhone = "";
        this.OtherPhone = "";
        this.HomePhone = "";
        this.TravelInsAccepted = true;
        this.Notes = "";
    }

    submit () {
        //make the post request with all of the info filled out
    }

    clear () {
        return new ReservationInfo();
    }
}