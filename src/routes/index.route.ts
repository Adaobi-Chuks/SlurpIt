import { Router } from 'express';
const router = Router();
import employeeRoute from "./employee.route";
import userRoute from "./user.route";
import categoryRoute from "./category.route";

router.use('/employee', employeeRoute);
router.use('/user', userRoute);
router.use('/category', categoryRoute);

//redirects users to API documentation when they navigate to "/docs"
// router.use("/docs", (req, res) => {
//     res.redirect("");
// })

export default router;