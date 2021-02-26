

const Contact = (props) => {

return (



<div className="survey" style={{display:"flex"}} >
<div className="Contact-us bg-pri" style={{flex:1}}>

<form >
<div className="container">
<h2 className="headercontact m-heading py-1">Feel free to ask anything </h2>
<div className="form-group">

    <input className="form-input" type="text" name="name" placeholder="Name"/>
    <input className="form-input" type="email" name="email" placeholder="Email"/>

</div>

<div className="form-group">
    <input  className="form-input" type="text" name="subject" placeholder="Subject"/>
</div>


<div className="form-group">
    <textarea   className="form-input" name="message" placeholder="Message" cols="10" rows="10"></textarea>
</div>
<input className="btn btn-dark" type="submit" value="Submit"/>


</div>

</form>

</div>



<div ClassName="map" style={{flex:1}}>



</div>






 



   
</div>   
)
}
export default Contact;