import React, { useEffect } from 'react';
import {
	CCard,
	CCardBody,
	CCardHeader,
	CCardFooter,
	CCol,
	CRow,
	CButton,
} from '@coreui/react'
const kakao = window.kakao;
const Map = ({ loc }) => {
	/* not including code for resizing of window size that rerenders the map */

	useEffect(() => {
		let container = document.getElementById('map');
		let options = {
			center: new kakao.maps.LatLng(37, 127),
			level: 2
		};
		/* rendering map on to the document element id 'map' */
		let map = new kakao.maps.Map(container, options);

		/* add control */
		let mapTypeControl = new kakao.maps.MapTypeControl();
		let zoomControl = new kakao.maps.ZoomControl();
		map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
		map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

		/* apply kakao map searching result */
		let places = new kakao.maps.services.Places();
		let geocoder = new kakao.maps.services.Geocoder();
		let callback = function (result, status) {
			if (status === kakao.maps.services.Status.OK) {
				let bounds = new kakao.maps.LatLngBounds();
				for (let i = 0; i < result.length; i++) {
					displayMarker(result[i]);
					bounds.extend(new kakao.maps.LatLng(result[i].y, result[i].x));
					map.setBounds(bounds);
					map.setLevel(4)
				}
			}
		}
		function displayMarker(place) {
			let marker = new kakao.maps.Marker({
				position: new kakao.maps.LatLng(place.y, place.x)
			});
			marker.setMap(map);
		}
		places.keywordSearch(loc, callback);

	}, []);
	return (
		<>
			<CRow>
				<CCol>
					<CCard color={`white`} >
						<CCardHeader>
							<h1 style={{ marginBottom: 0 }}>지도</h1>
						</CCardHeader>
						<CCardBody>
							<CRow>
								<CCol xs="12" lg="8">
									<CCard style={{
										marginBottom: "0",
									}}>
										<CCardBody style={{
											padding: 0,
										}}>
											<div id={`map`} style={{ width: "100%", height: "250px" }}></div>
										</CCardBody>
									</CCard>
								</CCol>
								<CCol xs="12" lg="4" >
									<CCard style={{
										marginBottom: "0",
										height: "100%"
									}}>
										<CCardBody>
											{loc}
										</CCardBody>
									</CCard>
								</CCol>
							</CRow>
						</CCardBody>
						<CCardFooter className={`text-center`}>
							<CButton size="sm" color={`warning`} onClick={() => window.open(`https://map.kakao.com/link/search/${loc}`)}>길찾기</CButton>
						</CCardFooter>
					</CCard>
				</CCol>
			</CRow>
		</>
	)
}
export default Map
