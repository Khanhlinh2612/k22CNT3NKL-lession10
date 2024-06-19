import React, { useEffect, useState } from 'react';
import './App.css';
import NklCategoryForm from './components/NklCategoryForm';
import NklCategoryList from './components/NklCategoryList';
import axios from './api/NklApi';
function NklApp() {
  const [nklCategories, setNklCategories] = useState([]);

  const getCategories = async () => {
    try {
      const nklCateResponse = await axios.get("NklCategory");
      setNklCategories(nklCateResponse.data);
    } catch (error) {
      console.log("lỗi: ", error);
    }
  }

  useEffect(() => {
    getCategories();
    console.log("nklCategories: ", nklCategories);
  }, [nklCategories]);

  // Trạng thái form
  const [nklCategoryIsForm, setNklCategoryIsForm] = useState(false);

  const nklHandleAddNew = (param) => {
    setNklCategoryIsForm(param);
  }

  const nklHandleCategoryCloseForm = (param) => {
    setNklCategoryIsForm(param);
  }

  const nklHandleCategorySubmit = (param) => {
    let id = nklCategories[nklCategories.length - 1].nklId;
    console.log("Mã", id);
    param.nklId = id + 1;
    setNklCategories([...nklCategories, param]);
    setNklCategoryIsForm(false);
  }

  return (
    <div className="container border my-3">
      <h1>Nguyen Khanh Linh  - Call Api</h1>
     <NklCategoryList renderNklCategories={nklCategories}
                       onAddNew={nklHandleAddNew}/>
     <hr/>
      {
        nklCategoryIsForm === true ? 
        <NklCategoryForm
            onCloseForm={nklHandleCategoryCloseForm}
            onCategorySubmit={nklHandleCategorySubmit}
        /> : ""
      }
    </div>
  );
}

export default NklApp;
