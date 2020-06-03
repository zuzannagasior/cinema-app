/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Select from 'react-select';

const selectStyles = {
    container: (styles, {isFocused}) => ({ ...styles, width: "200px", borderRadius: "none", margin: "auto", color: '#DFDFE2'}),
    control: (styles, {isFocused}) => ({ ...styles, 
        backgroundColor: 'transparent', 
        borderRadius: "none", 
        border: isFocused ? "1.5px solid #3797a4" : "1.5px solid #DFDFE2",
        boxShadow: "none",
        transition: ".2s",
        '&:hover': { 
            borderColor: isFocused ? "#3797a4" : "#DFDFE2"
        },
    }),
    menu:(styles) => ({
        ...styles,
        backgroundColor: "#1D1D20",
        borderRadius: 0,
        border: "1.5px solid #DFDFE2",

    }),
    indicatorSeparator: () => ({
        display: "none"
    }),
    dropdownIndicator: (styles) => ({
        ...styles,
        '&>svg': { 
            fill: "#DFDFE2",
        },
    }),
    option: (styles, {isSelected, isFocused}) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#1D1D20 !important" : "#1D1D20 !important",
        color: isSelected ? "#3797a4" : "#DFDFE2",
        '&:hover': { color: "#3797a4" },

      };
    }
};

const Summary = () => {

const ticketTypeOption = [
    { value: 'adult', label: 'adult' },
    { value: 'children', label: 'children' }
    ];
const selectedOption = 'adult';

const handleChange = selectedOption => {
    console.log(`Option selected:`, selectedOption);
}

  return (
    <div css={css`margin-bottom: 32px; width: 600px;`}>
        <h2 css={css`margin-bottom: 16px;`}>Summary</h2>
        <table css={css`width: 100%;`}>
            <thead css={css`margin-bottom: 8px;`}>
                <tr>
                    <th css={css`padding-bottom: 16px;`}></th>
                    <th css={css`padding-bottom: 16px;`}>row</th>
                    <th css={css`padding-bottom: 16px;`}>seat</th>
                    <th css={css`padding-bottom: 16px;`}>ticket type</th>
                    <th css={css`padding-bottom: 16px;`}>price</th>
                </tr>
            </thead>
            <tbody css={css`text-align: center;`}>
                <tr>
                    <td css={css`padding-bottom: 16px;`}>1</td>
                    <td css={css`padding-bottom: 16px;`}>I</td>
                    <td css={css`padding-bottom: 16px;`}>8</td>
                    <td css={css`padding-bottom: 16px;`}><Select
                            defaultValue='adult'
                            value={selectedOption}
                            onChange={handleChange}
                            options={ticketTypeOption}
                            styles={selectStyles}
                            isSearchable={false}
                        /></td>
                    <td css={css`padding-bottom: 16px;`}>15</td>
                </tr>
                <tr css={css`margin-bottom: 16px;`}>
                    <td>2</td>
                    <td>I</td>
                    <td>7</td>
                    <td> 
                        <Select
                            defaultValue={selectedOption}
                            value={selectedOption}
                            onChange={handleChange}
                            options={ticketTypeOption}
                            styles={selectStyles}
                            isSearchable={false}
                        /></td>
                    <td>7</td>
                </tr>
            </tbody>
        </table>
        
    </div>
  );
}

export default Summary;