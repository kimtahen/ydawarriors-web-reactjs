import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CImg,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import Board from '../../api/Board'
import Map from '../../api/Map';
import Rating from '../../api/Rating';

const Gwangsan = () => {
  return (
    <>
      <CRow>
        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>광주광산구예비군훈련장</h1>
            </CCardHeader>
            <CCardBody>
              <CLink
                href="http://www.igj.co.kr/news/articleView.html?idxno=24324"
                target="_blank" style={{ width: "100%" }}
              >
                2012년 예비군훈련 더 쾌적하게, 더 성과 있게
              </CLink>
              <br />

              <CImg
                src="http://www.igj.co.kr/news/photo/201203/24324_44609_343.jpg"
                fluid
                className="mb-2" style={{ width: "100%" }}
              />
            </CCardBody>
          </CCard>

        </CCol>

        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>광주광산구예비군훈련장</h1>
            </CCardHeader>
            <CCardBody>
              <CImg
                src="http://www.yebigun1.mil.kr/cmm/fms/getImage.do?atchFileId=81fe2100-ce72-11da-8eaa-000001010d15&fileSn=20140319163711"
                fluid
                className="mb-2" style={{ width: "100%" }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>정보</h1>

            </CCardHeader>
            <CCardBody>
              <p className="muted">
                주소 : 광주광역시 광산구 창교길(본덕동) 19 광산 예비군훈련장
              </p>
              <p className="muted">
                연락처 : 062-943-9113
              </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`광주광역시 광산구 창교길 19`} />

      <Rating target={'board7'} />

      <Board target={`board7`} name="광주광산구예비군훈련장게시판" />

    </>
  )



}
export default Gwangsan
