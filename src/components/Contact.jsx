import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
    const [pname,setPname]=useState("");
    const [price,setPrice]=useState("");
    const [quantity,setQuantity]=useState("");
    const [url,setUrl]=useState("")
    const navigate=useNavigate()


    const  saveData=(e)=> {
        e.preventDefault()
        let pdata={pname,price,quantity,url}
       // console.log(pdata)
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(pdata)
        }).then((resp) => {
            return resp.json()
         
        }).then((data) => {
          
            console.log(data)
        }).catch((error) => {
            console.log(error);
        })
        navigate("/home")
    }
    return (
        <React.Fragment>
           
                <h1>Product page</h1>
                <form onSubmit={saveData}>
                        <div className="mb-3 w-50 mx-auto">
                            <label for="a" className="form-label">ProductName</label>
                            <input type="text" className="form-control" id="a" placeholder="Enter your Product Name" value={pname} onChange={(e) => { setPname(e.target.value) }} />
                        </div>
                        <div className="mb-3 w-50 mx-auto">
                            <label for="b" className="form-label">Price</label>
                            <input type="text" className="form-control" id="b" placeholder="Enter your Price" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                        </div>
                        <div className="mb-3 w-50 mx-auto">
                            <label for="c" className="form-label">Quantity</label>
                            <input type="text" className="form-control" id="c" placeholder="Enter your Quantity" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} />
                        </div>
                        <div className="mb-3 w-50 mx-auto">
                            <label for="d" className="form-label">Image url</label>
                            <input type="text" className="form-control" id="d" placeholder="Enter your url" value={url} onChange={(e) => { setUrl(e.target.value) }}/>
                        </div>
                        <input type="submit" className="form-control w-50 mx-auto text-bg-success" />
                    </form>
          
        </React.Fragment>
    )
}
export default Contact;