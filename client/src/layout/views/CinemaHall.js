/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import axios from "axios";
import { HallConteiner, CustomButton } from "../../StyledComponents";
import Summary from "../components/Summary.js";
import SeatItem from "../components/SeatItem.js";
import UserModal from "../components/UserModal.js";
import { Link, Redirect } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ReduxStoreContext, ACTIONS } from "../../Reducer.js";
import Loading from "../components/Loading";
import { hallNames } from "../../config/HallNames";
import { useHistory } from "react-router-dom";

const CinemaHall = () => {
  const { state, dispatch } = useContext(ReduxStoreContext);

  const [hallBefore, setHallBefore] = useState({ rows: [], screeningId: null });
  const [rows, setRows] = useState([]);

  const { chosenMovie, loading, chosenSeats, chosenDay } = state;
  const { title, hall, time } = chosenMovie;

  const history = useHistory();

  const handleReturnClick = () => {
    dispatch({
      type: ACTIONS.CLEAR_CHOSEN_SEATS,
    });
  };

  const save = (userData) => {
    dispatch({
      type: ACTIONS.TOGGLE_LOADING,
      payload: true,
    });

    const { email, name } = userData;

    // create new document for screening (when first ticket is booked) or update existing screening data
    const rowTakenSeats = hallBefore.rows.reverse().map((row) => {
      return row.map((seat) => {
        const changeSeat =
          chosenSeats.filter((s) => s.row === seat.row && s.seat === seat.seat)
            .length > 0;
        if (changeSeat) {
          const newSeat = { ...seat, isTaken: true };
          return newSeat;
        } else {
          return seat;
        }
      });
    });

    let params;
    if (hallBefore.screeningId) {
      params = {
        rows: rowTakenSeats,
        screeningId: hallBefore.screeningId,
      };
    } else {
      params = {
        title: title,
        date: `${chosenDay.date.getFullYear()}-${chosenDay.date.getMonth()}-${chosenDay.date.getDate()}`,
        time: time,
        hall: hall,
        rows: rowTakenSeats,
      };
    }

    axios
      .post(`/screenings`, params)
      .then((response) => {
        const newBooking = {
          screeningId: response.data._id,
          name: name,
          email: email,
          tickets: chosenSeats,
        };

        axios
          .post(`/bookings`, newBooking)
          .then((response) => {
            dispatch({
              type: ACTIONS.TOGGLE_LOADING,
              payload: false,
            });
            dispatch({
              type: ACTIONS.SET_MODAL_IS_OPEN,
              payload: false,
            });
            dispatch({
              type: ACTIONS.CLEAR_CHOSEN_SEATS,
            });
            history.push("/");
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleBookClick = () => {
    dispatch({
      type: ACTIONS.SET_MODAL_IS_OPEN,
      payload: true,
    });
  };

  useEffect(() => {
    document.title = `${title} | ${hallNames.get(hall)} | `.concat(
      "CINEMA with my favourite movies"
    );

    const setCinemaSeats = (rows) => {
      const rowsToSet = rows.reverse().map((row, index) => {
        const seats = row.map((seat, index2) => {
          return <SeatItem key={index2} seat={seat} />;
        });
        return (
          <div
            css={css`
              display: flex;
              padding-top: 16px;
            `}
            key={index}
          >
            {seats}
          </div>
        );
      });

      setRows(rowsToSet);
    };

    dispatch({
      type: ACTIONS.TOGGLE_LOADING,
      payload: true,
    });

    const date = `${chosenDay.date.getFullYear()}-${chosenDay.date.getMonth()}-${chosenDay.date.getDate()}`;

    axios
      .get(`/screenings/${date}/${title}/${time}`)
      .then((response) => {
        if (response.data) {
          setHallBefore({
            rows: response.data.rows,
            screeningId: response.data._id,
          });
          setCinemaSeats(response.data.rows);

          dispatch({
            type: ACTIONS.TOGGLE_LOADING,
            payload: false,
          });
        } else {
          // get default hall
          axios
            .get(`/halls/${hall}`)
            .then((response) => {
              setHallBefore({ rows: response.data.rows, screeningId: null });
              setCinemaSeats(response.data.rows);

              dispatch({
                type: ACTIONS.TOGGLE_LOADING,
                payload: false,
              });
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (Object.keys(state.chosenMovie).length === 0) {
    return <Redirect to="/" />;
  } else {
    return (
      <HallConteiner>
        <UserModal save={save} />
        <h1>{title}</h1>
        <h2>{hallNames.get(hall)}</h2>
        {loading ? (
          <Loading />
        ) : (
          <div
            css={css`
              padding-top: 16px;
              display: flex;
              flex-direction: column;
              margin-bottom: 32px;
            `}
          >
            {rows}
          </div>
        )}
        {chosenSeats.length > 0 && <Summary />}
        <div
          css={css`
            transform: translateX(-25%);
            margin-top: 16px;
          `}
        >
          <Link to="/" onClick={handleReturnClick}>
            <CustomButton className="secondary">Return</CustomButton>
          </Link>
          <CustomButton
            onClick={handleBookClick}
            disabled={chosenSeats.length === 0}
          >
            Book
          </CustomButton>
        </div>
      </HallConteiner>
    );
  }
};

export default CinemaHall;
