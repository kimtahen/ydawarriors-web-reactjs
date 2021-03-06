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

const Dong = () => {
  return (
    <>
      <CRow>
        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>대구동구예비군훈련장</h1>
            </CCardHeader>
            <CCardBody>
              <CLink
                href="https://www.yeongnam.com/web/view.php?key=20200622010003255"
                target="_blank" style={{ width: "100%" }}
              >
                대구 동구여성예비군 "내 고장은 내가 지킨다"
              </CLink>
              <br />

              <CImg
                src="https://www.yeongnam.com/mnt/file/202006/2020062201000801500032551.jpg"
                fluid
                className="mb-2" style={{ width: "100%" }}
                style={{ width: "100%" }}
              />
            </CCardBody>
          </CCard>

        </CCol>

        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>대구동구예비군훈련장</h1>
            </CCardHeader>
            <CCardBody>
              <CImg
                src="http://www.yebigun1.mil.kr/cmm/fms/getImage.do?atchFileId=f9a06d00-db09-11da-a738-000001010d15&fileSn=20110310152551"
                fluid
                className="mb-2" style={{ width: "100%" }}
                style={{ width: "100%" }}
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
                주소 : 대구광역시 동구 팔공로(능성동) 1421
              </p>
              <p className="muted">
                연락처 :
              </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`대구광역시 동구 팔공로 1421`} />

      <Rating target={'board3'} />

      <Board target={`board3`} name="대구동구예비군훈련장게시판" />

    </>
  )



}
export default Dong
