const GraphQLClient = require("graphql-request").GraphQLClient;
const gql = require("graphql-request").gql;
const axios = require("axios");
const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NzUwMjAwMDMsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NsZGhxb3piZTFpdzAwMXRhY2s4azRuNHQvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6ImQ0NzlmZTI4LThmZGMtNDQxOC04ZWY0LTFkMzUwZjA4ZDIxMSIsImp0aSI6ImNsZGhybnVibjFqdjkwMXRhMTltamhmcmoifQ.DxClWhrS6Pi7FhdZlqG4qd7k-KsMV2Z5hDKItWJUA5dBKxkJqU4zjZk2PHo7n7vRrgZmGiZgzsuHs4F6ZY0VX0XOjSpUNxKTrdocMb6VHNYFpW3AkWKTtTlhjs5iZB3rVeBMalsl3VeuBKKSFDA4st3G8MqNBahybmBI4q0jTzSqTa7JzzjZqpniFwNey-XXOu0mrYyVGXJUJQwqtAJWRgbKyfezOKAr7S-1PJfNCaf6I1CyRU2Jm0TSB_deBLAY6iT8-ECh5ZXiMEXtdqFvduiwo9c2uRlpJSYKzR4rVeE6oc9Iv_DVWKpgfnoThSoaAIULZldQjL4HrW85SCpPH1ySxEn4JXSp3qoBg6ArxNm_lrqOxHEc0ocKZvrn9pCutjKWxTgLcXTMuZOeusr9mg5RSD-e6sq97DtBc8T8NMZdxCVcLogGpxyqCo3qpIZggv8QxZ4hleEGfLEq3aDpq-FJoflyT7tNH0MUeossjZ_mxlv4Y0ezctH7puHOkJ7AXuJwAj7ICGJ-FgHAaSEnflkc6z2fUmya7x-XnTYoL2en710rH7HaqXQZ06F-mcQmD8HKV-DUS0X9Op6RGRcmP9ItAGTivT6gMllhRWlFeh0pqppRZiqHDbSS2YFc3sKopvhfxydtuwNpdxxyww8_TPTUeSMBawuIrOk1zj0cuDo";
const hygraph = new GraphQLClient(
  `https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cldhqozbe1iw001tack8k4n4t/master`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

const getCoffees = gql`
  {
    coffees(first: 22) {
      images
      uid
      name
    }
  }
`;
const updateCoffees = gql`
  mutation updateCoffee($data: CoffeeUpdateInput!, $uid: String!) {
    updateCoffee(where: { uid: $uid }, data: $data) {
      id
    }
  }
`;

async function uploadFromStrapi() {
  const { data } = await axios.get("http://localhost:1337/api/coffees?populate=main_image,images");

  const { coffees } = await hygraph.request(getCoffees);
  coffees.forEach((coffee) => {
    if (coffee.images.length == 0) {
      console.log(coffee.name, "does not have the images property set \n");
      data.data.forEach(({ id, attributes }) => {
        if (attributes.name == coffee.name) {
          console.log("the names are equal");
          let variables = {
            images: attributes.images?.data?.map((image) => image.attributes.formats.medium.url),
          };
          console.log(` THe images for ${coffee.name} are \n ${variables.images}`);
          hygraph.request(updateCoffees, { data: { images: variables.images }, uid: coffee.uid });
        }
      });
    }
  });
}

uploadFromStrapi();
