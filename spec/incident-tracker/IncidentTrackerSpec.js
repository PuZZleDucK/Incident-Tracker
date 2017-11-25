describe("IncidentTracker", function() {
  const expected_value = 1;

  beforeEach(function() {
    const setup_expected_value = 1;
  });

  it("describe expected outcome", function() {
    // trigger event
    const value = 1;
    expect(value).toEqual(expected_value);

    //demonstrates use of custom matcher
    // expect(value).<from helper>(expected_value);
  });

});
