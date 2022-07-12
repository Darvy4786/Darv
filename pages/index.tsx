import type { NextPage } from "next";
import Layout from "../components/layout";


const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div>
       <div className="pt-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-7 ">
         <div className="border h-44 border-violet-300"></div>
         <div className="border h-44 border-violet-300"></div>
         <div className="border h-44 border-violet-300"></div>
         <div className="border h-44 border-violet-300"></div>
       </div>
    </div>
    </Layout>
  );
};

export default Home;