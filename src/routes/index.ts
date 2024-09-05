import { Router } from "express";
import { productRoutes } from "../app/modules/product/product.routes";
import { userRoutes } from "../app/modules/user/user.route";
import { authRoutes } from "../app/modules/auth/auth.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/product",
    route: productRoutes,
  },
  {
    path: "/user",
    route: userRoutes,
  },
    {
      path: "/auth",
      route: authRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
