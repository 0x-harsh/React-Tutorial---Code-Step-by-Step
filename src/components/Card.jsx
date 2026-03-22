const Card = (props) => {
    return (
        <div className="card">
            <div className="top">
                <img src={props.companyLogo} alt="" />
                <button>Save
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#111"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" /></svg>
                </button>
            </div>
            <div className="center">
                <h3>{props.companyName}<span>{props.datePosted}</span></h3>
                <h2>{props.role}</h2>
                <div className='tags'>
                    <h4>{props.tag1}</h4>
                    <h4>{props.tag2}</h4>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>{props.payPerHour}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}

export default Card