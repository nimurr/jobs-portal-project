import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import { useLoaderData } from "react-router-dom";
import HomeCard from "./HomeCard";
import { Helmet } from "react-helmet-async";


export default function Home() {
  const { user } = useContext(AuthContext);
  const allData = useLoaderData();
  const singleData = allData.photos ;

  return (
    <div>
      <Helmet>
        <title>Jobs Fly </title>
      </Helmet>
      {
        !user ? <h2 className="text-center text-5xl my-20">Please Login </h2> 
        :
          <>

            <h2 className="text-4xl text-center my-20">All Jobs</h2>

            <div className="w-8/12  mx-auto my-10">
                {
                  singleData.map(data => <HomeCard key={data.id} data={data}></HomeCard>)
                }
            </div>



          </>
      }

    </div>
  )
}
