import React, { useState } from 'react';
import Modal from '../../../components/UI/Modal/Modal';
import { useEffect } from 'react';

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [myError, setError] = useState(null);

    useEffect(() => {
      axios.interceptors.response.use(null, (error) => {
        setError(error);
      });
    }, []);

    const errorConfirmedHandler = () => {
      setError(null);
    };

    return (
      <React.Fragment>
        <Modal show={myError} hide={errorConfirmedHandler}>
          {myError ? myError.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </React.Fragment>
    );
  };
};

export default withErrorHandler;
