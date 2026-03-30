import React, { useEffect, useRef } from 'react'
import usePage from '../../../contexts/usePage/usePage'
import { Drawer } from 'antd'
import { createPortal } from 'react-dom'

const MobileSideBar = ({}) => {
    const {openMobileSideBar , setOpenMobileSideBar} = usePage()
    const ref = useRef()

    useEffect(() => {
        var ele = document.getElementById('main-mobile-page-container')
        if(ele){
            ref.current = ele
        }
    },[])

  return (
        ref.current && createPortal(
        <Drawer 
        open={openMobileSideBar} 
        onClose={() => setOpenMobileSideBar(false)} 
        getContainer={false}
        styles={{
            body: {
                padding: 0
            }
        }}
        title={null}
        placement="right"
        >

            {/* <ElementWrapper
                isLayoutEle={isLayoutEle}
                parent={element} 
                key={`${chEle?.id}-${index}`} 
                element={chEle}
                item={item}
                assignedVariables={assignedVariables}
                component={component}
                setParentsModel={setOpen}
            /> */}
        </Drawer> , ref.current)
  )
}

export default MobileSideBar