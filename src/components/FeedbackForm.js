import React, { useState } from 'react';

const FeedbackForm = () => {
    const [allData, setAllData] = useState([]);
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [rating, setRating] = useState("");

    const submitForm = (event) => {
        event.preventDefault();
        if (name && department && rating) {
            const newEntry = {
                id: new Date().getTime().toString(),
                name,
                department,
                rating
            }
            setAllData([...allData, newEntry]);
            setName('');
            setDepartment('');
            setRating('');
        }
        else {
            alert('Field is required.\nYou have left a field empty and a value must be entered.')
        }
    }

    return (
        <div className="form-container">
            <form className="input-container" onSubmit={submitForm}>
                <h2>EMPLOYEE FEEDBACK FORM</h2>
                <div className="sub-container">
                    <span>Name : </span>
                    <input type="text" name="name" id="name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="sub-container">
                    <span>Department : </span>
                    <input type="text" name="department" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} />
                </div>
                <div className="sub-container">
                    <span>Rating : </span>
                    <input type="number" name="rating" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} min="1" max="5" />
                </div>
                <input className="submit-btn" type="submit" />
            </form>
            <div  className="show-details">
                {
                    allData.map((currentElement) => {
                        const { id, name, department, rating } = currentElement;
                        return (
                                <span className="detail" key={id}>Name : {name} &nbsp;|&nbsp; Department : {department} &nbsp;|&nbsp; Rating : {rating}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FeedbackForm;