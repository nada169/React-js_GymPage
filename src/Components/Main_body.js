import Card from './Card'
const Main_body = (props) => {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9]

    //container have rows ad colums
    return (
        <div className='container'>
            <div className='row'>
                {arr.map(index => (
                    <div className='col-md-4 col-sm-12'>
                        <Card></Card>
                    </div>
                ))}

            </div>
        </div>



    )
}
export default Main_body;