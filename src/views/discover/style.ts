import styled from 'styled-components'

export const NavWrapper = styled.div`
  height: 30px;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;

  .nav {
    display: flex;
    box-sizing: border-box;
    padding-left: 182px;
    position: relative;
    top: -4px;

    .item {
      a {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        padding: 0 13px;
        margin: 7px 17px 0;
        color: #fff;
        font-size: 12px;

        &:hover,
        &.active {
          text-decoration: none;
          background-color: #9b0909;
          border-radius: 20px;
        }
      }
    }
  }
`
