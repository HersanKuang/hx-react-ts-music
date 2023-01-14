import styled from 'styled-components'

export const AnchorWrapper = styled.div`
  padding: 20px;
  .anchors {
    margin-top: 20px;

    .item {
      display: flex;
      margin-bottom: 10px;
      width: 210px;
      .image {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }

        img {
          width: 40px;
          height: 40px;
        }
      }

      .info {
        width: 160px;
        margin-left: 8px;
        .name {
          color: #000;
          font-weight: 700;
          margin-top: 3px;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }

        .position {
          color: #666;
          margin-top: 5px;
          cursor: pointer;

          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`
