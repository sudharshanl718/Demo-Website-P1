import React from 'react'

const Main = () => {
    const demo1 = () => {
        document.getElementById("b1").src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/w/s/ws12-blue_main_1.jpg"
    }
    const demo2 = () => {
        document.getElementById("b1").src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/w/s/ws12-orange_main_1.jpg"
    }
    const demo3 = () => {
        document.getElementById("b1").src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/w/s/ws12-purple_main_1.jpg"
    }
    const demo4 = () => {
        document.getElementById("b2").src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/w/t/wt09-purple_main_1.jpg"
    }
    const demo5 = () => {
        document.getElementById("b2").src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/w/t/wt09-white_main_1.jpg"
    }
    const demo6 = () => {
        document.getElementById("b2").src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/w/t/wt09-yellow_main_1.jpg"
    }
    const demo7 = () => {
        document.getElementById("b3").src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/m/t/mt07-gray_main_1.jpg"
    }
    const demo8 = () => {
        document.getElementById("b4").src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/m/h/mh07-black_main_1.jpg"
    }
    const demo9 = () => {
        document.getElementById("b4").src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/m/h/mh07-gray_main_1.jpg"
    }
    const demo10 = () => {
        document.getElementById("b4").src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/m/h/mh07-green_main_1.jpg"
    }

  return (
    <div>
        <main>
            <div class="mdiv1">
                <div class="mdiv1-1">
                    <p class="p1">New Luma Yoga Collection</p>
                    <p class="p2">Get fit and look fab in new <br></br>seasonal styles</p>
                    <button class="btn1"><a href="New-yoga.js">Shop New Yoga</a></button>
                </div>
            </div>
            <div class="mdiv2">
                <div class="mdiv2-1">
                    <p>
                        <h1>20% OFF</h1>
                        <p>Luma pants when you<br></br> shop today*</p>
                        <a href="Pants.js">Shop Pants <ion-icon name="chevron-forward-outline"></ion-icon></a>
                    </p>
                </div>
                <div class="mdiv2-2">
                    <p>
                        <img src="https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-t-shirts.png" alt="yellow"></img>
                        <p class="p3">Even more ways to mix and match</p>
                        <p class="p4">Buy 3 Luma tees get a 4th free</p>
                        <a href="Tees.js">Shop Tees <ion-icon name="chevron-forward-outline"></ion-icon></a>
                    </p>
                </div>
                <div class="mdiv2-3">
                    <p>
                        <p class="p5">Take it from<br></br> Erin</p>
                        <p class="p6">Luma founder Erin<br></br> Renny shares her<br></br> favorites!</p>
                        <a href="Erin-revommends.js">Shop Erin Recommends <ion-icon name="chevron-forward-outline"></ion-icon></a>
                    </p>
                </div>
                <div class="mdiv2-4"></div>
                <div class="div99">
                    <p class="p7">Twice around, twice as nice</p>
                    <p class="p8">Find conscientious, comfy clothing in our eco-friendly collection</p>
                    <a href="Eco-friendly.js">Shop Eco-Friendly <ion-icon name="chevron-forward-outline"></ion-icon></a>
                </div>
                <div class="mdiv2-5"></div>
                <div class="div98">
                    <p class="p9">Science meets performance</p>
                    <p class="p10">Wicking to raingear, Luma covers you</p>
                    <a href="Performance.js">Shop Performance <ion-icon name="chevron-forward-outline"></ion-icon></a>
                </div>
            </div>
            <div class="mdiv3">
                <p class="p11">Hot Sellers</p>
                <p class="p12">Here is what`s trending on Luma right now</p>
            </div>
            <div class="mdiv4">
                <div class="mdiv4-1">
                    <img src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/w/s/ws12-orange_main_2.jpg" alt="Orange"  id="b1"></img>
                    <p class="p13">Radiant Tee</p>
                    <p class="p14">As low as <h1>$22.00</h1></p>
                    <p class="p15"><button>XS</button><button>S</button><button>M</button><button>L</button><br></br><button>XL</button></p>
                    <p><button id="bt1" onClick={demo1}></button><button id="bt2" onClick={demo2}></button><button id="bt3" onClick={demo3}></button></p>
                    <button class="p16">Add to cart</button>
                </div>
                <div class="mdiv4-2">
                    <img src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/w/t/wt09-white_main_1.jpg" alt="white" id="b2"></img>
                    <p class="p13">Breathe-Easy Tank</p>
                    <p class="p14">As low as<h1>$34.00</h1></p>
                    <p class="p15"><button>XS</button><button>S</button><button>M</button><button>L</button><br></br><button>XL</button></p>
                    <p><button id="bt4" onClick={demo4}></button><button id="bt5" onClick={demo5}></button><button id="bt6" onClick={demo6}></button></p>
                    <button class="p16">Add to cart</button>
                </div>
                <div class="mdiv4-3">
                    <img src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/m/t/mt07-gray_main_1.jpg" alt="gray" id="b3"></img>
                    <p class="p13">Argus All-Weather Tank</p>
                    <p class="p14">As low as<h1>$22.00</h1></p>
                    <p class="p15"><button>XS</button><button>S</button><button>M</button><button>L</button><br></br><button>XL</button></p>
                    <p><button id="bt7" onClick={demo7}></button></p>
                    <button class="p16">Add to cart</button>
                </div>
                <div class="mdiv4-4">
                    <img src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/m/h/mh07-gray_main_2.jpg" alt="Hoodie" id="b4"></img>
                    <p class="p13">Hero Hoodie</p>
                    <p class="p14">As low as<h1>$54.00</h1></p>
                    <p class="p15"><button>XS</button><button>S</button><button>M</button><button>L</button><br></br><button>XL</button></p>
                    <p><button id="bt8" onClick={demo8}></button><button id="bt9" onClick={demo9}></button><button id="bt10" onClick={demo10}></button></p>
                    <button class="p16">Add to cart</button>
                </div>
                <div class="mdiv4-5">
                    <img src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/m/b/mb02-gray-0.jpg" alt="back pack"></img>
                    <p class="p13">Fusion Backpack</p>
                    <p class="p14">As low as<h1>$59.00</h1></p>
                    <button class="p16">Add to cart</button>
                </div>
                <div class="mdiv4-6">
                    <img src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/w/b/wb04-blue-0.jpg" alt="carry bag"></img>
                    <p class="p13">Push It Messenger Bag</p>
                    <p class="p14">As low as<h1>$45.00</h1></p>
                    <button class="p16">Add to cart</button>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Main