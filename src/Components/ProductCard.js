import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
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
