import { render } from "@testing-library/react";
import { ButtonLoad } from "../app/ui/componentes/ButtonLoad"
import { ContextData } from "../app/data/hooks/ContextData";

describe("ButtonLoad", () => {
  it("should render the button", () => {
    const { getByRole } = render(
      <ContextData>
        <ButtonLoad></ButtonLoad>
      </ContextData>
    );

    const buttonElement = getByRole("button");

    expect(buttonElement).toBeInTheDocument();
  });
});
