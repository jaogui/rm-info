import Home from "../app/page";
import { ContextData } from "../app/data/hooks/ContextData";
import { render, waitFor, screen } from "@testing-library/react";
import fetchMock from "fetch-mock";

describe("App", () => {
  beforeEach(() => {
    fetchMock.restore();
  });

  test("render app for api success", async () => {
    const fakeData = [
      { id: 1, name: "Rick Sanchez"},
      { id: 2, name: "Mory Smith"},
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

    // await waitFor(() => {
    //   expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    // })

    expect(await screen.findByText('Rick Sanchez')).toBeInTheDocument()
  
    

    // describe("test data api", () => {
    //   it("should return correct data", async () => {
    //     global.fetch = jest.fn().mockResolvedValue({
    //       json: jest.fn().mockResolvedValue({

    //       }),
    //     });

    // render(
    //   <ContextData>
    //     <Home />
    //   </ContextData>
    // )

    // await waitFor(() => {
    //   const nameElement = screen.getByText("Morty Smith");
    //   expect(nameElement).toBeInTheDocument();
  });
});
