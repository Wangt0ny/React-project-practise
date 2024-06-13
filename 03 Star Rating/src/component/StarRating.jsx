import { useState } from 'react';
import './StarRating.css'
import { FaStar } from 'react-icons/fa'

function StarRating({ noOfStars = 5 }) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);


    function handleClick(currentIndex) {
        console.log(currentIndex)
        setRating(currentIndex)
    }

    function handleMouseMove(currentIndex) {
        console.log(currentIndex)
        setHover(currentIndex)
    }

    function handleMouseLeave() {
        setHover(rating)
    }



    return (
        <div className='star-rating'>
            {
                [...Array(noOfStars)].map((_, i) => {
                    // console.log(x, i)
                    i += 1

                    return <FaStar
                        key={i}
                        className={i <= (hover || rating) ? 'active' : 'inactive'}
                        onClick={() => handleClick(i)}
                        onMouseMove={() => handleMouseMove(i)}
                        onMouseLeave={() => handleMouseLeave(i)}
                        size={50} />
                })
            }
            <hr />
            rating:{rating},hover:{hover}
        </div>
    );
}

export default StarRating;