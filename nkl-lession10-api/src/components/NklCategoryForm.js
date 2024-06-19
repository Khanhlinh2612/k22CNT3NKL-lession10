import React, { useState } from 'react';
import axios from '../api/NklApi'; 

export default function NklCategoryForm({ onCloseForm, onCategorySubmit }) { 
    // state
    const [nklCategoryName, setNklCategoryName] = useState("");
    const [nklCategoryStatus, setNklCategoryStatus] = useState(true);

    const nklHandleClose = () => {
        onCloseForm(false);
    }

    const nklHandleSubmit = async (event) => {
        event.preventDefault();
        let nklCategory = {
            nklId: 0,
            nklCategoryName: nklCategoryName,
            nklCategoryStatus: nklCategoryStatus
        }
        console.log("nklCategory", nklCategory);
        await axios.post("NklCategory", nklCategory);
        onCategorySubmit(nklCategory);
    }

    return (
        <div>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Category Name</span>
                    <input
                        type="text"
                        className="form-control"
                        name='nklCategoryName'
                        value={nklCategoryName}
                        onChange={(ev) => setNklCategoryName(ev.target.value)}
                        placeholder="Category Name"
                        aria-label="Category Name"
                        aria-describedby="basic-addon1"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Category Status</span>
                    <select
                        className='form-control'
                        name='nklCategoryStatus'
                        value={nklCategoryStatus}
                        onChange={(ev) => setNklCategoryStatus(ev.target.value)}
                    >
                        <option value={true}>Hiển thị</option>
                        <option value={false}>Tạm khóa</option>
                    </select>
                </div>
                <button className='btn btn-success' onClick={nklHandleSubmit}>Ghi lại</button>
                <button className='btn btn-danger' onClick={nklHandleClose}>Close</button>
            </form>
        </div>
    )
}
