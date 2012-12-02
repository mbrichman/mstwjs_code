describe("with an order", function() {

  beforeEach(function() {
    this.order = new TimeTravel.Models.Order();
  });

  it("can add an extra", function() {
    extra = new TimeTravel.Models.Extra();
    this.order.addExtra(extra);
    expect(this.order.get("extras").toArray()).toEqual([extra]);
  });

  it("can remove an extra", function() {
    extra = new TimeTravel.Models.Extra();
    this.order.addExtra(extra);
    this.order.removeExtra(extra);
    expect(this.order.get("extras").toArray()).toEqual([]);
  });

  //##pricing
  describe("it can calculate price", function() {
    beforeEach(function() {
      this.cheapExtra = new TimeTravel.Models.Extra({price: 100});
      this.pricyExtra = new TimeTravel.Models.Extra({price: 500});
      this.order = new TimeTravel.Models.Order();
    });

    it("initializes price", function() {
      expect(this.order.calculatePrice()).toEqual(0);
    });

    it("calculates price for one extra", function() {
      this.order.addExtra(this.cheapExtra);
      expect(this.order.calculatePrice()).toEqual(100);
    });

    it("calculates price for multiple", function() {
      this.order.addExtra(this.cheapExtra);
      this.order.addExtra(this.pricyExtra);
      expect(this.order.calculatePrice()).toEqual(600);
    });
  });
  //##pricing

});