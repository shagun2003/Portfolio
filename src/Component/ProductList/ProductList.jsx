import React, { useContext } from 'react';
import './ProductList.css';
import ecommerce from "../../ima/ecommerce.JPG";
import weater from "../../ima/weater.JPG";
import ima from "../../ima/ima.JPG";
import { ThemeContext } from "../../Context";

export const ProductList = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className={`pl ${darkMode ? 'dark-mode' : ''}`}>
            <h1 className="pl-heading">My Projects</h1> {/* Heading added here */}
            <div className="container">
                <div className="row">
                    <img src={ecommerce} alt="" />
                    <a href="https://github.com/shagun2003/ecommerce" target="_blank" rel="noopener noreferrer">
                        <p className={darkMode ? 'dark-text' : ''}>Ecommerce Website</p>
                    </a>
                </div>

                <div className="row">
                    <img src={weater} alt="" />
                    <a href="https://github.com/shagun2003/Weather-Forecast" target="_blank" rel="noopener noreferrer">
                        <p className={darkMode ? 'dark-text' : ''}>Weather Website</p>
                    </a>
                </div>

                <div className="row">
                    <img src={ima} alt="" />
                    <a href="https://github.com/shagun2003/image-search" target="_blank" rel="noopener noreferrer">
                        <p className={darkMode ? 'dark-text' : ''}>Image Search Website</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
