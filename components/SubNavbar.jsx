import React from "react";
import Link from "next/link";
import { home, textSubnavbar, textSmallscreen, rebellious } from "../styles/SubNavbar.module.css";


const SubNavbar = () => {
  return (
    <>
      <div className={home}>
        <div className={textSubnavbar}>
          <h2>
            <span>C</span>
            OLOMBIAN, KICKED UP !
          </h2>
          <p data-testid="subNavText">
            Roundhouse your bad habits and start the new year fresh with an all-new blend ready to fuel you
            forward. Available in Ground, Whole Bean and Death Cups for a limited time only.
          </p>
          <Link href={"/Shop"}>
            <button data-testid="subNavButton">SHOP</button>
          </Link>
        </div>
      </div>

      <div className={textSmallscreen}>
        <h3>COLOMBIAN, KICKED UP !</h3>
        <p>
          Roundhouse your bad habits and start the new year fresh with an all-new blend ready to fuel you
          forward. Available in Ground, Whole Bean and Death Cups for a limited time only.
        </p>
        <button>
          <Link href="/Shop">SHOP</Link>
        </button>
      </div>

      <div className={rebellious}>
        <h5>REBELLIOUS BY NATURE</h5>

        <p data-testid="subNavText2">
          Death Wish Coffee delivers a bold, full-bodied yet smooth and flavorful brew that will awaken your
          taste buds, with an extra kick of caffeine to ignite your attitude. We use the highest quality Fair
          Trade and organic arabica and robusta beans and roast them to never-bitter perfection.
        </p>

        <h6>Mugs up, mother functioners.</h6>
      </div>
    </>
  );
};

export default SubNavbar;
