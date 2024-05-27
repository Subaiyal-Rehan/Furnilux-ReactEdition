import Navbar from "./Components/Navbar/Navbar";
import { FaPinterest, FaLinkedin, FaInstagram, FaRegEnvelope, FaFacebookF,  FaArrowRightLong, FaCircleCheck } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import GreenOutlineBtn from "./Components/Buttons/GreenOutlineBtn";
import GreenBtn from "./Components/Buttons/GreenBtn";
import Slider from "./Components/Sliders/Slider";
import Cards from "./Components/Cards/Cards";
import "./App.css";

function App() {
  let heroBoxesArr = ["Sofa", "Bed", "Dresser", "Shelf", "Lamp", "Decor"];
  let livingRoomCardsArr = [
    {
      image: "./src/Images/Living Room/Sofa.jpeg",
      name: "Comfortable Sofa",
      price: "$79.99",
    },
    {
      image: "./src/Images/Living Room/Table-Lamp.webp",
      name: "Elegant Table Lamp",
      price: "$29.99",
    },
    {
      image: "./src/Images/Living Room/Padded-Chair.jpg",
      name: "Classy Padded Chair",
      price: "$69.99",
    },
  ];

  let AllProductsArr = [
    {
      image: "./src/Images/All Products/Stylish-Divan.jpg",
      name: "Stylish Divan",
      price: "$74.99",
    },
    {
      image: "./src/Images/All Products/Dressing-Table.webp",
      name: "Elegant Dressing Table",
      price: "$59.99",
    },
    {
      image: "./src/Images/All Products/Classy-Chair.jpg",
      name: "Classy Chair",
      price: "$69.99",
    },
    {
      image: "./src/Images/All Products/Stylish-Lamp.jpg",
      name: "Stylish Lamp",
      price: "$34.99",
    },
    {
      image: "./src/Images/All Products/Stylish-Bed.jpg",
      name: "Stylish Bed",
      price: "$149.99",
    },
    {
      image: "./src/Images/Living Room/Padded-Chair.jpg",
      name: "Classy Padded Chair",
      price: "$69.99",
    },
    {
      image: "./src/Images/Living Room/Sofa.jpeg",
      name: "Comfortable Sofa",
      price: "$79.99",
    },
    {
      image: "./src/Images/All Products/Wooden-Shelf.jpg",
      name: "Wooden Shelf",
      price: "$49.99",
    },
    {
      image: "./src/Images/Living Room/Table-Lamp.webp",
      name: "Elegant Table Lamp",
      price: "$29.99",
    },
  ];

  let reviewArr = [
    {
      isReview: true,
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex enim nisi distinctio facere sint numquam vitae sed optio laborum.",
      image: "./src/Images/Review Slider/Lounge-Chair.png",
      name: "Marie Elisa",
      cardName: "Stylish Chair",
      cardPrice: "$50.99",
    },
    {
      isReview: true,
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex enim nisi distinctio facere sint numquam vitae sed optio laborum.",
      image: "./src/Images/Review Slider/Computer-Table.webp",
      name: "Devin AI",
      cardName: "Computer Desk",
      cardPrice: "$69.99",
    },
    {
      isReview: true,
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex enim nisi distinctio facere sint numquam vitae sed optio laborum.",
      image: "./src/Images/Review Slider/Bookshelf.webp",
      name: "Queen Elizabeth",
      cardName: "Bookshelf",
      cardPrice: "$59.99",
    },
    {
      isReview: true,
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex enim nisi distinctio facere sint numquam vitae sed optio laborum.",
      image: "./src/Images/Review Slider/Table.png",
      name: "Babar Azam",
      cardName: "Modern Coffee Table",
      cardPrice: "$54.99",
    },
  ];

  return (
    <>
      <header>
        <div className="navbarTop bg-green text-center p-1 text-white fw-bold">
          <span>
            <FaCircleCheck /> Enjoy 37% Off - Shop Now and Save Big!
          </span>
        </div>
        <Navbar />
      </header>

      <main>
        {/* Hero Section Starts */}
        <section className="HeroSection">
          <div className="heroContainer position-relative d-flex justify-content-center align-items-center">
            <div className="heroTextContainer d-flex flex-column justify-content-center align-items-center text-center">
              <h1 className="display-4 fw-bold">
                FurniLux - Your Brand for Stylish Living
              </h1>
              <p className="fs-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                debitis. Quod, repellendus! Provident, itaque?
              </p>
              <GreenOutlineBtn
                class="mt-3"
                value="Shop Now"
                icon={<FaArrowRightLong />}
              />
            </div>
            <div className="heroBoxes d-flex gap-3">
              {heroBoxesArr.map((item: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="heroBox d-flex gap-2 align-items-center justify-content-center p-2 py-3 rounded bg-white"
                  >
                    <img
                      src="./src/Images/hero-background.jpg"
                      className=""
                      width="40"
                    />
                    <span className="fw-bold">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Hero Section Ends */}

        {/* Living-Room Section Starts */}
        <section className="livingRoomSection p-section">
          <h2 className="text-green fs-1 text-center fw-bold">
            Elevate Your Living Room
          </h2>
          <Cards arr={livingRoomCardsArr} />
        </section>
        {/* Living-Room Section Ends */}

        {/* Luxurious Slider Section Starts */}
        <section className="LuxuriousSliderSection">
          <Slider
            arr={[
              {
                isReview: false,
                src: "./src/Images/Luxurious Slider/Slider-Bed.png",
                heading: "Luxurious Bed",
                para: "Luxurious Bed",
                price: "$299",
              },
              {
                isReview: false,
                src: "./src/Images/Luxurious Slider/Slider-Cupboard.png",
                heading: "Elegant Cupboard",
                para: "Elegant Cupboard",
                price: "$299",
              },
              {
                isReview: false,
                src: "./src/Images/Luxurious Slider/Slider-Showcase.png",
                heading: "Modern Showcase",
                para: "Modern Showcase",
                price: "$299",
              },
            ]}
          />
        </section>
        {/* Luxurious Slider Section Ends */}

        {/* All Products Section Starts */}
        <section className="AllProductsSection p-section">
          <h2 className="text-green fs-1 text-center fw-bold">All Products</h2>
          <Cards arr={AllProductsArr} />
          <div className="container d-flex justify-content-end my-4">
            <a className="text-decoration-none text-cyan me-2" href="/">
              See More <FaArrowRightLong />
            </a>
          </div>
        </section>
        {/* All Products Section Ends */}

        {/* Review Section Starts */}
        <section className="ReviewSection">
          <Slider arr={reviewArr} />
        </section>
        {/* Review Section Ends */}

        {/* Blog Section Starts */}
        <section className="ReviewSection p-section">
          <div className="container text-center mb-4">
            <h2 className="text-green fs-1 fw-bold">Blog & Insights</h2>
            <p className="text-cyan opacity-75 fs-4">
              Explore Our Blog for Design/Inspiration and Tips
            </p>
          </div>
          <div className="row container m-auto">
            {livingRoomCardsArr.map((item: any, index: any) => (
              <div key={index} className="BlogCard mb-4 col-md-4">
                <div className="BlogImage position-relative">
                  <img src={item.image} alt="" />
                  <div className="position-absolute w-75 p-3 pb-5 end-0">
                    <h3 className="fs-6">
                      The Art of Cozy: Elevate your home with Fall Decor
                    </h3>
                    <p className="fs-7">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto hic earum id nisi soluta quasi tempora suscipit.
                    </p>
                    <a className="text-cyan m-0 text-decoration-none" href="/">
                      Read More <FaArrowRightLong />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Blog Section Ends */}
      </main>

      <footer>
        <div className="footerTop row container m-auto">
            <div className="col-12 col-md-6 col-lg-3 text-green">
              <h2 className="fw-bold fs-4">furniLux</h2>
              <p className="opacity-75">Designing Dreams, Crafting Comfort</p>
              <ul className="p-0">
                <li className="mb-3 text-green"><IoCallOutline /> +00 123 123 123</li>
                <li className="mb-3 text-green"><FaRegEnvelope /> furnilux@business.com</li>
                <li className="mb-3 text-green"><IoLocationOutline /> 123 Homestd Lane, Suite 456 Civil, United Interiors</li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-2 text-green">
              <h2 className="fw-bold fs-4">About Us</h2>
              <ul className="p-0 mt-3">
                <li className="my-2"><a className="text-decoration-none text-green" href="/"><CgArrowTopRight /> About us</a></li>
                <li className="my-2"><a className="text-decoration-none text-green" href="/"><CgArrowTopRight /> Blog</a></li>
                <li className="my-2"><a className="text-decoration-none text-green" href="/"><CgArrowTopRight /> Contact us</a></li>
                <li className="my-2"><a className="text-decoration-none text-green" href="/"><CgArrowTopRight /> Popular questions</a></li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-2 text-green">
              <h2 className="fw-bold fs-4">What's Popular</h2>
              <ul className="p-0 mt-3">
                <li className="my-2"><a className="text-decoration-none text-green" href="/"><CgArrowTopRight /> King Size Beds</a></li>
                <li className="my-2"><a className="text-decoration-none text-green" href="/"><CgArrowTopRight /> Sofas</a></li>
                <li className="my-2"><a className="text-decoration-none text-green" href="/"><CgArrowTopRight /> Chairs</a></li>
                <li className="my-2"><a className="text-decoration-none text-green" href="/"><CgArrowTopRight /> Decorative Lamps</a></li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-green">
              <h2 className="fw-bold fs-4">Get 15% off your first order!</h2>
              <p className="opacity-75">Subscribe our news letter and get discount for your first order! also receive updates and more</p>
              <div className="subscribeInput p-1 rounded-pill d-flex align-items-center">
                <span className="fs-5 ms-2"><FaRegEnvelope /></span>
                <input className="border-0 rounded-pill outline-none bg-transparent px-2 w-75" type="text" placeholder="Email Address" />
                <GreenBtn value="Subscribe" />
              </div>
            </div>
        </div>
        <div className="footerBottom container">
          <div className="d-flex fs-5 gap-2">
            <span><FaFacebookF /></span>
            <span><FaInstagram /></span>
            <span><FaLinkedin /></span>
            <span><FaPinterest /></span>
          </div>
          <div className="mt-4 fs-5 d-flex flex-md-row flex-column align-items-center justify-content-between">
            <span>&copy; 2024 FurniLux. All Rights Reserved.</span>
            <span><img className="img-fluid" src="./src/Images/Footer Payment Methods.png" width="400" /></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
