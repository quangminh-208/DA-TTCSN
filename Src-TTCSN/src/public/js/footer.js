const footer = document.querySelector('.footer');
let footer_element = () => {
    return `
        <div   class="container"><div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <h1 class="a">GIỚI THIỆU </h1>
                    <div class="clearfix" style="max-width:35px;background-color:rgb(195, 0, 5);"></div>
                    <p class="footer-text">Chào mừng bạn đến với ngôi nhà Converse! Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh.</p>
                </div>
                <div class="col-lg-3">
                    <h1 class="a">ĐỊA CHỈ</h1>
                    <div class="clearfix" style="max-width:35px;background-color:rgb(195, 0, 5);"></div>
                    <div class="footer-text"> 319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM </div>
                    <div class="footer-tel"> <a href="#" class="footer-text">076 922 0162</a></div>
                    <div class="footer-email">
                        <a href="#" class="footer-text">demonhunterg@gmail.com</a>
                        <a href="#" class="footer-text">mon@mona.media</a>
                    </div>
                </div>
                <div class="col-lg-3">
                    <h1 class="a">MENU</h1>
                    <div class="clearfix" style="max-width:35px;background-color:rgb(195, 0, 5);"></div>
                    <div class="row">
                        <a style="font-size: 21px;" href="#" class="footer-text col-6">Trang chủ</a>
                        <a style="font-size: 21px;" href="#" class="footer-text col-6">Giới thiệu</a>
                    </div>
                    <div class="row">
                        <a style="font-size: 21px;" href="#" class="footer-text col-6">Cửa hàng</a>
                        <a style="font-size: 21px;" href="#" class="footer-text col-6">Tin tức</a>
                    </div>
                    <div class="row">
                        <a style="font-size: 21px;" href="#" class="footer-text">Liên hệ</a>
                    </div>
                    
                </div>
                
                <div  class="col-lg-3">
                    <h1 class="a">MẠNG XÃ HỘI</h1>
                    <div class="clearfix" style="max-width:35px;background-color:rgb(195, 0, 5);"></div>
                    <a href="#" class="footer-icon hover-red"><i class="bi bi-facebook" style="color: #3A589D"></i></a>
                    <a href="#" class="footer-icon hover-red"><i class="bi bi-instagram" style="color: #3B6994"></i></a>
                    <a href="#" class="footer-icon hover-red"><i class="bi bi-twitter" style="color: #2478BA"></i></a>
                    <a href="#" class="footer-icon hover-red"><i class="bi bi-pinterest" style="color: #CB2320"></i></a>
                    <a href="#" class="footer-icon hover-red"><i class="bi bi-rss" style="color: #FC7600"></i></a>
                </div>
            </div>
        </div>
    </div>
    `
}
footer.innerHTML = footer_element