import axios from "axios";
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
    this.ResvCode = "";
    this.CCCVCode = "";
    this.UnitId = 0;
    this.LocationId = 1;
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
    this.Country = "United States";
    this.WorkPhone = "";
    this.OtherPhone = "";
    this.HomePhone = "";
    this.TravelInsAccepted = true;
    this.PromoCode = "";
    this.Notes = "";
    this.SDPStrict = false;
    this.token = "";
  }

  submit() {
    axios.get("https://rns.mexicobeachvacations.com/token").then(response => {
      this.token = response.data;
      let url =
        "https://core.rnshosted.com/api/v17/Reservations?clientid=RNS.ParkerRealty.KeriganMarketing";
      let config = {
        headers: { Authorization: "Bearer " + this.token }
      };
      let data = {
        Zip: this.Zip,
        City: this.City,
        Email: this.Email,
        Notes: this.Notes,
        State: this.State,
        Title: this.Title,
        UnitId: this.UnitId,
        Address: this.Address,
        Country: this.Country,
        ExpYear: this.ExpYear,
        Persons: this.Persons,
        Address2: this.Address2,
        CCCVCode: this.CCCVCode,
        ExpMonth: this.ExpMonth,
        LastName: this.LastName,
        ResvCode: this.ResvCode,
        FirstName: this.FirstName,
        HomePhone: this.HomePhone,
        PromoCode: this.PromoCode,
        SDPStrict: this.SDPStrict,
        WorkPhone: this.WorkPhone,
        BillingZip: this.BillingZip,
        LocationId: this.LocationId,
        NameOnCard: this.NameOnCard,
        OtherPhone: this.OtherPhone,
        ArrivalDate: this.ArrivalDate,
        BillingCity: this.BillingCity,
        BillingState: this.BillingState,
        DepartureDate: this.DepartureDate,
        MiddleInitial: this.MiddleInitial,
        BillingAddress: this.BillingAddress,
        BillingCountry: this.BillingCountry,
        CreditCardNumber: this.CreditCardNumber,
        TravelInsAccepted: this.TravelInsAccepted,
        CCTypeId: this.getCardType(this.CreditCardNumber)
      };
      axios
        .post(url, data, config)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
  getCardType(number) {
    // visa
    var re = new RegExp("^4");
    if (number.match(re) != null) return 1;

    // Mastercard
    // Updated for Mastercard 2017 BINs expansion
    if (
      /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(
        number
      )
    )
      return 2;

    // Discover
    re = new RegExp(
      "^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)"
    );
    if (number.match(re) != null) return 3;

    return 0;
  }

  clear() {
    return new ReservationInfo();
  }
}
