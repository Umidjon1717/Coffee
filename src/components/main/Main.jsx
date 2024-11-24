import React from "react";
import "./Main.scss";
import img1 from "../../assets/Rectangle_4.png";
import img2 from "../../assets/Rectangle_4-2.png";
import img3 from "../../assets/Rectangle_4-3.png";
import img4 from "../../assets/Rectangle_13.png";
import img5 from "../../assets/Rectangle_7.png";
import img6 from "../../assets/Rectangle_14.png";
import img7 from "../../assets/Rectangle_2.png";
import img8 from "../../assets/shopping-bag.svg";
import img9 from "../../assets/Group_38.svg";
import img10 from "../../assets/blender.png";

const Main = () => {
  return (
    <main>
      <section className="Hero">
        <div className="container_main">
          <div className="Hero__content">
            <h1>Enjoy Your Morning Coffee.</h1>
            <p>
              The Coofee is Brewed by Fist Roasting the Green Coffee Beans Over
              Hot Coals in Brazier. Given to Opportunity
            </p>{" "}
            <button>Test Coffee</button>
          </div>
        </div>
      </section>

      <section className="Flavor">
        <div className="container_main">
          <div className="Flavor__content">
            <div className="Flavor__content__img">
              <p>
                <span>01 </span>Best Coffee Flavour
              </p>
              <img src={img1} alt="img" />
            </div>
            <div className="Flavor__content__img">
              <p>
                <span>02 </span>Place to get lost
              </p>
              <img src={img2} alt="img" />
            </div>
            <div className="Flavor__content__img">
              <p>
                <span>03 </span>Proper roesting
              </p>
              <img src={img3} alt="img" />
            </div>
          </div>
        </div>
      </section>

      <section className="story">
        <div className="container_main">
          <div className="story__img">
            <div className="story__img__flex">
              <img src={img4} alt="img4" />
              <img src={img5} alt="img5" />
            </div>
            <div className="story__img__flex2">
              <img src={img6} alt="img6" />
            </div>
            <div className="story__img__div">
              <h3>Our history</h3>
              <h2>Create a new story with us</h2>
              <p>
                mauris rhoncus in imperdiet placerat. vestibu emismd nisl
                suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa
                nibhtincidunt. donec et nibh maximus, est eu, mattis nuce.
                preasent ut quam quis quam venen atis fringilla. morbi
                vastibulum id tells mmodo mattis. aliauam erat volutpal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="brazil">
        <div className="container_main">
          <div className="brazil__content">
            <h3>Popular Product</h3>
            <h2>Coffee popular Product</h2>
          </div>
          <div className="brazil__cards">
            <div className="brazil__card">
              <img src={img7} alt="img7" />
              <p></p>
              <p>brazil coffee gred</p>
              <button>
                <img src={img8} alt="img8" /> Add to cart
              </button>
            </div>
            <div className="brazil__card">
              <img src={img7} alt="img7" />
              <img src={img9} alt="img9" />
              <p>brazil coffee gred</p>
              <p>
                Price - <span>$320.00/</span> $358
              </p>
            </div>
            <div className="brazil__card">
              <img src={img7} alt="img7" />
              <img src={img9} alt="img9" />
              <p>brazil coffee gred</p>
              <p>
                Price - <span>$320.00/</span> $358
              </p>
            </div>
          </div>
          <button>View all product</button>
        </div>
      </div>

      <section className="blender">
        <div className="container_main">
          <div className="blender__info">
            <div className="blender__img">
              <img src={img10} alt="img10" />
            </div>
            <div className="blender__content">
              <h2>Coffee machine, buy for home</h2>
              <p>
                mauris rhoncus in imperdiet placerat. vestibu emismd nisl
                suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa
                nibhtincidunt. donec et nib maximus, est eu, mattis nuce.
                preasent ut quam quis quam venen atis fri ngilla. morbi
                vastibulum id tells mmodo mattis. aliauam erat volutpal.
              </p>
              <button>Discover now</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
