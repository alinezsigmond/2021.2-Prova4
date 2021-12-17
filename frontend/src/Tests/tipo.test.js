import { render, screen, fireEvent } from '@testing-library/react'
import {CreateTipo} from '../Pages/Tipos/createTipo'

describe("socorro", () => {
    test("deve abrir modal", () => {
        render(<CreateTipo />);
        const id = screen.getByTestId("botao");
        fireEvent.click(id);
        const modal = screen.getByTestId("modal");
        expect(modal).toBeInTheDocument;
    })
})