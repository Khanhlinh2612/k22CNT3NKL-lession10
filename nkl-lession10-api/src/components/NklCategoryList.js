import React from 'react';

export default function NklCategoryList({ renderNklCategories, onAddNew }) { 
    console.log("renderNklCategories: ", renderNklCategories);
    let nklCategoryElement = renderNklCategories.map((nklCategory, index) => {
        return (
            <tr key={index}>
                <th>{index + 1}</th>
                <td>{nklCategory.nklId}</td>
                <td>{nklCategory.nklCategoryName}</td>
                <td>{nklCategory.nklCategoryStatus === true ? "Hiển thị" : "Tạm khóa"}</td>
            </tr>
        )
    })

    const nklHandleAdd = () => {
        onAddNew(true);
    }

    return (
        <div className='container m-2'>
            <h2> Danh sách sản phẩm</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã loại</th>
                        <th>Tên loại</th>
                        <th>Trạng thái</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {nklCategoryElement}
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={nklHandleAdd}>Add new</button>
        </div>
    )
}
