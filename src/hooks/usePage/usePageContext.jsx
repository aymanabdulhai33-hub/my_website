import React, { createContext, useEffect, useState } from "react";
import {useParams} from 'react-router-dom'


export const PageProvider = createContext()

const PageContext = ({children}) => {
    var {siteId , pageId} = useParams()
    var sites = window.localStorage.getItem('sites')
    if(sites){
        sites = JSON.parse(sites)
    }
    var cureentSite = sites?.find(i => i.id == siteId)
    var cureentSiteIndex = sites?.findIndex(i => i.id == siteId)
    var cureentPage = cureentSite?.pages?.find(i => i.id == pageId)
    var cureentPageIndex = cureentSite?.pages?.findIndex(i => i.id == pageId)
    const [page , setPage] = useState(cureentPage)
    const [selectedElement , setSelectedElement] = useState(null)


    const addEleToPage = (ele) => {
        var newEle = {...ele}
        newEle.id = Date.now()
        setPage((prev) => {
            if(prev.children){
                prev.children.push(newEle)
            }else{
                prev.children = [newEle]
            }
            return prev
        })
    }

    const getElementPropertyByName = (name , ele) => {
        return ele?.properties?.find(i => i.name == name) || ''
    }

    const updateElementPropert = (prop , value , ele) => {
        var newEle = JSON.stringify(ele)
        newEle = JSON.parse(newEle)
        newEle?.properties?.map((p) => {
            if(p.name == prop.name){
                p.value = value || ''
            }
            return p
        })
        setSelectedElement({...newEle})
        setPage((prev) => {
            var newEles = JSON.stringify(prev)
            newEles = JSON.parse(newEles)
            newEles.children = newEles?.children?.map((ch) => {
                if(ch.id == newEle.id){
                    ch = newEle
                }
                return ch
            })
            return newEles
        })
    }
    console.log(page)
    const savePage = () => {
       var newData = [...sites]
       newData[cureentSiteIndex].pages[cureentPageIndex] = page
       window.localStorage.setItem('sites' , JSON.stringify(newData))
    }

   return(
    <PageProvider.Provider value={{
    page,
    addEleToPage,
    setSelectedElement,
    selectedElement,
    getElementPropertyByName,
    updateElementPropert,
    savePage
    }}
    >
        {children}
    </PageProvider.Provider>
   )
}

export default PageContext