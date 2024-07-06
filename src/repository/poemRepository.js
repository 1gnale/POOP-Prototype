import prototype from "../components/prototype/prototype.json"

export class MockPoemRepository {
  async getPoems() {
    console.log(prototype)
    return prototype
  }
}