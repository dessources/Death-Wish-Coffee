import { gql } from "graphql-request";
import connectHygraph from "../lib/hygraph";

export const getCoffeesUid = () =>
  connectHygraph().request(gql`
    {
      coffees(first: 22) {
        uid
      }
    }
  `);

export const getOneCoffee = (uid) =>
  connectHygraph().request(
    gql`
      query getOneCoffee($uid: String!) {
        coffees(where: { uid: $uid }) {
          uid
          name
          price
          reviews
          rating
          descriptions
          descriptionTitle
          details
          images
          mediumImage
          smallImage
          thumbnailImage
          styles
          sizes
          format
          roast
          accentColor
          additionalInformation
          videoUrl
        }
      }
    `,
    { uid: uid }
  );

export const getAllCoffees = () =>
  connectHygraph().request(
    gql`
      {
        coffees(first: 22) {
          uid

          name
          price
          reviews
          rating
          createdAt
          descriptions
          descriptionTitle
          details
          images
          mediumImage
          smallImage
          thumbnailImage
          styles
          sizes
          format
          roast
          accentColor
          additionalInformation
          videoUrl
        }
      }
    `
  );

export const getSpecificCoffees = (filters) =>
  connectHygraph().request(
    gql`
      query getSpecificCoffees($filters: CoffeeWhereInput!) {
        coffees(where: $filters) {
          uid
          name
          price
          mediumImage
          thumbnailImage
          smallImage
          rating
          reviews
          format
          roast
          sizes
        }
      }
    `,
    { filters }
  );

export const getSubscriptionImages = () =>
  connectHygraph().request(gql`
    {
      assets(where: { fileName_contains: "_", fileName_not_contains: "-" }, first: 50) {
        fileName
        url
      }
    }
  `);
