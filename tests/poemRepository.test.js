import { act } from 'react'; // Cambia la importación de act aquí
import { MockPoemRepository } from '../src/repository/poemRepository';
import json from '../src/components/prototype/prototype.json';

describe("poemRepository test", () => {
    it("poemRepository should return an array with poetry", async () => {
        let poems;
        
        await act(async () => {
            const mockPoemRepository = new MockPoemRepository();
            poems = await mockPoemRepository.getPoems();
        });

        expect(poems).toEqual(json)
    });
});