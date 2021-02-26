import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Card = (props) => {

    return (



        <div  className='cardss'>
            <div >
                <img  src="./assets/th.jpg" className='img' />
                <div>
                    <h2 >Flower </h2>
                    <p>Some quick example text to build on the card title and make up the bulk of
                        the card'snnnnnnnnnnnnnnnnnnn content.
    </p>
    {/* <button type="button" class="btn btn-primary" >Add to Cart</button> */}
    {/* <button type="button" classname="text-center" >Add to Cart</button> */}
    <Button
          variant="default"
          style={{ color: "white", background: "silver"}}
        >
          Add to Cart
        </Button>
                </div>
            </div>
        </div>
    )
}
export default Card;