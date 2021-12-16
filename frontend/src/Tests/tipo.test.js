import { render, screen } from '@testing-library/react'
import Tipo from '../Components/Tipo/tipo'

describe("socorro", () => {
    test("deve passar", () => {
        render(<Tipo />);
        const id = screen.getByTestId("id");
        expect(id).toBeInTheDocument;
    })
})