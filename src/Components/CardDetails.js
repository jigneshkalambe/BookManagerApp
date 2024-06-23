import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../Components/Data";
import "../App.css";
import axios from "axios";
import img from "../images/6897358.jpg";
const CardDetails = () => {
    const { id } = useParams();
    const filterData = Data.find((product) => product.id === id);
    const [newData, setNewData] = useState([]);
    useEffect(() => {
        const fetching_Data = async () => {
            await axios
                .get(`http://localhost:3001/books`)
                .then((res) => {
                    setNewData(res.data);
                })
                .catch((err) => console.log(err));
        };
        fetching_Data();
    }, [id]);
    // if (!filterData) {
    //     return <div>Product not found</div>;
    // }
    // const { book_id, title, author, genre, published_year } = filterData;
    const newFilter = newData.find((newProduct) => newProduct.id === id);
    if (!newFilter) {
        return <div>Product not found</div>;
    }
    const { book_id, title, author, genre, published_year } = newFilter;
    // console.log(newFilter);

    return (
        // <div className="container my-5">
        //     <div className="card  shadow-lg ">
        //         <div className="card-header bg-dark text-white">
        //             <h2 className="card-title text-center p-1  m-0">Book Details</h2>
        //         </div>
        //         <div className="card-body">
        //             <h5 className="card-text">
        //                 <strong>Book ID:</strong> {book_id}
        //             </h5>
        //             <h5 className="card-text">
        //                 <strong>Title:</strong> {title}
        //             </h5>
        //             <h5 className="card-text">
        //                 <strong>Author:</strong> {author}
        //             </h5>
        //             <h5 className="card-text">
        //                 <strong>Genre:</strong> {genre}
        //             </h5>
        //             <h5 className="card-text">
        //                 <strong>Published Year:</strong> {published_year}
        //             </h5>
        //         </div>
        //         <div className="card-footer">
        //             <button className="btn btn-secondary" onClick={() => window.history.back()}>
        //                 Go Back
        //             </button>
        //         </div>
        //     </div>
        // </div>
        <div className="details-container">
            <div className="details-card">
                <div className="details-image">
                    <img className="w-100 h-100" src={img} alt="Book" />
                </div>
                <div className="details-content">
                    <h2 className="details-title">Book Details</h2>
                    <p className="details-text">
                        <strong>Book ID:</strong> {book_id}
                    </p>
                    <p className="details-text">
                        <strong>Title:</strong> {title}
                    </p>
                    <p className="details-text">
                        <strong>Author:</strong> {author}
                    </p>
                    <p className="details-text">
                        <strong>Genre:</strong> {genre}
                    </p>
                    <p className="details-text">
                        <strong>Published Year:</strong> {published_year}
                    </p>
                    <button className="btn btn-secondary" onClick={() => window.history.back()}>
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
