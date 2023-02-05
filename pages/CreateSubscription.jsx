import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import TabPanel from "../components/TabPanel";
import unavailableImage from "../images/unavailable.png";
import { getSpecificCoffees, getSubscriptionImages } from "../utils/queries";
import formatMoney from "../utils/formatMoney";
import formatProductPackaging from "../utils/formatProductPackaging";
// import
//styles
import {
  main,
  tabPanelClass,
  cards,
  card,
  cardDescription,
  cardImage,
  subscriptionSummary,
  priceClass,
  tabsClass,
  imageContainer,
  infoContainer,
  unavailable,
} from "../styles/CreateSubscription.module.css";
import formatProductDescription from "../utils/formatProductDescription";
import stripeCheckout from "../lib/stripeCheckout";

export const getStaticProps = async () => {
  const { assets } = await getSubscriptionImages();
  const images = {};
  assets.forEach((image) => (images[image.fileName] = image.url));
  const data = await getSpecificCoffees({ subscriptionOn: true });

  const coffees = {
    bagged: {
      dark: data.coffees.find(
        (coffee) => coffee.format === "bagged" && coffee.roast === "dark" && !coffee.uid.includes("espresso")
      ),
      medium: data.coffees.find((coffee) => coffee.format === "bagged" && coffee.roast === "medium") || null,
      espresso: data.coffees.find((coffee) => coffee.format === "bagged" && coffee.uid.includes("espresso")),
    },

    "single serve": {
      dark: data.coffees.find(
        (coffee) =>
          coffee.format === "single serve" && coffee.roast === "dark" && !coffee.uid.includes("espresso")
      ),
      medium:
        data.coffees.find((coffee) => coffee.format === "single serve" && coffee.roast === "medium") || null,
      espresso: data.coffees.find(
        (coffee) => coffee.format === "single serve" && coffee.uid.includes("espresso")
      ),
    },
  };

  return { props: { coffees, images } };
};

