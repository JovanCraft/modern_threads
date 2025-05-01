import React from 'react';
import './Shop.css';

const products = [
  {
    title: "Sleek denim jacket",
    description: "A versatile denim jacket for every occasion.",
    image: "https://free-images.com/md/431e/jacket_denim_garment_clothing.jpg"
  },
  {
    title: "Chic maxi dress",
    description: "An elegant maxi dress that turns heads.",
    image: "https://free-images.com/md/2670/maxi_dress.jpg"
  },
  {
    title: "Classic white sneakers",
    description: "Stylish sneakers that elevate any outfit.",
    image: "https://free-images.com/md/3a8f/sneakers_white_converse_hipster.jpg"
  },
  {
    title: "Beige trench coat",
    description: "Timeless outerwear for any season.",
    image: "https://free-images.com/md/663c/trench_coat_for_male.jpg"
  },
  {
    title: "Everyday hoodie",
    description: "Soft, cozy, and perfect for layering.",
    image: "https://free-images.com/md/bb74/hoodie_orange_people_male.jpg"
  },
  {
    title: "Tailored blazer",
    description: "Polished style for work or events.",
    image: "https://free-images.com/md/6480/model_blazer_outside_male.jpg"
  },
  {
    title: "Canvas tote bag",
    description: "Carry your style everywhere.",
    image: "https://free-images.com/md/ced0/reusable_bag_4.jpg"
  }
];

function Shop() {
  return (
    <section className="shop">
      <div className="shop-header">
        <h5 className="shop-highlight">DISCOVER YOUR STYLE</h5>
        <h2>Elevate your wardrobe with our latest collections.</h2>
      </div>
      <div className="product-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <div className="product-img" style={{ backgroundImage: `url(${item.image})` }} />
            <div className="product-info">
              <h4>{item.title} <span>&rsaquo;</span></h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Shop;
