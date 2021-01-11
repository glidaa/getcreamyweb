import React, { Component, useState } from "react";
import "../assets/css/components.css";
import logo from "../assets/img/logo.png";
export default function home() {
  return (
    <div class="home">
      <div className="home-container">
        <h1 className="home-title">Welcome to CreamyWeb</h1>
        <img className="home-img" src={logo} alt="Logo Page" />
        <div className="home-paragraph">
          <p>
            Ever missed a sale for the dream sneakers you wished for? Creamy
            will send you an email when the product you want goes on sale. Not a
            store sale, the product you want sale.
          </p>

          <p>
            Just select the item, add an alert in Creamy and if it goes on sale
            we’ll send you an email. It’s simple. Single item sale alerts.
          </p>

          <p>
            Stop refreshing or rechecking sales, we send you an email when your
            product is at the price you want. To give you more control, Creamy
            lets you select how big the sale must be to get an alert. No more
            endless subscriptions to stores you like one product in. You set the
            sale price if you want to.
          </p>

          <p>
            You don’t have to clog up your emails with generic store sales
            anymore. We alert you when the price is right.
          </p>

          <p>
            <strong>Testimonial: </strong>
            <br />
            Sophie, 45. “I didn’t want to pay more than $100 for these Nike
            sneakers. Creamy alerted me when they finally got to that price. I’d
            given up and stopped checking but a one day 30% off sale got me
            there. I’m so thankful, I thought I’d never get them.”
          </p>

          <p>
            Amanda, 29. “Creamy meant I didn’t have to subscribe and unsubscribe
            to five different stores. I was starting to get spammed and it was
            driving me nuts. Now I only get an email when the products I choose
            go on sale. It’s a game-changer for my inbox.”
          </p>

          <p>
            Save money by paying less for clothes, presents, flights, work gear
            and more.
          </p>

          <p>
            How it works: Add Chrome Extension (like Honey) Shop like normal Set
            an alert for the item you want and we will email you when on sale!
          </p>

          <p>
            100,000 retailers We will watch any product sold online for you!!
          </p>

          <p>
            “I don't feel bad paying a discount” “I knew exactly when the shoes
            in my size go on sale, with only one in stock, I needed to be the
            first one” “Otherwie I would have missed the sale”
          </p>

          <p>Average discount 12%</p>
          <p>Number of products 20 Million+</p>
          <p>Average watchlist 25 products</p>
          <p>Start setting alarms now.</p>
          <p>Set alerts for things you want.</p>
        </div>
      </div>
    </div>
  );
}
