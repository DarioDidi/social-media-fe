/** 
 * TIMELINE PAGE
 * */

import Layout from "@/components/layout/Layout";
import { useState } from "react";


const Home = () => {
  // limits of num posts in timeline
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  //TODO: setup graphql query

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




