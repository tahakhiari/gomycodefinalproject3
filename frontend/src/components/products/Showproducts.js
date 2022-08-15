import React, { useState } from 'react'
import Image from 'react-bootstrap/Image'
import axios from 'axios'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { add_Albums } from '../../JS/actions/actionAlbum'
import UpdateProduct from './UpdateProduct'
const Showproducts = ({ albums }) => {

  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [prix, setPrix] = useState(0)
  const [uploading, setUploading] = useState(false)
  const [productUpdate,setProductUpdate]=useState({})
  const I = useSelector(state => state.Addalbum)
  const { album } = I
 
    const uploadFileHandler = async (e) => {
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
  
  const submitHandler = () => {
    dispatch(add_Albums({ name: name, description: description, image: image, prix: prix }))
    if (album) {
      alert('Album has been successfully Added!')
    }
  }


  return (
    <div>

      <div class='' style={{ width: "75%", height: "50px", margin: "auto" }}>
        <h2>Album list</h2>

        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#ADDModal">
          ADD PRODUCT
        </button>


        <div class="modal fade" id="ADDModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title fst-normal" id="exampleModalLabel">ADD PRODUCT </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
              </div>

              <div class="modal-body">

                {/*id="formFile"*/}

                <form className="row g-3">
                  <div className="mb-3">

                    <label for="formFile" class="form-label">Picture</label>
                    <input type='file' onChange={uploadFileHandler} />

                  </div>

                  <div class="mb-3">
                    <label for="formFile" class="form-label">name</label>
                    <input class="form-control border border-dark" type="text" id="formFile" value={name} onChange={e => setName(e.target.value)} />
                  </div>

                  <div class="mb-3">
                    <label for="formFile" class="form-label">Price</label>
                    <input class="form-control border border-dark" type="text" id="formFile" value={prix} onChange={e => setPrix(e.target.value)} />
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control border border-dark" id="exampleFormControlTextarea1" rows="3" value={description} onChange={e => setDescription(e.target.value)} ></textarea>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-warning" onClick={() => submitHandler()}>Save</button>
                  </div>

                </form>

              </div>



            </div>
          </div>
        </div>



        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">prix</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {albums.map(a =>
              <tr>

                <th scope="row">1</th>

                <td><img src={a.image} /></td>
                <td>{a.name}</td>
                <td>{a.description}</td>
                <td>{a.prix} DT</td>
                <td>
                  <div >
                    <button type="button" class="btn btn-danger m-1">Delete</button>
                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" onClick={()=>setProductUpdate(a)} data-bs-target="#updateModal">Update</button>
                  </div>

                </td>
              </tr>
            )}

          </tbody>
        </table>
                <UpdateProduct product={productUpdate}/>
        

      </div>

    </div>
  )
}

export default Showproducts