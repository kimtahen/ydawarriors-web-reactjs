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

const Gyeongsan = () => {
  return (
    <>
      <CRow>
        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>경상도경산예비군훈련장</h1>
            </CCardHeader>
            <CCardBody>
              <CLink
                href="http://ksinews.co.kr/mobile/view.asp?intNum=1369"
                target="_blank" style={{ width: "100%" }}
              >
                경산 예비군 교장 서바이벌훈련장 준공
              </CLink>
              <br />

              <CImg
                src="http://www.ksinews.co.kr/ArticleUpload/8/2007032817321.jpg"
                fluid
                className="mb-2" style={{ width: "100%" }}
              />
            </CCardBody>
          </CCard>

        </CCol>

        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>경상도경산예비군훈련장</h1>
            </CCardHeader>
            <CCardBody>
              <CImg
                src=""
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
                주소 : 경상북도 경산시 금박로(자인면) 143
              </p>
              <p className="muted">
                연락처 : 053-857-6113
              </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`경상북도 경산시 금박로 143`} />

      <Rating target={'board9'} />

      <Board target={`board9`} name="경상도경산예비군훈련장게시판" />

    </>
  )



}
export default Gyeongsan
