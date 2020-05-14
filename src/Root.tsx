import GlobalStyleWrapper from '@src/components/GlobalStyleWrapper';
import 'dayjs/locale/pt-br';
import React, { StrictMode, useEffect } from 'react';
import App from './pages/App/App';

const Root = () => {
  useEffect(() => {
  }, []);

  return (
    <StrictMode>
      <GlobalStyleWrapper>
        <App />
      </GlobalStyleWrapper>
    </StrictMode>
  );
};

export default Root;
