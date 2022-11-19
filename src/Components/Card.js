import React from 'react'

const Card = (data, key) => {
    return (
        <>

            <div className="Card-Cantaniener">
                <div className="sub-container">
                    <h1> {data.lable}</h1>
                    <div className="deatiles">
                        <div className="image">
                            <img src={data.image} key={key} alt="profile" />
                        </div>

                    </div>
                    <div className="flex">
                        <p>Meal type:{data.meal}</p>

                        <span>Calories:</span>
                        <p>{data.calories}</p>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Card