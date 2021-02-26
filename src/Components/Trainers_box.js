
const Trainersbox = (props) => {

    return (

        <div className="col-md-3 trainers-boxex-box">
            <img src="assets/trainer-1.jpg" />
            <span className="text-pink">Strength Trainer</span>
            <h4>{props.title}</h4>
            <p>{props.body}</p>

        </div>







    )
}
export default Trainersbox;