import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { getSession, useSession, signOut } from "next-auth/react";
import {
  wrapperForm,
  form,
  wrapperAddress,
  formFieldInput,
  formFieldButtons,
  btnSave,
  btnCancel,
  btnAddAddress,
  info,
  btnUpdate,
  btnAddress
} from "../styles/TabsAccount.module.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const [display, setDisplay] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleSignOut() {
    signOut();
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "#201e1d",
        display: "flex",
        color: "white",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
        style={{
          maxWidth: "240px",
          width: "100%",
          
        }}
      >
        <Tab
          label="Order History"
          {...a11yProps(0)}
          style={{
            borderBottom: "2px solid #201e1d",
            color: "black",
            fontWeight: "bold",
            backgroundColor: "#dedbd9",
          }}
        />
        <Tab
          label="Addresses"
          {...a11yProps(1)}
          style={{
            borderBottom: "2px solid #201e1d",
            color: "black",
            fontWeight: "bold",
            backgroundColor: "#dedbd9",
          }}
        />
        <Tab
          label="Subscriptions"
          {...a11yProps(2)}
          style={{
            borderBottom: "2px solid #201e1d",
            color: "black",
            fontWeight: "bold",
            backgroundColor: "#dedbd9",
          }}
        />
        <Tab
          label="Log Out"
          {...a11yProps(3)}
          onClick={handleSignOut}
          style={{
            borderBottom: "2px solid #201e1d",
            color: "black",
            fontWeight: "bold",
            backgroundColor: "#dedbd9",
          }}
        />
      </Tabs>
      <TabPanel
        value={value}
        index={0}
        style={{
          backgroundColor: "lightGray",
          color: "black",
          fontWeight: "bold",
          width: "100%",
        }}
      >
        <h2>Order History</h2>
        <p>You haven't placed any orders yet.</p>
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
        style={{
          backgroundColor: "lightGray",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <div className={info}>
            <h4>Addresses</h4>
            <a>Edit</a>
            <a>Delete</a>
            <div className={btnAddress}>
              <button className={btnAddAddress} onClick={() => setDisplay(!display)}>ADD ADDRESS</button>
            </div>
          </div>
          {display && <div className={wrapperForm}>
            <div className={form}>
              <form>
                <div className={wrapperAddress}>
                  <div>
                    <input
                      className={formFieldInput}
                      type="text"
                      id="address1"
                      name="address[address1]"
                      placeholder="Address"
                      required
                    />
                  </div>
                </div>
                <div className={wrapperAddress}>
                  <div>
                    <input
                      className={formFieldInput}
                      type="text"
                      id="address2"
                      name="address[address2]"
                      placeholder="Apartment, suite, etc"
                      required
                    />
                  </div>
                </div>
                <div className={wrapperAddress}>
                  <div>
                    <input
                      className={formFieldInput}
                      type="text"
                      id="city"
                      name="address[city]"
                      placeholder="City"
                      required
                    />
                  </div>
                </div>
                <div className={wrapperAddress}>
                  <div>
                    <select
                      className={formFieldInput}
                      id="country"
                      name="address[country]"
                    >
                      <option value="United States">United States</option>
                    </select>
                  </div>
                </div>
                <div className={wrapperAddress}>
                  <div>
                    <select
                      className={formFieldInput}
                      id="province"
                      name="address[province]"
                    >
                      <option>Alabama</option>
                    </select>
                  </div>
                </div>
                <div className={wrapperAddress}>
                  <div>
                    <input
                      className={formFieldInput}
                      type="text"
                      id="zip"
                      name="address[zip]"
                      placeholder="ZIP/postal code"
                      required
                    />
                  </div>
                </div>
                <div className={formFieldButtons}>
                  <button className={btnSave}>SAVE ADDRESS</button>
                  <button className={btnCancel}>CANCEL</button>
                </div>
              </form>
            </div>
          </div>}
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2>My SUBSCRIPTIONS</h2>
        <p>
          Don’t lose your head—we’re making some updates to your portal now.
          Your subscription will process as usual and you’ll be able to login
          shortly.
        </p>
        <h3>Have you updated your payment information?</h3>
        <p>
          Click the button below and we will send an email your way. You will be
          prompted to update your credit card information.
        </p>
        <button className={btnUpdate}>UPDATE</button>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Log Out
      </TabPanel>
    </Box>
  );
}
