import React from 'react';
import { css } from '@emotion/core';
import { BarLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
 
class LoadingSpiner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading' style={{marginTop:'30%'}}>
        <BarLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={this.props.isLoading}
        />
      </div> 
    )
  }
}

export default LoadingSpiner;