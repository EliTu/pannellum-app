import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pannellum } from 'pannellum-react';
import { ApartmentData, ApiData, SelectedApartmentData } from './interfaces';
import Explorer from './components/Explorer/Explorer';
import usePoll from './hooks/usePoll';

const URL =
  'https://899qp66n9k.execute-api.eu-west-1.amazonaws.com/default/buildots-equirect-assignment';

function App() {
  const [apartmentsData, setApartmentsData] = useState<ApartmentData[]>();
  const [selectedData, setSelectedData] = useState<SelectedApartmentData>();

  const fetchData = async () => {
    try {
      const { data, status } = await axios.get<ApiData>(URL);
      if (status < 400) {
        const { apartments } = data;
        setApartmentsData(apartments);
        setSelectedData((prevData) => ({
          ...prevData,
          selectedApartment: !prevData?.selectedApartment
            ? apartments[0]
            : prevData.selectedApartment,
        }));
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  usePoll(fetchData, 5000);

  return (
    <div className="App">
      {apartmentsData && selectedData && (
        <>
          <Explorer
            apartmentData={apartmentsData}
            selectedData={selectedData}
            setSelectedData={setSelectedData}
          />
          {selectedData.selectedImage && (
            <Pannellum
              width="100%"
              height="500px"
              image={selectedData.selectedImage?.url}
              pitch={10}
              yaw={180}
              hfov={110}
              autoLoad
              onLoad={() => {
                console.log('panorama loaded');
              }}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
