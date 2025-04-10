var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import { AuthMiddleware } from '../middleware/middleware.js';
import { AppController } from '../controllers/index.js';
const router = express.Router();
router
    .route('/')
    .get(AuthMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield AppController.browseAll();
        res.status(200).json({
            message: 'Hit API',
            data,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Internal server error.',
            error,
        });
    }
}));
export const AppRouter = router;
//# sourceMappingURL=route.js.map