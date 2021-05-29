import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div class="welcome-area area-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="center-headline text-center">
              <h3>
                ჩვნეს
                <span class="color"> შესახებ</span>
              </h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <ul class="text-left">
              <li>
                <p>
                  ჩვენი პროდუქცია იქმნება თანამედროვე ტექნოლოგიის გამოყენებით.
                </p>
              </li>
              <li>
                <p>
                  სხვადასხვა ფაქტურის, დიზაინის, ზომის და ფერის შერწყმით,
                  ყინვაგამძლეობის სრული გარანტიით.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  ხარისხი და გარანტია არის კომპანიის დევიზი, რომლის მიღწევა
                  შესაძლებელია მაღალხარისხიანი, ეკოლოგიურად სუფთა მასალების
                  გამოყენებით,ტექნოლოგიური პროცესის სრული დაცვით და სისტემური
                  კონტროლით.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  გთავაზობთ,მაღალი ხარისხის ევრო სტანდარტებით დამზადებულ{" "}
                  <span>
                    {" "}
                    <Link to="/production/block1"> პროდუქციას.</Link>
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
