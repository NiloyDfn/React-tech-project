import React from "react";
import vg from "../assets/2.webp"
import { FaGoogle , FaAmazon, FaYoutube, FaInstagram } from "react-icons/fa";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>DfnTech</h1>
          <p>Lorem, ipsum dolor sit amet.</p>
        </main>
      </div>

      <div className="home2">
        <img className="omg" src={vg} alt="Graphics" />
        <div className="">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            corporis quod eveniet consequatur quam veritatis in dignissimos
            totam eos officia ab, reprehenderit delectus, architecto distinctio
            porro id, suscipit quibusdam fugit.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
            <h1>Who We Are?</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate temporibus, sunt eos quod ullam est fugiat, voluptate assumenda fuga unde laborum aliquam atque totam dolorum perferendis doloribus. Neque, at omnis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, explicabo fuga distinctio unde, aspernatur rem assumenda doloribus pariatur soluta incidunt nemo inventore earum non laboriosam illum aliquid temporibus accusantium quibusdam.</p>
        </div>
      </div>
      <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay : ".3s",
          }}>
            <FaGoogle/>
            <p>Google</p>
          </div>
          <div style={{
            animationDelay : ".5s",
          }}>
            <FaAmazon/>
            <p>Amazon</p>
          </div>
          <div style={{
            animationDelay : ".7s",
          }}>
            <FaYoutube/>
            <p>Youtube</p>
          </div>
          <div style={{
            animationDelay : "1s",
          }}>
            <FaInstagram/>
            <p>instagram</p>
          </div>
        </article>
      </div>
      </div>
    </>
  );
};

export default Home;
