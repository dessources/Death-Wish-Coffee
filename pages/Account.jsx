import React from "react";
import Navbar from "../components/Navbar";
import { getSession, useSession, signOut } from "next-auth/react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import VerticalTabs from "../components/TabsAccount";
import { wrapper, TabInfo, container } from "../styles/Account.module.css";
import CreateAccount from '../pages/CreateAccount';

const Account = () => {
  const { data: session } = useSession();

  return (
    <>
      <Navbar />
      {session ? User({ session, handleSignOut }) : Guest()}
    </>
  );
};

function Guest() {
  return <h3>Guest Homepage</h3>;
}

function User({ session, handleSignOut }) {
  return (
    <div className={wrapper}>
      <div className={container}>
        <Typography
          variant="h1"
          style={{
            color: "red",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "175px",
          }}
        >
           Hey, {session.user.name ? `${session.user.name}` : `Coffee Lover`}
        </Typography>
        <div className={TabInfo}>
          <VerticalTabs />

          
            <p>
              <strong>Customer Info :</strong>
            </p>
            <p>
              <strong>name : </strong>
              {session.user.name}
            </p>
            <p></p>
            <p>
              <strong>Email : </strong>
              {session.user.email}
            </p>
          
        </div>
      </div>
    </div>
  );
}

function handleSignOut() {
  signOut();
}

export default Account;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/Login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
