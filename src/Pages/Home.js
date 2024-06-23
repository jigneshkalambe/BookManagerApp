import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import Data from "../Components/Data";
import { Link } from "react-router-dom";

const Home = () => {
    const [inputData, setinputData] = useState({});
    const [fakeData, setfakeData] = useState(Data);
    const [tempInd, settempInd] = useState(0);

    const inputHandler = (e) => {
        setinputData({ ...inputData, [e.target.name]: e.target.value });
    };

    const submitApiHandler = () => {
        setfakeData([...fakeData, inputData]);
        setinputData({ book_id: "", title: "", author: "", genre: "", published_year: "", id: "" });
    };

    const deleteApiHandler = (id) => {
        fakeData.splice(id, 1);
        setfakeData([...fakeData]);
    };

    const viewApiHandler = (val, ind) => {
        setinputData(val);
        settempInd(ind);
    };

    const updateApiHandler = (ind) => {
        fakeData.splice(ind, 1, inputData);
        setfakeData([...fakeData]);
    };
    return (
        <div>
            <div className="d-flex justify-content-center px-3 gap-4 my-4">
                <input
                    value={inputData.book_id}
                    name="book_id"
                    onChange={inputHandler}
                    className="form-control w-25"
                    placeholder="Enter Book ID"
                ></input>
                <input
                    value={inputData.title}
                    name="title"
                    onChange={inputHandler}
                    className="form-control w-25"
                    placeholder="Enter Book Title"
                ></input>
                <input
                    value={inputData.author}
                    name="author"
                    onChange={inputHandler}
                    className="form-control w-25"
                    placeholder="Enter Book Author"
                ></input>
                <input
                    value={inputData.genre}
                    name="genre"
                    onChange={inputHandler}
                    className="form-control w-25"
                    placeholder="Enter Book Genre"
                ></input>
                <input
                    value={inputData.published_year}
                    name="published_year"
                    onChange={inputHandler}
                    className="form-control w-25"
                    placeholder="Enter Book published year"
                ></input>
                <button className="w-25 d-block btn btn-dark" onClick={submitApiHandler}>
                    Add Data
                </button>
            </div>
            <div className="container-fluid my-3">
                <div className="row g-4">
                    {fakeData?.map((val, ind) => {
                        return (
                            <div className="col-lg-3 col-md-6 col-12" key={ind}>
                                <div className="card-box">
                                    <Link className="text-decoration-none" to={`/${val.id}`}>
                                        <div>
                                            <h5>Book ID : {val.book_id}</h5>
                                            <h5>Title : {val.title}</h5>
                                            <h5>Author : {val.author}</h5>
                                            <h5>Genre : {val.genre}</h5>
                                            <h5>Published year : {val.published_year}</h5>
                                        </div>
                                    </Link>
                                    <div className="w-100 pt-3 d-flex justify-content-between">
                                        <button
                                            onClick={() => viewApiHandler(val, ind)}
                                            className="view_btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            View
                                        </button>
                                        <button className="delete_btn" onClick={() => deleteApiHandler(ind)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                <div className="modal fade" id="exampleModal">
                                    <div className="modal-dialog  modal-lg  modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header d-flex justify-content-center">
                                                <h1 className="modal-title fs-5">You can update the data from here :)</h1>
                                            </div>
                                            <div className="modal-body">
                                                <div className="d-flex flex-column gap-4 p-3 align-items-center justify-content-center">
                                                    <input
                                                        type="text"
                                                        value={inputData.book_id}
                                                        name="book_id"
                                                        onChange={inputHandler}
                                                        className="form-control w-100"
                                                        placeholder="Enter Book ID"
                                                    ></input>
                                                    <input
                                                        type="text"
                                                        value={inputData.title}
                                                        name="title"
                                                        onChange={inputHandler}
                                                        className="form-control w-100"
                                                        placeholder="Enter Book Title"
                                                    ></input>
                                                    <input
                                                        type="text"
                                                        value={inputData.author}
                                                        name="author"
                                                        onChange={inputHandler}
                                                        className="form-control w-100"
                                                        placeholder="Enter Book Author"
                                                    ></input>
                                                    <input
                                                        type="text"
                                                        value={inputData.genre}
                                                        name="genre"
                                                        onChange={inputHandler}
                                                        className="form-control w-100"
                                                        placeholder="Enter Book Genre"
                                                    ></input>
                                                    <input
                                                        type="text"
                                                        value={inputData.published_year}
                                                        name="published_year"
                                                        onChange={inputHandler}
                                                        className="form-control w-100"
                                                        placeholder="Enter Book published year"
                                                    ></input>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                                <button className="btn btn-success d-block" v onClick={() => updateApiHandler(tempInd)}>
                                                    Update
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;
