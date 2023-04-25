import { useState, useEffect } from "react";
import axios from "axios";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


const Card = (props) => {
    const setAppColor = props.setColor;
    const [quote,setQuote] = useState("");
    const [author,setAuthor] = useState("");
    const [backgroundColor,setbackgroundColor] = useState("");
   

    const getQuote = async () => {
        const response = await axios.get("https://api.quotable.io/random?maxLength=400");
        setQuote(response.data.content);
        setAuthor(response.data.author);
        //setbackgroundColor(generateRandomColor());
        setAppColor(generateRandomColor());
    }
    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }



    useEffect(() => {getQuote();}, []);

    return (
       
        <div className="card" style={{backgroundColor:backgroundColor}}>
            <div className="card-body">
                <FaQuoteLeft/>
                {quote}
                <FaQuoteRight/>
            </div>
            <div className="card-footer">
                <span className="author">{author}</span>
            </div>
            <div className="card-actions">
               
                <div className="generate-btn btn" onClick={getQuote}>Next Quote</div>
                
            </div>
        </div>
    );
}

export default Card;


