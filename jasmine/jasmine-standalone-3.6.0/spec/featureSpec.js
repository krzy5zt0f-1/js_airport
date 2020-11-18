describe("Airport", function () {
  var airport;
  var plane = {name: "plane"};
  beforeEach(function() {
    airport = new Airport();
    testAirport = new Airport(1)
  });
  it ("should be able to create new airport", function() {
    expect(airport).toBeInstanceOf(Airport);
  });
  it("has a corect custom capacity", function() {
    expect(airport.capacity).toEqual(5);
  });
  it("by default hangar is empty", function() {
    expect(airport.hangar).toEqual([]);
  });
  it("airport can land a plane when it is sunny", function() {
    testAirport.land(plane, "sunny")
    expect(testAirport.hangar).toEqual([{name: "plane"}]);
    expect(testAirport.capacity).toEqual(0);
  });
  it("airport cannot land a plane when it is stormy", function() {
    expect(testAirport.land(plane, "stormy")).toEqual("Bad weather, cannot land now!")
    expect(testAirport.hangar).toEqual([]);
    expect(testAirport.capacity).toEqual(1);
  });
  it("airport can take off the plane when sunny", function() {
    testAirport.land(plane, "sunny")
    expect(testAirport.takeOff(plane, "sunny")).toEqual(`${plane} took off!`);
    expect(testAirport.hangar).toEqual([]);
    expect(testAirport.capacity).toEqual(1);
  });
  it("airport cannot take off the plane when stormy", function() {
    testAirport.land(plane, "sunny")
    expect(testAirport.takeOff(plane, "stormy")).toEqual("Bad weather, cannot take off now!");
    expect(testAirport.hangar).toEqual([plane]);
    expect(testAirport.capacity).toEqual(0);
  });
  it ("should not allow landing if airport is full and sunny", function() {
    var plane1 = {name: "plane1"};
    testAirport.land(plane, "sunny");
    expect(testAirport.land(plane1, "sunny")).toEqual("Airport full, unable to land!");
  });
});

describe("Weather", function() {

  it("returns conditions randomly, in this case stormy", function() {
    var weather = new Weather();
    spyOn(Math, "random").and.returnValue(0);
    expect(weather.con()).toEqual("stormy");
  });
  it("returns conditions randomly, in this case sunny", function() {
    var weather = new Weather();
    spyOn(Math, "random").and.returnValue(0.25);
    expect(weather.con()).toEqual("sunny");
  });
})
