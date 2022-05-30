const CafeService = require("../../../src/services/cafe/cafeService");
const cafeService = new CafeService();

beforeEach(() => {
  next = jest.fn();
  jest.resetAllMocks();
});

const db = require("../../../src/models");
const cafeRepository = db.cafe;

describe("Test cafeService service", () => {
  it("Test addNewCafe success", async () => {
    const mockReturnData = [
      {
        name: "PnS",
        description: "Indian & Chinees foods",
        logo: "https://www.sample-videos.com/img/Sample-jpg-image-50kb.jpg",
        location: "Kollupitiya",
      },
      true,
    ];
    jest.spyOn(cafeRepository, "findOrCreate").mockReturnValueOnce(mockReturnData);
    await cafeService.addNewCafe();
  });
});
