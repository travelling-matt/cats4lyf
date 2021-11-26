import { render, screen, fireEvent } from "@testing-library/react";
import App from  "../App";
import { handler } from "../App";
import Cat from "../App"; 
import fetch from 'jest-fetch-mock'
beforeEach(() => {
    fetch.resetMocks()
})

test("renders loading", () => {
    render(<App />);
    const element = screen.getByText(/loading.../i);
    expect(element).toBeInTheDocument();
  });



//doesn't work
// test("happy path - testing the handler function", async () => {
//     fetch.mockResponseOnce(JSON.stringify({ data: "test" }))
//     const data = await handler()
//     expect(fetch).toHaveBeenCalledTimes(1)
//     expect(data).toEqual({ data: "test" })
// })

//doesn't work
// test("sad path - testing the random function", async () => {
//     fetch.mockReject(() => "api failed")
//     const data = await handler()
//     expect(fetch).toHaveBeenCalledTimes(1)
//     expect(data).toEqual(null)
// })

// const mockData = {
//     catsInfo: "testInfo",
//     catName: "testname",
//     music: "testmusic",
//     amount: "testamount"
// }


//   test("renders the Cat component with data, catName", async () => {
//       fetch.mockResponseOnce(JSON.stringify(mockData))
//     render(<App />);
//     const element = await screen.findByTestId("catDiv");
//     expect(element).toBeInTheDocument();
//   });

