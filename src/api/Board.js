import React, {useRef, useState, useEffect} from 'react';
import db from './firebase';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CTextarea,
    CFormGroup,
    CLabel,
    CInput,
    CButton,
    CCollapse,
    CForm,
    CFormText,
    CCardFooter,
  } from '@coreui/react'

import {useSelector, useDispatch} from 'react-redux'

import {fetchData, writeData} from './apis'
import CIcon from '@coreui/icons-react';

const Board = ({target}) => {
    useEffect(()=>{
      fetch();
    },[])
    const dispatch = useDispatch()
    const loading = useSelector(state=> state.isLoading);
    const boardData = useSelector(state => state.curBoardData);
    
    const fetch = () => {
        console.log('this is fetch')
        dispatch({type: 'set_loading', isLoading: true});
        fetchData(target)
        .then((data)=>{ 
            dispatch({type: 'set_boardData', curBoardData: data});
            dispatch({type: 'set_loading', isLoading: false});
            dispatch({type: 'set_lastAccessSucceed', isLastAccessSucceed: true});
        })
        .catch((err)=>{
            console.log(err);
            dispatch({type: 'set_loading', isLoading: false});
            dispatch({type: 'set_lastAccessSucceed', isLastAccessSucceed: false});
        });
    }

    const write = async () => {
        dispatch({type: 'set_loading', isLoading: true});
        await writeData({board: target, data: {name: nameRef.current.value, text: textRef.current.value, title: titleRef.current.value, password: passwordRef.current.value}})
        .then(()=>{
            dispatch({type: 'set_loading', isLoading: false});
            dispatch({type: 'set_lastAccessSucceed', isLastAccessSucceed: true});
        })
        .catch((err)=>{
            console.log('this is error');
            console.log(err);
            dispatch({type: 'set_loading', isLoading: false});
            dispatch({type: 'set_lastAccessSucceed', isLastAccessSucceed: false});
        });
        fetch();
        
    }
    
    const handleSubmit = () => {

    }
    
    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);

    const fields = [
      {key: 'id', _style: {width: '10%'}},
      {key: 'name', _style: {width: '20%'}},
      {key: 'title', _style: {width: '70%'}},
      
      {
        key: 'show_details',
        label: '',
        _style: { width: '1%' },
        sorter: false,
        filter: false
      }
    ];

    //data on off function
    const [details, setDetails] = useState([])
    const toggleDetails = (index) => {
      const position = details.indexOf(index)
      let newDetails = details.slice()
      if (position !== -1){
        newDetails.splice(position, 1)
      } else {
        newDetails = [...details, index]
      }
      setDetails(newDetails)
    }

    return (
        <>
        <CRow>
        <CCol xs="12" lg="3">
            <CCard color="info" className="text-white text-center">
            <CCardBody>
              <CForm action="" method="" className="form-horizontal" >
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Enter name..." innerRef={nameRef}/>
                    <CFormText className="help-block">Please enter your name</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-password">Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="password" id="hf-password" name="hf-password" placeholder="Enter Password..." innerRef={passwordRef}/>
                    <CFormText className="help-block">Please enter your password</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">title</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Enter name..." innerRef={titleRef}/>
                    <CFormText className="help-block"></CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Comment</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                      <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="9"
                      placeholder="Content..." 
                      innerRef={textRef}
                      required/>
                    </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" onClick={()=>{}} size="sm" color="info"><CIcon name="cil-scrubber" /> Submit</CButton>
            </CCardFooter>

                {/* <CCardBody>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input" required>Name</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="text-input" name="text-input" placeholder="Name" innerRef={nameRef} />
                    </CCol>
                    <CCol md="3">
                      <CLabel htmlFor="text-input" required>Password</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="text-input" name="text-input" placeholder="Password" innerRef={passwordRef} />
                    </CCol>
                    <CCol md="3">
                      <CLabel htmlFor="text-input" required>Title</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="text-input" name="text-input" placeholder="Title" innerRef={titleRef} />
                    </CCol>
                    <CCol md="3">
                      <CLabel htmlFor="textarea-input" required>Comment</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="9"
                      placeholder="Content..." 
                      innerRef={textRef}
                       required/>
                    </CCol>
                  </CFormGroup>
                  <h6>{loading ? 'loading' : 'idle'}</h6>
                  <button onClick={()=>{fetch()}}>load</button>
                  <button onClick={()=>{write()}}>submit</button>
                </CCardBody> */}
            </CCard>

        </CCol>
        <CCol xs="12" lg="9">
          <CCard>
            
            <CCardBody>
            <CDataTable
              items={boardData}
              fields={fields}
              columnFilter
              itemsPerPageSelect
              itemsPerPage={10}
              pagination
              hover
              scopedSlots={{
                'show_details':
                  (item, index) => {
                    return (
                      <>
                      <td className="py-2">
                        <CButton
                          color="primary"
                          variant="outline"
                          shape="square"
                          size="sm"
                          onClick={() => {toggleDetails(index)}}
                        >
                          {details.includes(index) ? 'Hide' : 'Show'}
                        </CButton>
                      </td>
                    </>
                    )
                  },
                  'details':
                  (item, index)=>{
                    return (
                    <CCollapse show={details.includes(index)}>
                      <CCardBody>
                        <h6>
                          {boardData[index].text}
                        </h6>
                        <CButton size="sm" color="danger" className="ml-1">
                          Delete
                        </CButton>
                      </CCardBody>
                    </CCollapse>
                  )
                }
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
        </CRow>
            

        
        </>
    )
}
export default Board;