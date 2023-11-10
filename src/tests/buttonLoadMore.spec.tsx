import { render, fireEvent, screen } from "@testing-library/react";
import { ButtonLoad } from "../app/ui/componentes/ButtonLoad";
import { ContextData } from "../app/data/hooks/ContextData";

describe("ButtonLoad", () => {
  let buttonElement: HTMLElement;

  beforeEach(() => {
    render(
      <ContextData>
        <ButtonLoad />
      </ContextData>
    );
    buttonElement = screen.getByRole("button");
  });

  it("should render styles", () => {
    expect(buttonElement).toHaveStyle({
      position: "fixed",
    });
  });

  it("should change message on button click and toggle disabled", () => {
    fireEvent.click(buttonElement);
    expect(buttonElement).toBeDisabled();
    screen.getByText("Loading..");
  });
});







