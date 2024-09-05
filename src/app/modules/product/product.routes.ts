import express from "express";
import { productController } from "./product.controller";
import zodValidateRequest from "../../middlewares/zodValidateRequest";
import { productValidation } from "./product.validation";
import auth from "../../middlewares/auth";
import { UserRole } from "../user/user.constant";

const router = express.Router();

router.post(
  "/create-product",
  zodValidateRequest(productValidation.productValidationSchema),
  productController.createProduct
);

router.get(
  "/",
  auth(UserRole.admin, UserRole.user),
  productController.getAllService
);

router.get(
  "/:id",
  auth(UserRole.admin, UserRole.user),
  productController.getSingleService
);

router.put("/id", productController.updateService);

router.delete("/id", productController.deleteService);

export const productRoutes = router;
