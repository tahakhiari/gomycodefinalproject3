import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {updateAlbum} from '../../JS/actions/actionAlbum'
import { useDispatch } from 'react-redux'
const UpdateProduct = ({product}) => {
    const [name,setName]=useState(product.name)
    const[uploading,setUploading]=useState(false)
    const[image,setImage]=useState('')
    const [description, setDescription] = useState(product?.description)
    const [prix, setPrix] = useState(product?.prix)
    const dispatch=useDispatch()
    const uploadFileHandler = async (e) => {
        if(image!==""){
            const file = e.target.files[0]
            const formData = new FormData()
            formData.append('image', file)
            setUploading(true)

            try {
                const config = {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }

                const { data } = await axios.post('/api/uploads', formData, config)

                setImage(data)
                setUploading(false)
            } catch (error) {
                console.error(error)
                setUploading(false)
            }
        }
      
    }
    useEffect(()=>{
        
        setName(product?.name)
        setDescription(product?.description)
        setPrix(product?.prix)
    },[])
    const updateHandler=()=>{
        console.log(name)
        dispatch(updateAlbum({id:product._id,name:name,description:description,prix:prix,image:image}))
    }
    return (
        <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fst-normal" id="exampleModalLabel">Update PRODUCT </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="row g-3">
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Picture</label>
                                <input class="form-control border border-dark"   type="file" onClick={uploadFileHandler} id="formFile" />
                            </div>

                            <div class="mb-3">
                                <label for="formFile" class="form-label">name</label>
                                <input class="form-control border border-dark" value={name} onChange={e=>setName(e.target.value)} type="text" id="formFile" />
                            </div>

                            <div class="mb-3">
                                <label for="formFile" class="form-label">Price</label>
                                <input class="form-control border border-dark" value={prix} onChange={e=>setPrix(e.target.value)} type="text" id="formFile" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                <textarea class="form-control border border-dark" value={description} onChange={e=>setDescription(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-warning" onClick={updateHandler}>Save</button>
                            </div>

                        </form>

                    </div>



                </div>
            </div>
        </div>
    )
}

export default UpdateProduct