
import { mapStateToProps } from "./CardContainer";
import { mapDispatchToProps } from "./CardContainer";
import { addHouses } from "../../actions/index";

describe('mapStateToProps', () => {
  it('should return an object with the houses array', () => {
    const mockState = {
      houses: [{name: 'Stark'},{name: 'Baratheon'}],
    }
    const expected = {
      houses: [{name: 'Stark'},{name: 'Baratheon'}]
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })
})

describe("mapDispatchToProps", () => {
  it("should map dispatch to props", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addHouses([
      { name: "Stark" },
      { name: "Baratheon" }
    ]);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addHouses([{ name: "Stark" }, { name: "Baratheon" }]);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});