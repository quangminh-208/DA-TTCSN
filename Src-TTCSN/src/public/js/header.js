const main_header = document.querySelector('#main-header');
const htmls =
    `
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top header">
        <div class="container">
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal-2"
            >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" >
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="" class="nav-link active" data-bs-toggle="modal" data-bs-target="#exampleModal">Đăng Nhập / Đăng Kí</a>
                </li>
            </ul>
        </div>
        <a href="#" class="img-header"><img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/logo-mona.png" alt="" style="width: 200px; height: 60px; padding: 10px 0"></a>
        <ul class="nav">
            <li class="nav-item item2">
                <a href="/Cart" class="nav-link active" style="color: #ccc">
                    Giỏ Hàng
                </a>
            </li>
            <li class="nav-item">
                <a href="/Cart" class="nav-link active" style="color: #ccc">
                    <i class="bi bi-bag"></i>
                </a>
            </li>
        </ul>
        
        </div>
    </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-light list fixed-top header">
        <div class="collapse navbar-collapse navbar-collapse2" id="navbarNavAltMarkup">
            <div class="collapse navbar-collapse navbar-collapse2" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <li class="nav-menu"><a class="nav-link link-navi" href="/">Trang Chủ</a></li>
                    <li class="nav-menu"><a class="nav-link link-navi" href="/Home/About">Giới Thiệu</a></li>
                    <li class="nav-menu">
                        <a class="nav-link link-navi" href="/Home/Woman">Nữ
                        <i class="bi bi-chevron-down"></i></a>
                        <ul class="subnav">
                            <li class="sub"><a class="nav-link link-navi " href="/Woman/Classic">Classic</a></li>
                            <li class="sub"><a class="nav-link link-navi " href="/Woman/Sunbaked">Sunbaked</a></li>
                            <li class="sub"><a class="nav-link link-navi " href="/Woman/Chunk 07s">Chunk 07s</a></li>
                            <li class="sub"><a class="nav-link link-navi " href="/Woman/One Star">One Star</a></li>
                            <li class="sub"><a class="nav-link link-navi " href="/Woman/PSY-Kicks">PSY-Kicks</a></li>
                        </ul>
                    </li>
                    <li class="nav-menu"><a class="nav-link link-navi" href="/Home/Man">
                        Nam
                        <i class="bi bi-chevron-down"></i></a>
                        <ul class="subnav">
                            <li class="sub"><a class="nav-link link-navi" href="/Woman/Classic">Classic</a></li>
                            <li class="sub"><a class="nav-link link-navi" href="/Woman/Sunbaked">Sunbaked</a></li>
                            <li class="sub"><a class="nav-link link-navi" href="/Woman/Chunk 07s">Chunk 07s</a></li>
                            <li class="sub"><a class="nav-link link-navi" href="/Woman/One Star">One Star</a></li>
                            <li class="sub"><a class="nav-link link-navi" href="/Woman/PSY-Kicks">PSY-Kicks</a></li>
                        </ul>
                    </li>
                    <li class="nav-menu"><a class="nav-link link-navi" href="/Home/childrenproduct">Trẻ em</a></li>
                    <li class="nav-menu"><a class="nav-link link-navi" href="/Home/otherproduct">Phụ Kiện khác</a></li>
                    <li class="nav-menu"><a class="nav-link link-navi" href="/News">Tin tức</a></li>
                    <li class="nav-menu"><a class="nav-link link-navi" href="/Contact">Liên Hệ</a></li>
                </div>
            </div>  
        </div>
    </nav>
    <!-- Modal 1-->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-1">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-6 col-6-left">
                            <div class="title">
                                Đăng Nhập
                            </div>
                            <label for="">
                                <form action="/SignInUser" method="post">
                                    Tên tài khoản hoặc địa chỉ mail*
                                    <input class="input" type="email" name="email" id="email">
                                    Mật Khẩu*
                                    <input class="input" type="password" name="password" id="password">
                                    
                                    <button type="submit" class="btn btn-danger">Đăng Nhập</button>
                                </form>
                            </label>
                            <input type="checkbox" name="remember-password" id="remember-password">Ghi nhớ mật khẩu
                        </div>
                        <div class="col-6">
                            <div class="title">
                                Đăng Kí
                            </div>
                            <label for="">
                                <form action="/CreateUser" method="post">
                                    Tên tài khoản hoặc địa chỉ mail*
                                    <input class="input" type="email" name="email" id="email">
                                    Mật Khẩu*
                                    <input class="input" type="password" name="password" id="password">
                                    <button type="submit" class="btn btn-danger">Đăng Kí</button>
                                </form>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal 2-->
    <div class="modal" id="exampleModal-2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-2">
            <div class="modal-content">
                <div class="modal-header">
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <i class="bi bi-search"></i>
                    </form>
                </div>
            <div class="modal-body" style="background-color: #fff">
                <div class="list-group">
                    <a href="/"><button type="button" class="list-group-item list-group-item-action">Trang Chủ</button></a>
                    <a href="/Home/About"><button type="button" class="list-group-item list-group-item-action">Giới Thiệu</button></a>
                    
                    <a href="/Home/Woman"><button type="button" class="list-group-item list-group-item-action">Nữ
                    <i class="bi bi-chevron-down"></i></button></a>
                    
                    
                    <a href="/Home/Man"><button type="button" class="list-group-item list-group-item-action">Nam
                    <i class="bi bi-chevron-down"></i></button></a>
                    
                    <a href="/Children"><button type="button" class="list-group-item list-group-item-action">Trẻ em</button></a>
                    <a href="/Other-Product"><button type="button" class="list-group-item list-group-item-action">Phụ Kiện khác</button></a>
                    <a href="/News"><button type="button" class="list-group-item list-group-item-action">Tin tức</button></a>
                    <a href="/Contact"><button type="button" class="list-group-item list-group-item-action">Liên Hệ</button></a>
                    <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal"><button type="button" class="list-group-item list-group-item-action" >Đăng Nhập / Đăng Kí</button></a>
                    <p class="hotline ms-auto">HOTLINE: 076 922 0162</p>
                </div>
            </div>
        </div>
    </div>
    
</div>
    `
main_header.innerHTML = htmls;