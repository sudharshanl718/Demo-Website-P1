import React from 'react'

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <div class="div1">
            <p><a href="Support.js" class="link">Support This Project</a></p>
            <p><a href="SignIn.js" class="link">Sign In</a></p>
            <p class="or">or</p>
            <p><a href="Create.js" class="link">Create an Account</a></p>
          </div>
        </nav>
        <div class="div2">
          <img src="https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/images/logo.svg" class="logo1" alt="logo"></img>
          <input type="search" class="search" placeholder="Search entire store here..."></input>
          <ion-icon name="search-sharp" class="icon1"></ion-icon>
          <ion-icon name="cart-sharp" class="icon2"></ion-icon>
        </div>
        <div class="div3">
            <ul class="ul1">
                <li><a href="What's-new.js">What's New</a></li>
                <li><a href="Women.js">Women <ion-icon name="chevron-down-outline" class="down-icon"></ion-icon></a>
                    <div>
                    <ul class="ul2">
                        <li><a href="Women.js/Tops.js">Tops <ion-icon name="chevron-forward-outline"></ion-icon></a>
                            <div>
                            <ul class="ul3">
                                <li><a href="Women.js/Jackets.js">Jackets</a></li>
                                <li><a href="Women.js/Hoodies-Sweatshirts.js">Hoodies & Sweatshirts</a></li>
                                <li><a href="Women.js/Tees.js">Tees</a></li>
                                <li><a href="Women.js/Bras-Tanks.js">Bras & Tanks</a></li>
                            </ul>
                            </div>
                        </li>
                        <li><a href="Women.js/Bottoms.js">Bottoms <ion-icon name="chevron-forward-outline"></ion-icon></a>
                            <div>
                            <ul class="ul4">
                                <li><a href="Women.js/Pants.js">Pants</a></li>
                                <li><a href="Women.js/Shorts.js">Shorts</a></li>
                            </ul>
                            </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li><a href="Men.js">Men <ion-icon name="chevron-down-outline" class="down-icon"></ion-icon></a>
                    <div>
                    <ul class="ul5">
                        <li><a href="Men.js/Tops.js">Tops <ion-icon name="chevron-forward-outline"></ion-icon></a>
                            <div>
                            <ul class="ul6">
                                <li><a href="Men.js/Jackets.js">Jackets</a></li>
                                <li><a href="Men.js/Hoodies-Sweatshirts.js">Hoodies & Sweatshirts</a></li>
                                <li><a href="Men.js/Tees.js">Tees</a></li>
                                <li><a href="Men.js/Tanks.js">Tanks</a></li>
                            </ul>
                            </div>
                        </li>
                        <li><a href="Men.js/Bottoms.js">Bottoms <ion-icon name="chevron-forward-outline"></ion-icon></a>
                            <div>
                            <ul class="ul7">
                                <li><a href="Men.js/Pants.js">Pants</a></li>
                                <li><a href="Men.js/Shorts.js">Shorts</a></li>
                            </ul>
                            </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li><a href="Gear.js">Gear <ion-icon name="chevron-down-outline" class="down-icon"></ion-icon></a>
                    <div>
                    <ul class="ul8">
                        <li><a href="Gear.js/Bags.js">Bags</a></li>
                        <li><a href="Gear.js/Fitness-equipment.js">Fitness Equipment</a></li>
                        <li><a href="Gear.js/Watches.js">Watches</a></li>
                    </ul>
                    </div>
                </li>
                <li><a href="Training.js">Training <ion-icon name="chevron-down-outline" class="down-icon"></ion-icon></a>
                    <div>
                    <ul class="ul9">
                        <li><a href="Training.js/Video-Download.js">Video Download</a></li>
                    </ul>
                    </div>
                </li>
                <li><a href="Sale.js">Sale</a></li>
            </ul>
        </div>
      </header>
    </div>
  )
}

export default Header