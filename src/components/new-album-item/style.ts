import styled from 'styled-components'

export const AlbumItemWrapper = styled.div`
  .top {
    position: relative;
    width: 118px;
    height: 100px;
    overflow: hidden;
    margin-top: 15px;

    img {
      width: 100px;
      height: 100px;
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 -570px;
      text-indent: -9999px;
    }

    .icon-play {
      display: none;
      position: absolute;
      right: 24px;
      bottom: 5px;
      width: 22px;
      height: 22px;
    }

    &:hover .icon-play {
      display: block;
      background-position: 0 -85px;
    }
  }

  .bottom {
    margin-top: 5px;
    font-size: 12px;
    width: 100px;
    .name {
      color: #000;
      cursor: pointer;
      ${(props) => props.theme.mixin.textNowrap}

      &:hover {
        text-decoration: underline;
      }
    }

    .artist {
      color: #666;
      cursor: pointer;
      ${(props) => props.theme.mixin.textNowrap}

      &:hover {
        text-decoration: underline;
      }
    }
  }
`
