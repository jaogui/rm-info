import Home from "../app/page";
import { ContextData } from "../app/data/hooks/ContextData";
import { render, waitFor, screen } from "@testing-library/react";
import fetchMock from "fetch-mock";

describe("Data load api init app", () => {
  beforeEach(() => {
    fetchMock.restore();
  });

  test("render app for api success", async () => {
    const fakeData = [
      { id: 1, name: "Rick Sanchez" },
      { id: 2, name: "Mory Smith" },
    ];

    global.fetch = jest.fn().mockResolvedValue({
      status: 200,
      fakeData,
    });

    render(
      <ContextData>
        <Home />
      </ContextData>
    );

    //Teste wait simplificado
    expect(await screen.findByText("Morty Smith")).toBeInTheDocument();
    expect(screen.queryByText("Request error")).not.toBeInTheDocument();

    //Teste com waitFor
    // await waitFor(() => {
    //   expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    // })
  });
});
