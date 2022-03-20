<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Banking System</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
</head>

<body>
    <!-- Navbar -->
    <nav class="navbar">
        <div class="max-width">
            <div class="logo"><a href="#">BOI <span>Bank</span></a></div>
            <ul class="menu">
                <li class="phn-menu"><a href="#carousel">Home</a></li>
                <li class="tab-menu"><a href="#about">About</a></li>
                <li class="tab-menu"><a href="#service">Services</a></li>
                <li><a href="users.html">Transfer Money</a></li>
            </ul>
        </div>
    </nav>

    <!-- Carousel -->
    <div class="carousel" id="carousel">
        <div class="max-width">
            <div class="carousel-content">
                <div class="images">
                    <img class="image" src="caro4.jpg">
                    <img class="image" src="caro2.jpg">
                    <img class="image" src="caro5.jpg">
                    <img class="image" src="caro3.jpg">
                    <img class="image" src="caro.jpg">
                </div>
                <div onclick="side_slide(-1)" class="slide left">
                    <span class="fas fa-angle-left"></span>
                </div>
                <div onclick="side_slide(1)" class="slide right">
                    <span class="fas fa-angle-right"></span>
                </div>
                <div class="btm-sliders">
                    <span onclick="btm_slide(1)"></span>
                    <span onclick="btm_slide(2)"></span>
                    <span onclick="btm_slide(3)"></span>
                    <span onclick="btm_slide(4)"></span>
                    <span onclick="btm_slide(5)"></span>
                </div>
            </div>
        </div>
    </div>

    <!-- About Section -->
    <section class="about" id="about">
        <div class="max-width">
            <h2 class="title">About Us</h2>
            <div class="about-content">
                <div class="column left">
                    <img  src="caro6.jpg" alt="">
                </div>
                <div class="column right">
                    <div class="text">Aapka Apna <span>BOI Bank</span></div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse possimus unde illum similique non
                        fugit impedit facilis commodi deserunt, excepturi nisi eveniet cumque delectus, placeat
                        assumenda est modi accusantium optio voluptatem aspernatur quos sunt ratione dolorem. Dolores
                        repudiandae, ut nulla voluptatem magni earum ab eos porro! Recusandae, voluptate iure magnam
                        assumenda voluptatibus incidunt at placeat perspiciatis quia atque consequuntur. Dolore!</p>
                </div>
            </div>
        </div>
    </section> 

    <!--Service Section  -->
    <section class="service" id="service">
        <div class="max-width">
            <h2 class="title">Our Services</h2>
            <div class="service-content">
                <div class="card">
                    <div class="box">
                        <i class="fas fa-desktop"></i>
                        <h3>Online Banking</h3>
                        <p> Check your account balance,send and recieve money,pay bills online, monitor your spending and many more</p>
                    </div>
                    <a href="#">Learn more</a>
                </div>
                <div class="card">
                    <div class="box">
                        <i class="fas fa-mobile-alt"></i>
                        <h3>Mobile Banking</h3>
                        <p>Deposit check, pay bills, protect your debit card and make payments.</p>
                    </div>
                    <a href="#"><span> Learn more</span></a>
                </div>
                <div class="card">
                    <div class="box">
                        <i class="fas fa-bell"></i>
                        <h3>How-to Demos</h3>
                       <p>Get started with online and mobile banking with these helpful demos.</p>           
                    </div>
                    <a href="#">Learn more</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="column footer-left">
            <div>Copyright &copy;2022.A project by <b> Rekha Kumari </b></div> 
            <span>Chairman of BOI Bank</span>
        </div>
        <div class="column footer-right">
            <span> Contact Me:</span>
            <ul class="social-icons">
                <li><a target="_blank" class="github" href="https://github.com/Rekha-001"><i class="icon  fab fa-github fa-2x"></i>Github</a></li>

                <li><a target="_blank" class="linkedin" href="https://www.linkedin.com/in/rekha-kumari-b629a2226"><i class="fab fa-linkedin fa-2x"></i>Linkedin</a></li>
            </ul>
            <ul class="social-icons2">
                <li><a target="_blank" class="github" href="https://github.com/Rekha-001"><i class="icon  fab fa-github fa-2x"></i></a></li>

                <li><a target="_blank" class="linkedin" href="https://www.linkedin.com/in/rekha-kumari-b629a2226"><i class="fab fa-linkedin fa-2x"></i></a></li>
            </ul>
        </div>
    </footer>
    <script src="script.js"></script>
</body>

</html>
