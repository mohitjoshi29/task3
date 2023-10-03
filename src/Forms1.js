// import React, { useEffect, useState } from 'react'


// export default function App() {
//     const [forms, setForms] = useState({})
//     const [arr, setArr] = useState([]);

//     const handleData = (e) => {
//         const name=e.target.name;
//         const value=e.target.value;
//         setForms({...forms,[name]:value})
//     }
//     const userData = (e) => {
//         e.preventDefault();
//         const data=({forms});
//         setArr(oldArray => [...oldArray, data]);
//         console.log(forms);
//     }


//     useEffect(()=>{
//         console.log(arr);
//     },[arr])


//     return (
//         <div>
//             {/* <!-- Button trigger modal -->*/}
//             <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//                 Add user Data
//             </button>

//             {/* <!-- Modal --> */}
//             <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div class="modal-dialog">
//                     <div class="modal-content">
//                         <div class="modal-header">
//                             <h1 class="modal-title fs-5" id="exampleModalLabel">User Form...</h1>
//                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div class="modal-body">
//                             <form>
//                                 <div class="mb-3">
//                                     <label for="exampleInputEmail1" class="form-label">name</label>
//                                     <input type="text" value={forms.name} class="form-control" name='name' onChange={(e) =>handleData(e)} id="exampleInput" />
//                                 </div>
//                                 <div class="mb-3">
//                                     <label for="exampleInputEmail" class="form-label">email</label>
//                                     <input type="email" value={forms.email} class="form-control" name='email' onChange={(e) =>handleData(e)} id="exampleInputEmail" />
//                                 </div>
//                                 <div class="mb-3">
//                                     <label for="exampleInputNumber" class="form-label">Contact</label>
//                                     <input type="number" value={forms.contact} class="form-control" name='contact' onChange={(e) =>handleData(e)} id="exampleInputNumber" />
//                                 </div>
//                                 <div class="mb-3">
//                                     <label for="exampleInputPassword" class="form-label">password</label>
//                                     <input type="password" value={forms.password} class="form-control" name='password' onChange={(e) =>handleData(e)} id="exampleInputPassword" />
//                                 </div>
//                             </form>
//                         </div>
//                         <div class="modal-footer">
//                             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                             <button type="button" class="btn btn-primary" onClick={userData}>Submit</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <table className='table'>
//                 <thead className='thead'>
//                     <tr>
//                         <td>name</td>
//                         <td>email</td>
//                         <td>contact</td>
//                         <td>password</td>
//                         <td>Action</td>
//                     </tr>
//                 </thead>
//                 <tbody className='tbody'>
//                     {arr.map((item, index) => {
//                         return (
//                             <tr key={index}>
//                                 <td>{item.name}</td>
//                                 <td>{item.email}</td>
//                                 <td>{item.contact}</td>
//                                 <td>{item.password}</td>
//                                 <td>
//                                     <button className='btn btn-danger'>Delete</button>
//                                     <button className='btn btn-success' style={{marginLeft:'10px'}}>Edit</button>
//                                 </td>
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>


//         </div>
//     )
// }

