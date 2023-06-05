import express from 'express';
import mysql from 'mysql2/promise';
import multer from 'multer';
import path from 'path';
import HomeController from '../controller/HomeController'
let router = express.Router();
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './src/public/img/')     // './public/img/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const imageFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
var upload = multer({
    storage: storage,
    fileFilter: imageFilter
});
const initWebRouter = (app) => {
    router.get('/', HomeController.getHomePage)

    router.get('/Home/Man', HomeController.getManPage)

    router.get('/Home/Woman', HomeController.getWomanPage)

    router.post('/CreateUser', HomeController.getCreateUser)

    router.post('/Home', HomeController.getSignIn)

    router.get('/Home/About', HomeController.getAboutPage)

    router.get('/Woman/:Category', HomeController.getCategoryPage)

    router.get('/Home/:product', HomeController.getOtherProductPage)

    router.get('/detail/:product/:ID', HomeController.detailPage)

    router.get('/Contact', HomeController.getContactPage)

    router.get('/News', HomeController.getNewsPage)

    router.post('/addtocart/:IdProd', HomeController.getAddToCart)

    router.get('/Cart', HomeController.getCartPage)

    router.get('/admin/home', HomeController.getAdminPage)

    router.get('/admin/:product', HomeController.getAdminProductPage)

    router.get('/admin/detail/:product/:ID', HomeController.getDetailPro)

    router.post('/admin/update/:product/:ID', HomeController.updateProduct)

    router.get('/admin/delete/:product/:ID', HomeController.deleteProduct)

    router.get('/admin/add/:product', HomeController.getAddPage)

    router.post('/admin/add/into/:product', upload.single('image'), HomeController.Add)

    return app.use('/', router)
}
export default initWebRouter