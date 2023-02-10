import { rest } from "msw";

export const handlers = [
  rest.get("/foo", (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    )
  ),
];
