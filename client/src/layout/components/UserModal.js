/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, useContext } from 'react';
import {ReduxStoreContext, ACTIONS} from '../../Reducer.js';
import ReactModal from 'react-modal';
import { CustomButton, CustomInput } from '../../StyledComponents';
import Loading from '../components/Loading';

const customModalStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: "#1D1D20",
      width: "50%",
      minHeight: "240px",
      borderColor: "#dfdfe2",
      borderRadius: "0",
      display: "flex"
    },
    overlay: {
      backgroundColor: "rgba(29, 29, 32, 0.8)",
    },
  };

ReactModal.setAppElement('#root');

const UserModal = ({ save }) => {
    const {state, dispatch} = useContext(ReduxStoreContext);
    const [userData, setUserData] = useState({ name: '', email: '' });

    const handleCloseModal = () => {
        dispatch({ 
            type: ACTIONS.SET_MODAL_IS_OPEN,
            payload: false});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData, 'userData');
        // some validation TODO

        // save screening and bookings, function in CinemaHall component
        save(userData);
    };

    const handleChange = (e) => {
        if (e.target.id === 'email') {
            setUserData({ ...userData, email: e.target.value});
        } else if (e.target.id === 'userName') {
            setUserData({ ...userData, name: e.target.value});
        };
    };

    return <ReactModal isOpen={state.modalIsOpen} style={customModalStyles} shouldCloseOnEsc={true} shouldReturnFocusAfterClose={true}>
                <form onSubmit={handleSubmit} css={css`width: 100%; flex-basis: 100%; display: flex; flex-direction: column; align-items: center;`}>
                    <div css={css`flex-grow: 1; display: flex; flex-direction: column; justify-content: center; margin-top: 24px;`}>
                        <CustomInput id="userName" placeholder="Name & Surname" onChange={handleChange} />
                        <CustomInput id="email" placeholder="example@email.com" onChange={handleChange} />
                    </div>
                    {state.loading && <Loading css={css`margin-bottom: 16px;`} />}
                    <div css={css`transform: translateX(-25%);`}>
                        <CustomButton type="button" className="secondary" onClick={handleCloseModal}>Return</CustomButton>
                        <CustomButton type="submit">Book</CustomButton>
                    </div>
                </form>
            </ReactModal>;

};
 
export default UserModal;