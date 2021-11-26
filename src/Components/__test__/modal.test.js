const mockData = {
    isOpen: true,
    }

test("renders button if given data", ()=> {
    render(<Modal isOpen={mockData.isOpen} />)
    const element = screen.getByText(/close basket/i)
    expect(element).toBeInTheDocument()
})
import Modal from "../Modal";