import { MockPoemRepository } from "../repository/poemRepository";

export const fetchPoem = async (setPoemCallBack) => {
    const mockPoemRepository = new MockPoemRepository()
    const poems = await mockPoemRepository.getPoems()
    setPoemCallBack(poems);
}