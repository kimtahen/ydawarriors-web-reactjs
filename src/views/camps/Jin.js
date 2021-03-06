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

const Jin = () => {
  return (
    <>
      <CRow>
        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>부산진구예비군훈련장</h1>
            </CCardHeader>
            <CCardBody>
              <CLink
                href="https://council.busanjin.go.kr/content/activity/photo.html?gtid=photo&pg=vv&sid=&page=87&fidx=3605&opt=&sword="
                target="_blank" style={{ width: "100%" }}
              >
                개금동 예비군훈련장 현장확인
              </CLink>
              <br />

              <CImg
                src="https://council.busanjin.go.kr/UPDIR/photo/middle/photo_00001370.jpg"
                fluid
                className="mb-2" style={{ width: "100%" }}
              />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>부산진구예비군훈련장</h1>
            </CCardHeader>
            <CCardBody>
              <CImg
                src="https://www.yebigun1.mil.kr/cmm/fms/getImage.do?atchFileId=b385be40-cabc-11da-bc12-000001010d15&fileSn=20120615085939"
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
                주소 : 부산광역시 부산진구 백양대로320번길(개금동) 99
              </p>
              <p className="muted">
                연락처 :
              </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`부산광역시 부산진구 백양대로320번길 96`} />

      <Rating target={'board13'} />

      <Board target={`board13`} name="부산진구예비군훈련장게시판" />

    </>
  )



}
export default Jin
