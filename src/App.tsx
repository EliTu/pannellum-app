import React, { useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { Pannellum } from 'pannellum-react';
import { ApiData } from './interfaces';
import { AppContainer, MainContentContainer } from './AppStyles';
import { ExplorerContext } from './Context/ExplorerContextProvider';
import Explorer from './components/Explorer/Explorer';
import usePoll from './hooks/usePoll';

const URL =
  'https://899qp66n9k.execute-api.eu-west-1.amazonaws.com/default/buildots-equirect-assignment';

function App() {
  const { apartmentsData, selectedData, setApartmentsData, setSelectedData } =
    useContext(ExplorerContext);

  const fetchData = useCallback(async () => {
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
  }, [setApartmentsData, setSelectedData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  usePoll(fetchData, 5000);

  return (
    <AppContainer>
      {apartmentsData && selectedData && (
        <MainContentContainer>
          <Explorer />
          {selectedData.selectedImage && (
            <Pannellum
              width="90%"
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
        </MainContentContainer>
      )}
    </AppContainer>
  );
}

export default App;
