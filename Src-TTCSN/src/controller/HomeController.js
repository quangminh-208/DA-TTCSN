import connection from '../configs/connectDB'
let getHomePage = async (req, res) => {
    let [otherproduct] = await connection.execute('select * from `otherproduct`')
    let [product] = await connection.execute('select * from `product`')
    let [saleproduct] = await connection.execute('select * from `saleoff`')
    return res.render('HomePage.ejs', {
        otherproduct: otherproduct,
        product: product,
        saleproduct: saleproduct
    })
}
let getManPage = async (req, res) => {
    let [product] = await connection.execute('select * from `product`');
    return res.render('ManPage.ejs', {
        dataProd: product
    })
}
let getWomanPage = async (req, res) => {
    let [product] = await connection.execute('select * from `product`');
    return res.render('WomanPage.ejs', {
        dataProd: product
    })
}
let getCreateUser = async (req, res) => {
    let { email, password } = req.body;
    console.log(`>> check : ${email} , ${password}`)
    await connection.execute('insert into `users` (Email,PASSWORD) values (?,?)', [email, password])
    return res.redirect('/');
}
let getSignIn = async (req, res) => {
    let { email, password } = req.body;
    let [user] = await connection.execute('select * from `users` where Email = ?', [email])
    if (user[0].Email != email) {
        console.log(`>> check : ${JSON.stringify(user[0].Email)}`)
        return res.send("Không tồn tại tài khoản !")
    }

    else if (user[0].Email == email && user[0].PASSWORD != password) {
        console.log(`>> check : ${JSON.stringify(user[0].Email)}`)
        return res.send("Sai Mật khẩu !")
    }

    else {
        console.log(`>> check : ${JSON.stringify(user[0].Email)}`)
        return res.render('HomePage.ejs');
    }

}
let getAboutPage = async (req, res) => {
    return res.render('About.ejs')
}

let getCategoryPage = async (req, res) => {
    let category = req.params.Category
    var par = `%${category}%`
    let [product] = await connection.execute('select * from `product` where NamePr LIKE ? ', [par])
    console.log(product, par)
    res.render('WomanCatePage.ejs', {
        dataProd: product
    })
}

const getOtherProductPage = async (req, res) => {
    let Prod = req.params.product
    let [product] = await connection.execute(`select * from ${Prod}`)
    res.render('OtherProduct.ejs', {
        dataProd: product,
        TypeProd: Prod
    })
}


const detailPage = async (req, res) => {
    let Prod = req.params.product
    let ID = req.params.ID
    let [product] = await connection.execute(`select * from ${Prod} where ID = ?`, [ID])
    console.log(product)
    res.render('DetailProduct.ejs', {
        dataProd: product[0],
        TypeProd: Prod
    })
}
const getContactPage = async (req, res) => {
    res.render('Contact.ejs')
}

const getNewsPage = async (req, res) => {
    res.render('News.ejs')
}

const getAddToCart = async (req, res) => {

    let ID = req.params.IdProd
    console.log(ID)
    res.redirect('/Children')
}



let getCartPage = async (req, res) => {
    res.render('Cart.ejs')
}


let getAdminPage = async (req, res) => {
    res.render('Admin.ejs')
}

let getAdminProductPage = async (req, res) => {
    let Prod = req.params.product
    let [product] = await connection.execute(`select * from ${Prod}`)
    res.render('adminProduct.ejs', {
        dataProd: product,
        TypeProd: Prod
    })
}

let getDetailPro = async (req, res) => {
    let ID = req.params.ID
    let Prod = req.params.product
    console.log(Prod)
    let [product] = await connection.execute(`select * from ${Prod} where ID = ?`, [ID])
    console.log(product[0])
    res.render('adminDetailProduct.ejs', {
        dataProd: product[0],
        TypeProd: Prod
    })
}
let updateProduct = async (req, res) => {
    let ID = req.params.ID
    let Prod = req.params.product
    let { Name, Material, Price } = req.body
    await connection.execute(`update ${Prod} set NamePr = ? , Material = ? , Price = ? where ID = ?`, [ID, Name, Material, Price])
    res.redirect('/admin/product');
}
let deleteProduct = async (req, res) => {
    let ID = req.params.ID
    let Prod = req.params.product
    const abc = "`" + `${Prod}` + "`"
    await connection.execute(`delete from ${Prod} where ID = ?`, [ID])
    res.redirect('/admin/product')
}

let getAddPage = async (req, res) => {
    let Prod = req.params.product
    res.render('adminAddProduct.ejs', {
        TypeProd: Prod
    })
}
let Add = async (req, res) => {
    if (req.fileValidationError) {
        return res.send(req.fileValidationError)
    }
    else if (!req.file) {
        return res.send('Please select an image to upload');
    }
    else {
        let { ID, Name, Material, Gender, SKU, Price } = req.body
        let Prod = req.params.product
        var imgsrc = 'http://127.0.0.1:5500/img/' + req.file.filename
        var insertData = "INSERT INTO users_file(file_src)VALUES(?)"
        await connection.execute(`
            insert into ${Prod} (ID,URLpic,NamePr,Material,Gender,SKU,Price) values (?,?,?,?,?,?,?)
            `,
            [ID, imgsrc, Name, Material, Gender, SKU, Price]
        )
        console.log(imgsrc)
        res.redirect(`/admin/add/${Prod}`)
    }

}
module.exports = {
    getHomePage,
    getManPage,
    getWomanPage,
    getCreateUser,
    getSignIn,
    getAboutPage,
    getCategoryPage,
    getOtherProductPage,
    detailPage,
    getContactPage,
    getNewsPage,
    getAddToCart,
    getCartPage,

    getAdminPage,
    getAdminProductPage,
    getDetailPro,
    updateProduct,
    deleteProduct,
    getAddPage,
    Add
}