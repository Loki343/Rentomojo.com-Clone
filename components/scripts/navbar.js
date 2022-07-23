let navbar1 = () => {
    return `
    <link rel="stylesheet" href="/components/styles/navBarStyle.css">
    <div id="kau_main">
        <div id="kau_innerMain">
            <img id="kau_logo" src="../images/icons/image.svg" alt="">
            <select name="" id="kau_city">
                <option value="">City</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Delhi">Delhi</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Noida">Noida</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Hydrabad">Hydrabad</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
            </select>

            <input id="kau_scarch" type="text" placeholder="Search for products">
            <span>
                <img id="kau_searchLogo" src="../images/icons/image2.svg" alt="">
            </span>
            <span>
                <img id="kau_cartLogo" src="../images/icons/image1.svg" alt="">
            </span>
            <span id="kau_cart">Cart</span>

            <div>
                <button id="kau_button">LOGIN/SIGNUP</button>
                <div id="kau_show-on-hover" class="kau_dropdc">
                    <p>
                        <img src="https://cdn-icons-png.flaticon.com/128/8033/8033582.png" alt="">
                        <a href="">My Account</a>
                    </p>

                    <p>
                        <img src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" alt="">
                        <a href="">My Wishlist</a>
                    </p>

                    <p>
                        <img src="https://cdn-icons-png.flaticon.com/128/3524/3524659.png" alt="">
                        <a href="">Setting</a>
                    </p>

                    <p>
                        <img src="../images/icons/logouticon.png"
                            alt="">
                        <a href="">Logout</a>
                    </p>
                </div>
            </div>

        </div>
    </div>`
}
function kau_myfunc() {
    let div = document.querySelector("#kau_show-on-hover");
    div.classList.toggle("kau_show");
}
export default navbar1;