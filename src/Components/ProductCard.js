import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
const ProductCard = (props) => {
    const { book_id, title, author, genre, published_year, id } = props.products;
    const [allData, setallData] = useState({
        book_id,
        title,
        author,
        genre,
        published_year,
        id,
    });

    return (
        <>
            <div className="card-box">
                <Link className="text-decoration-none" to={`/${id}`}>
                    <div>
                        <h5>Book ID : {book_id}</h5>
                        <h5>Title : {title}</h5>
                        <h5>Author : {author}</h5>
                        <h5>Genre : {genre}</h5>
                        <h5>Published year : {published_year}</h5>
                    </div>
                </Link>
                <div className="w-100 d-flex justify-content-between">
                    <button
                        onClick={() => props.viewFN(props.products, props.index)}
                        className="view_btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        View
                    </button>
                    <button className="delete_btn" onClick={() => props.deleteFN(id)}>
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductCard;

<>
    {/* <div className="modal fade" id="exampleModal">
                <div className="modal-dialog  modal-lg  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header d-flex justify-content-center">
                            <h1 className="modal-title fs-5">You can update the data from here :)</h1>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex flex-column gap-4 p-3 align-items-center justify-content-center">
                                <input
                                    value={allData.book_id}
                                    name="book_id"
                                    // onChange={inputHandler}
                                    className="form-control w-100"
                                    placeholder="Enter Book ID"
                                ></input>
                                <input
                                    value={allData.title}
                                    name="title"
                                    // onChange={inputHandler}
                                    className="form-control w-100"
                                    placeholder="Enter Book Title"
                                ></input>
                                <input
                                    value={allData.author}
                                    name="author"
                                    // onChange={inputHandler}
                                    className="form-control w-100"
                                    placeholder="Enter Book Author"
                                ></input>
                                <input
                                    value={allData.genre}
                                    name="genre"
                                    // onChange={inputHandler}
                                    className="form-control w-100"
                                    placeholder="Enter Book Genre"
                                ></input>
                                <input
                                    value={allData.published_year}
                                    name="published_year"
                                    // onChange={inputHandler}
                                    className="form-control w-100"
                                    placeholder="Enter Book published year"
                                ></input>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button className="btn btn-success d-block" v onClick={() => props.updateFN}>
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
</>;