export default function CreateSubscription({ coffees, images }) {
  const [currentTab, setCurrentTab] = React.useState(0);
  const handleChange = (event, newCurrentTab) => {
    setCurrentTab(newCurrentTab);
  };

  const [subscriptionData, setSubscripitionData] = React.useState({});
  const tabLabels = ["format", "style", "roast", "size", "frequency", "subscribe"];

  const handleClick =
    (value) =>
    ({ currentTarget }) => {
      setSubscripitionData((subscriptionData) => {
        let { format, style, roast, size, frequency } = subscriptionData;
        //if all the subscription properties are set, then subscribe is true
        let subscribe =
          format && roast && size && frequency && ((format === "bagged" && style) || format === "single serve");
        //if format and roast and size are set we know which coffee the user chose
        let coffee = format && roast && size ? coffees[format][roast] : {};
        return {
          ...subscriptionData,
          [currentTarget.dataset.for]: value,
          subscribe,
          name: coffee?.name,
          description: formatProductDescription(style, size) || " ",
          image: coffee?.smallImage,
          price: coffee.sizes?.[size],
        };
      });

      if (value == "single serve") setCurrentTab(2);
      else setCurrentTab((currentTab) => currentTab + 1);
    };

  const handleSubscribe = () => stripeCheckout("subscribe", subscriptionData);
  return (
    <main className={main}>
      <div>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }} className={tabsClass}>
          <Tabs
            value={currentTab}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ "& .MuiTabs-indicator": { background: "#e63d2f" } }}
          >
            {tabLabels.map((attr, i) => {
              return (
                <Tab
                  key={i}
                  label={` ${attr}`}
                  style={{
                    display: attr === "style" && subscriptionData.format !== "bagged" ? "none" : "initial",
                    color: subscriptionData[attr] || currentTab === i ? "#e63d2f" : "#ffffff33",
                  }}
                  disabled={subscriptionData[attr] === undefined}
                />
              );
            })}
          </Tabs>
        </Box>
        <TabPanel className={tabPanelClass} currentTab={currentTab} index={0} dataFor="format">
          <h2> How do you brew ?</h2>
          <div className={cards}>
            <div onClick={handleClick("single serve")} className={card}>
              <img alt="" src="https://media.graphassets.com/Uq5C4GOgQOuNMt5LAsh3" className={cardImage} />
              <div className={cardDescription}>Single Serve Pods</div>
            </div>
            <div onClick={handleClick("bagged")} className={card}>
              <img src="https://media.graphassets.com/pJ09uvVKTACjVON1Mo1L" alt="" className={cardImage} />
              <div className={cardDescription}>Bagged Coffee</div>
            </div>
          </div>
        </TabPanel>
        <TabPanel className={tabPanelClass} currentTab={currentTab} index={1} dataFor="style">
          <h2>Choose your Style</h2>
          <div className={cards}>
            <div onClick={handleClick("whole bean")} className={card}>
              <img src="https://media.graphassets.com/VlD8l8EKT7mFiMOz3hgj" alt="" className={cardImage} />
              <div className={cardDescription}> Whole bean</div>
            </div>
            <div onClick={handleClick("ground")} className={card}>
              <img src="https://media.graphassets.com/QypNjYnCQ06bMZFKzhqn" alt="" className={cardImage} />
              <div className={cardDescription}>Ground</div>
            </div>
          </div>
        </TabPanel>

        <TabPanel className={tabPanelClass} currentTab={currentTab} index={2} dataFor="roast">
          <h2>Choose your roast</h2>

          <div className={cards}>
            {subscriptionData?.format
              ? Object.entries(coffees[subscriptionData?.format])?.map(([roast, data]) => {
                  return (
                    <div
                      onClick={handleClick(roast)}
                      className={`${card} ${!data ? unavailable : ""}`}
                      key={roast}
                    >
                      {data ? (
                        <img src={data?.smallImage} alt="" className={cardImage} />
                      ) : (
                        <img className={`${cardImage} `} src={unavailableImage.src} />
                      )}
                      <div className={cardDescription}>{`${roast} Roast`}</div>
                    </div>
                  );
                })
              : ""}
          </div>
        </TabPanel>
        <TabPanel className={tabPanelClass} currentTab={currentTab} index={3} dataFor="size">
          <h2> Choose your amount </h2>

          <div className={cards}>
            {subscriptionData?.roast
              ? Object.entries(coffees[subscriptionData?.format]?.[subscriptionData?.roast]?.sizes)?.map(
                  ([size]) => {
                    return (
                      <div onClick={handleClick(size)} className={card} key={size}>
                        <img src={images[size]} alt="" className={cardImage} />
                        <div className={cardDescription}>{size.replace("_", " ")}</div>
                      </div>
                    );
                  }
                )
              : ""}
          </div>
        </TabPanel>
        <TabPanel className={tabPanelClass} currentTab={currentTab} index={4} dataFor="frequency">
          <h2> Choose the frequency</h2>
          <div className={cards}>
            <div onClick={handleClick("30")} className={card}>
              <img src="https://media.graphassets.com/e2GLTuvT6SBc4F3WyKbG" className={cardImage}></img>
              <div className={cardDescription}> every month</div>
            </div>
            <div onClick={handleClick("60")} className={card}>
              <img src="https://media.graphassets.com/evmrpCqyR42pOVtuxJwj" alt="" className={cardImage} />
              <div className={cardDescription}> every 2 months</div>
            </div>
            <div onClick={handleClick("90")} className={card}>
              <img src="https://media.graphassets.com/hmKZeWXmSW6L3BhARZcI" alt="" className={cardImage} />
              <div className={cardDescription}> every 3 months</div>
            </div>
          </div>
        </TabPanel>
        <TabPanel className={tabPanelClass} currentTab={currentTab} index={5}>
          <div className={subscriptionSummary}>
            <div className={imageContainer}>
              <img src={subscriptionData.image} alt="" />
            </div>
            <div className={infoContainer}>
              <h3>
                {subscriptionData.roast} roast{" "}
                {subscriptionData.style ? `| ${subscriptionData.style}` : "death cups"}
              </h3>
              <p>
                {formatProductPackaging(subscriptionData?.format, subscriptionData?.size)} Shipped once every{" "}
                {subscriptionData.frequency} days
              </p>
              <p className={priceClass}>{formatMoney(subscriptionData.price)}</p>
              <button onClick={handleSubscribe}>Subscribe</button>
            </div>
          </div>
          <i>*You will be charged the above price each time your order ships</i>
        </TabPanel>
      </div>
    </main>
  );
}
