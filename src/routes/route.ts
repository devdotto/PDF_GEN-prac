import express, { Request, RequestHandler, Response } from "express";
import { AuthMiddleware } from "../middleware/middleware.js";
import { AppController } from "../controllers/index.js";

const router = express.Router();

router
  .route("/")
  .get(
    AuthMiddleware as unknown as RequestHandler,
    async (req: Request, res: Response) => {
      try {
        const { data } = await AppController.browseAll();
        res.status(200).json({
          message: "Hit API",
          data,
        });
      } catch (error) {
        res.status(500).json({
          message: "Internal server error.",
          error,
        });
      }
    }
  );

export const AppRouter = router;
