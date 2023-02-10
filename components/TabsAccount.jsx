import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { getSession, useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios'

import {
  wrapperForm,
  wrapperAddress,
  formFieldInput,
  formFieldButtons,
  btnSave,
  btnCancel,
  btnAddAddress,
  info,
  btnUpdate,
  leftSide,
  btnEditDelete
} from "../styles/TabsAccount.module.css";
function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
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

const theme = createTheme();

export default function VerticalTabs() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const style = matches ? {flexDirection: 'row',
                          display: 'flex',
                          justifyContent: 'center',
                                                 
                          } : {minWidth: "240px",
                          width: "300px"}


  const [value, setValue] = React.useState(0);

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };
  
  function handleSignOut() {
    signOut();
  }

  const [display, setDisplay] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [address, setAddress] = useState({
    address1: "",
    address2: "",
    city: "",
    country: "",
    zip: "",
  });
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [mode, setMode] = useState("add");

  const handleChange = (event) => {
    setAddress({ ...address, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (mode === "add") {
      setAddresses([...addresses, address]);
    } else {
      const newAddresses = [...addresses];
      newAddresses[selectedAddress] = address;
      setAddresses(newAddresses);
      setMode("add");
    }
    setAddress({
      address1: "",
      address2: "",
      city: "",
      country: "",
      zip: "",
    });

    try {
      const response = await axios.post('http://localhost:3000/api/form', address);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

  };

  const handleEdit = (index) => {
    setAddress(addresses[index]);
    setSelectedAddress(index);
    setMode("edit");
    setDisplay(true);
  };

  const handleDelete = (index) => {
    const newAddresses = [...addresses];
    newAddresses.splice(index, 1);
    setAddresses(newAddresses);
  };

  return (
    <ThemeProvider theme={theme}>
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "#201e1d",
        display: "flex",
        color: "white",
      }}
    >
      <Tabs
        orientation={matches ? 'horizontal' : 'vertical'}
        style={style}
        variant="fullWidth"
        value={value}
        onChange={handleChangeTabs}
        aria-label="Vertical tabs example"
        sx={{
        borderRight: 8, borderColor: "divider",
        "& button:focus": {backgroundColor: 'gray!important'},
        "& button:hover": {filter: 'brightness(50%)'},
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
            textTransform: 'capitalize'
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
            textTransform: 'capitalize'
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
            textTransform: 'capitalize'
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
            textTransform: 'capitalize'
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
            
            <div className={leftSide}>
            <h4>Addresses</h4>
            
                  {addresses.map((address, index) => (
                    <div key={index}>
                      <p> {address.address1}, {address.address2}</p>
                      <p> {address.city}, {address.country}, {address.zip}</p>
                      
                      <button className={btnEditDelete} onClick={() => handleEdit(index)}>Edit</button>
                      <button className={btnEditDelete} onClick={() => handleDelete(index)}>
                        Delete
                      </button>
                      
                    </div>
                  ))}
                
              <button
                onClick={() => setDisplay(true)}
                className={btnAddAddress}
              >
                ADD ADDRESS
              </button>
            </div>
            {display && (
              <div className={wrapperForm}>
                <form onSubmit={handleSubmit}>
                  <div className={wrapperAddress}>
                    <div>
                      <input
                        className={formFieldInput}
                        type="text"
                        name="address1"
                        id="address1"
                        value={address.address1}
                        onChange={handleChange}
                        placeholder={"Address"}
                      />
                    </div>
                  </div>
                  <div className={wrapperAddress}>
                    <div>
                      <input
                        className={formFieldInput}
                        type="text"
                        name="address2"
                        id="address2"
                        value={address.address2}
                        onChange={handleChange}
                        placeholder={"Apartment, suite, etc."}
                      />
                    </div>
                  </div>
                  <div className={wrapperAddress}>
                    <div>
                      <input
                        className={formFieldInput}
                        type="text"
                        name="city"
                        id="city"
                        value={address.city}
                        onChange={handleChange}
                        placeholder={"City"}
                      />
                    </div>
                  </div>
                  <div className={wrapperAddress}>
                    <div>
                      <select
                        className={formFieldInput}
                        name="country"
                        id="country"
                        value={address.country}
                        onChange={handleChange}
                      >
                        <option value="">United States</option>
                        <option value="Afghanistan">Afghanistan </option>
                        <option value="Afrique_Centrale">
                          Afrique_Centrale{" "}
                        </option>
                        <option value="Afrique_du_sud">Afrique_du_Sud </option>
                        <option value="Albanie">Albanie </option>
                        <option value="Algerie">Algerie </option>
                        <option value="Allemagne">Allemagne </option>
                        <option value="Andorre">Andorre </option>
                        <option value="Angola">Angola </option>
                        <option value="Anguilla">Anguilla </option>
                        <option value="Arabie_Saoudite">
                          Arabie_Saoudite{" "}
                        </option>
                        <option value="Argentine">Argentine </option>
                        <option value="Armenie">Armenie </option>
                        <option value="Australie">Australie </option>
                        <option value="Autriche">Autriche </option>
                        <option value="Azerbaidjan">Azerbaidjan </option>

                        <option value="Bahamas">Bahamas </option>
                        <option value="Bangladesh">Bangladesh </option>
                        <option value="Barbade">Barbade </option>
                        <option value="Bahrein">Bahrein </option>
                        <option value="Belgique">Belgique </option>
                        <option value="Belize">Belize </option>
                        <option value="Benin">Benin </option>
                        <option value="Bermudes">Bermudes </option>
                        <option value="Bielorussie">Bielorussie </option>
                        <option value="Bolivie">Bolivie </option>
                        <option value="Botswana">Botswana </option>
                        <option value="Bhoutan">Bhoutan </option>
                        <option value="Boznie_Herzegovine">
                          Boznie_Herzegovine{" "}
                        </option>
                        <option value="Bresil">Bresil </option>
                        <option value="Brunei">Brunei </option>
                        <option value="Bulgarie">Bulgarie </option>
                        <option value="Burkina_Faso">Burkina_Faso </option>
                        <option value="Burundi">Burundi </option>

                        <option value="Caiman">Caiman </option>
                        <option value="Cambodge">Cambodge </option>
                        <option value="Cameroun">Cameroun </option>
                        <option value="Canada">Canada </option>
                        <option value="Canaries">Canaries </option>
                        <option value="Cap_vert">Cap_Vert </option>
                        <option value="Chili">Chili </option>
                        <option value="Chine">Chine </option>
                        <option value="Chypre">Chypre </option>
                        <option value="Colombie">Colombie </option>
                        <option value="Comores">Colombie </option>
                        <option value="Congo">Congo </option>
                        <option value="Congo_democratique">
                          Congo_democratique{" "}
                        </option>
                        <option value="Cook">Cook </option>
                        <option value="Coree_du_Nord">Coree_du_Nord </option>
                        <option value="Coree_du_Sud">Coree_du_Sud </option>
                        <option value="Costa_Rica">Costa_Rica </option>
                        <option value="Cote_d_Ivoire">Côte_d_Ivoire </option>
                        <option value="Croatie">Croatie </option>
                        <option value="Cuba">Cuba </option>

                        <option value="Danemark">Danemark </option>
                        <option value="Djibouti">Djibouti </option>
                        <option value="Dominique">Dominique </option>

                        <option value="Egypte">Egypte </option>
                        <option value="Emirats_Arabes_Unis">
                          Emirats_Arabes_Unis{" "}
                        </option>
                        <option value="Equateur">Equateur </option>
                        <option value="Erythree">Erythree </option>
                        <option value="Espagne">Espagne </option>
                        <option value="Estonie">Estonie </option>
                        <option value="Etats_Unis">Etats_Unis </option>
                        <option value="Ethiopie">Ethiopie </option>

                        <option value="Falkland">Falkland </option>
                        <option value="Feroe">Feroe </option>
                        <option value="Fidji">Fidji </option>
                        <option value="Finlande">Finlande </option>
                        <option value="France">France </option>

                        <option value="Gabon">Gabon </option>
                        <option value="Gambie">Gambie </option>
                        <option value="Georgie">Georgie </option>
                        <option value="Ghana">Ghana </option>
                        <option value="Gibraltar">Gibraltar </option>
                        <option value="Grece">Grece </option>
                        <option value="Grenade">Grenade </option>
                        <option value="Groenland">Groenland </option>
                        <option value="Guadeloupe">Guadeloupe </option>
                        <option value="Guam">Guam </option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guernesey">Guernesey </option>
                        <option value="Guinee">Guinee </option>
                        <option value="Guinee_Bissau">Guinee_Bissau </option>
                        <option value="Guinee equatoriale">
                          Guinee_Equatoriale{" "}
                        </option>
                        <option value="Guyana">Guyana </option>
                        <option value="Guyane_Francaise ">
                          Guyane_Francaise{" "}
                        </option>

                        <option value="Haiti">Haiti </option>
                        <option value="Hawaii">Hawaii </option>
                        <option value="Honduras">Honduras </option>
                        <option value="Hong_Kong">Hong_Kong </option>
                        <option value="Hongrie">Hongrie </option>

                        <option value="Inde">Inde </option>
                        <option value="Indonesie">Indonesie </option>
                        <option value="Iran">Iran </option>
                        <option value="Iraq">Iraq </option>
                        <option value="Irlande">Irlande </option>
                        <option value="Islande">Islande </option>
                        <option value="Israel">Israel </option>
                        <option value="Italie">italie </option>

                        <option value="Jamaique">Jamaique </option>
                        <option value="Jan Mayen">Jan Mayen </option>
                        <option value="Japon">Japon </option>
                        <option value="Jersey">Jersey </option>
                        <option value="Jordanie">Jordanie </option>

                        <option value="Kazakhstan">Kazakhstan </option>
                        <option value="Kenya">Kenya </option>
                        <option value="Kirghizstan">Kirghizistan </option>
                        <option value="Kiribati">Kiribati </option>
                        <option value="Koweit">Koweit </option>

                        <option value="Laos">Laos </option>
                        <option value="Lesotho">Lesotho </option>
                        <option value="Lettonie">Lettonie </option>
                        <option value="Liban">Liban </option>
                        <option value="Liberia">Liberia </option>
                        <option value="Liechtenstein">Liechtenstein </option>
                        <option value="Lituanie">Lituanie </option>
                        <option value="Luxembourg">Luxembourg </option>
                        <option value="Lybie">Lybie </option>

                        <option value="Macao">Macao </option>
                        <option value="Macedoine">Macedoine </option>
                        <option value="Madagascar">Madagascar </option>
                        <option value="Madère">Madère </option>
                        <option value="Malaisie">Malaisie </option>
                        <option value="Malawi">Malawi </option>
                        <option value="Maldives">Maldives </option>
                        <option value="Mali">Mali </option>
                        <option value="Malte">Malte </option>
                        <option value="Man">Man </option>
                        <option value="Mariannes du Nord">
                          Mariannes du Nord{" "}
                        </option>
                        <option value="Maroc">Maroc </option>
                        <option value="Marshall">Marshall </option>
                        <option value="Martinique">Martinique </option>
                        <option value="Maurice">Maurice </option>
                        <option value="Mauritanie">Mauritanie </option>
                        <option value="Mayotte">Mayotte </option>
                        <option value="Mexique">Mexique </option>
                        <option value="Micronesie">Micronesie </option>
                        <option value="Midway">Midway </option>
                        <option value="Moldavie">Moldavie </option>
                        <option value="Monaco">Monaco </option>
                        <option value="Mongolie">Mongolie </option>
                        <option value="Montserrat">Montserrat </option>
                        <option value="Mozambique">Mozambique </option>

                        <option value="Namibie">Namibie </option>
                        <option value="Nauru">Nauru </option>
                        <option value="Nepal">Nepal </option>
                        <option value="Nicaragua">Nicaragua </option>
                        <option value="Niger">Niger </option>
                        <option value="Nigeria">Nigeria </option>
                        <option value="Niue">Niue </option>
                        <option value="Norfolk">Norfolk </option>
                        <option value="Norvege">Norvege </option>
                        <option value="Nouvelle_Caledonie">
                          Nouvelle_Caledonie{" "}
                        </option>
                        <option value="Nouvelle_Zelande">
                          Nouvelle_Zelande{" "}
                        </option>

                        <option value="Oman">Oman </option>
                        <option value="Ouganda">Ouganda </option>
                        <option value="Ouzbekistan">Ouzbekistan </option>

                        <option value="Pakistan">Pakistan </option>
                        <option value="Palau">Palau </option>
                        <option value="Palestine">Palestine </option>
                        <option value="Panama">Panama </option>
                        <option value="Papouasie_Nouvelle_Guinee">
                          Papouasie_Nouvelle_Guinee{" "}
                        </option>
                        <option value="Paraguay">Paraguay </option>
                        <option value="Pays_Bas">Pays_Bas </option>
                        <option value="Perou">Perou </option>
                        <option value="Philippines">Philippines </option>
                        <option value="Pologne">Pologne </option>
                        <option value="Polynesie">Polynesie </option>
                        <option value="Porto_Rico">Porto_Rico </option>
                        <option value="Portugal">Portugal </option>

                        <option value="Qatar">Qatar </option>

                        <option value="Republique_Dominicaine">
                          Republique_Dominicaine{" "}
                        </option>
                        <option value="Republique_Tcheque">
                          Republique_Tcheque{" "}
                        </option>
                        <option value="Reunion">Reunion </option>
                        <option value="Roumanie">Roumanie </option>
                        <option value="Royaume_Uni">Royaume_Uni </option>
                        <option value="Russie">Russie </option>
                        <option value="Rwanda">Rwanda </option>

                        <option value="Sahara Occidental">
                          Sahara Occidental{" "}
                        </option>
                        <option value="Sainte_Lucie">Sainte_Lucie </option>
                        <option value="Saint_Marin">Saint_Marin </option>
                        <option value="Salomon">Salomon </option>
                        <option value="Salvador">Salvador </option>
                        <option value="Samoa_Occidentales">
                          Samoa_Occidentales
                        </option>
                        <option value="Samoa_Americaine">
                          Samoa_Americaine{" "}
                        </option>
                        <option value="Sao_Tome_et_Principe">
                          Sao_Tome_et_Principe{" "}
                        </option>
                        <option value="Senegal">Senegal </option>
                        <option value="Seychelles">Seychelles </option>
                        <option value="Sierra Leone">Sierra Leone </option>
                        <option value="Singapour">Singapour </option>
                        <option value="Slovaquie">Slovaquie </option>
                        <option value="Slovenie">Slovenie</option>
                        <option value="Somalie">Somalie </option>
                        <option value="Soudan">Soudan </option>
                        <option value="Sri_Lanka">Sri_Lanka </option>
                        <option value="Suede">Suede </option>
                        <option value="Suisse">Suisse </option>
                        <option value="Surinam">Surinam </option>
                        <option value="Swaziland">Swaziland </option>
                        <option value="Syrie">Syrie </option>

                        <option value="Tadjikistan">Tadjikistan </option>
                        <option value="Taiwan">Taiwan </option>
                        <option value="Tonga">Tonga </option>
                        <option value="Tanzanie">Tanzanie </option>
                        <option value="Tchad">Tchad </option>
                        <option value="Thailande">Thailande </option>
                        <option value="Tibet">Tibet </option>
                        <option value="Timor_Oriental">Timor_Oriental </option>
                        <option value="Togo">Togo </option>
                        <option value="Trinite_et_Tobago">
                          Trinite_et_Tobago{" "}
                        </option>
                        <option value="Tristan da cunha">
                          Tristan de cuncha{" "}
                        </option>
                        <option value="Tunisie">Tunisie </option>
                        <option value="Turkmenistan">Turmenistan </option>
                        <option value="Turquie">Turquie </option>

                        <option value="Ukraine">Ukraine </option>
                        <option value="Uruguay">Uruguay </option>

                        <option value="Vanuatu">Vanuatu </option>
                        <option value="Vatican">Vatican </option>
                        <option value="Venezuela">Venezuela </option>
                        <option value="Vierges_Americaines">
                          Vierges_Americaines{" "}
                        </option>
                        <option value="Vierges_Britanniques">
                          Vierges_Britanniques{" "}
                        </option>
                        <option value="Vietnam">Vietnam </option>

                        <option value="Wake">Wake </option>
                        <option value="Wallis et Futuma">
                          Wallis et Futuma{" "}
                        </option>

                        <option value="Yemen">Yemen </option>
                        <option value="Yougoslavie">Yougoslavie </option>

                        <option value="Zambie">Zambie </option>
                        <option value="Zimbabwe">Zimbabwe </option>
                      </select>
                    </div>
                  </div>
                  <div className={wrapperAddress}>
                    <div>
                      <input
                        className={formFieldInput}
                        type="text"
                        name="zip"
                        id="zip"
                        value={address.zip}
                        onChange={handleChange}
                        placeholder={"ZIP/postal code"}
                      />
                    </div>
                  </div>
                  <div className={formFieldButtons}>
                  <button type="submit" className={btnSave}>
                    {mode === "add" ? "SAVE ADDRESS" : "Update"}
                  </button>
                  <button
                    onClick={() => setDisplay(false)}
                    className={btnCancel}
                  >
                    CANCEL
                  </button>
                  </div>
                </form>
              </div>
            )}
          </div>
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
    </ThemeProvider>
  );
}
