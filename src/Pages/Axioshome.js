import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

const Axioshome = () => {
    const [APIDATA, setApidata] = useState([]);
    const [inputData, setinputData] = useState({
        book_id: "",
        title: "",
        author: "",
        genre: "",
        published_year: "",
    });
    const [tempIND, setTempInd] = useState(0);

    useEffect(() => {
        getApi();
    }, [APIDATA]);

    const getApi = () => {
        axios
            .get(`http://localhost:3001/books`)
            .then((res) => {
                // console.log(res);
                setApidata(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const inputHandler = (e) => {
        setinputData({ ...inputData, [e.target.name]: e.target.value });
    };

    const submitApiHandler = async () => {
        await axios
            .post(`http://localhost:3001/books`, inputData)
            .then((res) => {
                console.log(res);
                setApidata([...APIDATA, res.data]);
                setinputData({
                    book_id: "",
                    title: "",
                    author: "",
                    genre: "",
                    published_year: "",
                });
            })
            .catch((err) => console.log(err));
    };

    const deleteApiHandler = (id) => {
        axios
            .delete(`http://localhost:3001/books/${id}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    const viewApiHandler = (val, ind) => {
        setinputData(val);
        setTempInd(ind);
    };

    const updateApiHandler = (ind) => {
        axios
            .put(`http://localhost:3001/books/${inputData.id}`, inputData)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
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
                <div className="row g-4 mt-3">
                    {APIDATA?.map((val, ind) => {
                        return (
                            <div className="col-lg-3 col-md-6 col-12" key={ind}>
                                <ProductCard
                                    index={ind}
                                    products={val}
                                    inputFN={inputHandler}
                                    deleteFN={deleteApiHandler}
                                    viewFN={viewApiHandler}
                                    updateFN={updateApiHandler}
                                    APIDATA={APIDATA}
                                    setApidata={setApidata}
                                ></ProductCard>
                            </div>
                        );
                    })}
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
                                        value={inputData.book_id}
                                        name="book_id"
                                        onChange={inputHandler}
                                        className="form-control w-100"
                                        placeholder="Enter Book ID"
                                    ></input>
                                    <input
                                        value={inputData.title}
                                        name="title"
                                        onChange={inputHandler}
                                        className="form-control w-100"
                                        placeholder="Enter Book Title"
                                    ></input>
                                    <input
                                        value={inputData.author}
                                        name="author"
                                        onChange={inputHandler}
                                        className="form-control w-100"
                                        placeholder="Enter Book Author"
                                    ></input>
                                    <input
                                        value={inputData.genre}
                                        name="genre"
                                        onChange={inputHandler}
                                        className="form-control w-100"
                                        placeholder="Enter Book Genre"
                                    ></input>
                                    <input
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
                                <button className="btn btn-success d-block" onClick={updateApiHandler}>
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Axioshome;
