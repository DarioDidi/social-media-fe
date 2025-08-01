/** 
 * TIMELINE PAGE
 * */

import Layout from "@/components/layout/Layout";
import { GET_TIMELINE } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";


const Home = () => {
  // limits of num posts in timeline
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  //TODO: setup graphql query
  const { loading, error, data, fetchMore } = useQuery(GET_TIMELINE, {
    variables: { limit, offset },
  });

  //TODO: handle likes, shares, comments(with modal)


  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        {/*TODO: add post form in the timeline to enable new posts*/}
        {/*LIST POSTS*/}
        <div className="mt-4">

        </div>

        {/*TODO: Load more data button */}
      </div>
    </Layout>
  )
};

export default Home;




