/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import ReactLoading from 'react-loading';
 
const Loading = () => (
    <ReactLoading type={'spin'} color={'#3797a4'} height={'50px'} width={'50px'} css={css`margin-top: 32px;`}/>
);
 
export default Loading;