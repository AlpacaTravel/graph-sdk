interface Operations {
  [key: string]: string;
}

const operations: Operations = {
  /*
   Creates an anonymous itinerary
   An anonymous itinerary does not have a profile owner
   */
  CreateAnonymousItinerary: /* GraphQL */ `
    mutation CreateAnonymousItinerary {
      createItinerary {
        itinerary {
          id
        }
      }
    }
  `,
};

export default operations;
