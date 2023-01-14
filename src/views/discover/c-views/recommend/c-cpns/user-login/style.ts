import styled from 'styled-components'

export const LoginWrapper = styled.div`
  height: 126px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  padding: 16px 22px;
  background-position: 0 0;

  p {
    line-height: 25px;
  }

  a {
    margin-top: 10px;
    display: inline-block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-decoration: none;
    background-position: 0 -195px;
    text-shadow: 0 1px 0 #8a060b;

    :hover {
      background-position: -110px -195px;
    }
  }
`
