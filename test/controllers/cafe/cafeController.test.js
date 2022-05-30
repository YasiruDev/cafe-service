const CafeService = require("../../../src/services/cafe/cafeService");
const CafeController = require("../../../src/controllers/cafe/cafeController");
const cafeController = new CafeController();
const cafeService = new CafeService();
const httpMocks = require("node-mocks-http");

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
  jest.resetAllMocks();
});

afterEach(() => {
  jest.resetAllMocks();
});

const addNewCafeSuccessResponse = {
  name: "cafeZee",
  description: "Indian foods",
  logo: "https://www.sample-videos.com/img/Sample-jpg-image-50kb.jpg",
  location: "Kollupitiya",
};

describe("Test cafeController", () => {
  it("addNewCafe success", async () => {
    jest.spyOn(CafeService.prototype, "addNewCafe").mockReturnValue(addNewCafeSuccessResponse);
    await cafeController.addNewCafe(req, res);
    expect(res.statusCode).toBe(200);
  });
});
