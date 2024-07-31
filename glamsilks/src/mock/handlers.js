import { http, HttpResponse } from "msw";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get("/api/products", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(
      [{ id: 1, name: "Product 1", description: "Description 1", price: 10 },
      { id: 2, name: "Product 2", description: "Description 2", price: 20 }]
    );
  }),
];
