import React, {
  useState,
  useEffect
} from 'react'
import axios from 'axios';
import { Pannellum } from "pannellum-react";
import { ApartmentData, ApiData } from './interfaces';
import Explorer from './components/Explorer/Explorer';

const URL = 'https://899qp66n9k.execute-api.eu-west-1.amazonaws.com/default/buildots-equirect-assignment';
function App() {
  const [apartmentsData, setApartmentsData] = useState <ApartmentData[]>();

  async function fetchData() {
    try {
      const { data, status } = await axios.get<ApiData>(URL);
      if (status < 400) {
        const { apartments } = data;
        setApartmentsData(apartments);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    // const interval = setInterval(() => {
      fetchData();
    // }, 5000);

    // () => clearInterval(interval);
  }, []);

  console.log(apartmentsData);

  return (<div className="App">
    {apartmentsData && (
      <>
        <Explorer apartmentData={apartmentsData}/>
        <Pannellum
            width="100%"
            height="500px"
            image={apartmentsData[0].images[0].url}
            pitch={10}
            yaw={180}
            hfov={110}
            autoLoad
            onLoad={() => {
                console.log("panorama loaded");
            }}
        >
          {/* <Pannellum.Hotspot
            type="info"
            pitch={11}
            yaw={-167}
            text="Info Hotspot Text 3"
            URL="https://github.com/farminf/pannellum-react"
          />

          <Pannellum.Hotspot
            type="info"
            pitch={31}
            yaw={-107}
            text="Info Hotspot Text 4"
            URL="https://github.com/farminf/pannellum-react"
          /> */}
        </Pannellum>
      </>
    )}
    </div>
  )
};

export default App;