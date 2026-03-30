import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import React, { useEffect, useState } from 'react'

const TemplatesCategorySelect = ({templateItems ,selectedCategory, setSelectedCategory}) => {

    const uniqueCategories = [
    ...new Set(
        templateItems
        ?.filter(item => item?.category?.code)
        ?.map(item => item?.category.code)
    )
    ]?.map(code =>
    templateItems?.find(item => item?.category?.code === code)?.category
    );

    
    const [selectedCategoryTitle, setSelectedCategoryTitle] = useState('');

    useEffect(() => {
    if (uniqueCategories.length > 0 && !selectedCategory) {
        setSelectedCategory(uniqueCategories?.[0]?.code);
        setSelectedCategoryTitle(uniqueCategories?.[0]?.text);
    }
    }, [uniqueCategories, selectedCategory]);

    const categoryItems = uniqueCategories?.map(cat => ({
    key: cat.id,
    label: cat?.text,
    onClick: () => {
        setSelectedCategory(cat?.code);
        setSelectedCategoryTitle(cat?.text);
    },
    }));

    

  return (
    <div style={{width:'100%',alignItems:"center",justifyContent:"center",display:"flex"}}>
        <Dropdown overlayStyle={{ width: 250 }} placement="bottom" menu={{ items: categoryItems }}>
        <div 
        className="flex gap-2" 
        style={{color: 'var(--builder-fontDark)',cursor: 'pointer',display:"flex",justifyContent:"space-between",width:"80%"}} 
        onClick={e => e.preventDefault()}>
            <p style={{fontWeight:"bold"}}>{selectedCategoryTitle}</p>
            <DownOutlined />
        </div>
        </Dropdown>
    </div>
  )
}

export default TemplatesCategorySelect