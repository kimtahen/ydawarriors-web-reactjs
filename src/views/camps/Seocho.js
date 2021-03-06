import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CEmbed,
  CEmbedItem,
  CImg
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import Board from '../../api/Board'
import Map from '../../api/Map';
import Rating from '../../api/Rating';

const Seocho = () => {

  return (
    <>
      <CRow>
        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>서초과학화예비군훈련장</h1>
            </CCardHeader>
            <CCardBody>
              <CEmbed>
                <CEmbedItem iframe width="560" height="315" src="https://www.youtube.com/embed/B9a3iUhsxJM" />
              </CEmbed>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol>
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>정보</h1>

            </CCardHeader>
            <CCardBody>
              <p className="muted">
                주소 : 서울특별시 서초구 신흥말길(내곡동) 79-39 서초과학화예비군훈련장(강남, 서초)
              </p>
              <p className="muted">
                연락처 : 02-576-6637
              </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`서울특별시 서초구 신흥말길 79-39`} />

      <Rating target={'board20'} />

      <Board target={`board20`} name="서초과학화예비군훈련장게시판" />

    </>
  )
}

export default Seocho;
