import Home from "../app/page";
import { ContextData } from "../app/data/hooks/ContextData";
import { render, waitFor, screen } from "@testing-library/react";

describe("test data api", () => {
  it("should return correct data", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        gender: "Male",
      }),
    });

    render(
      <ContextData>
        <Home />
      </ContextData>
    )

    await waitFor(() => {
      const nameElement = screen.getByText("Morty Smith");
      expect(nameElement).toBeInTheDocument();

    });
  });
});
