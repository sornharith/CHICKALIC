import React, {useState} from 'react';
import './adpage.css';

import samplepic from "../image/sample_profilepic.png"

const AdminPage = () => {
  return (
    <div >
      {/* put navbar in here */}
    <div className="adminpage">
            <h1>Edit Admin User</h1>
        <div className="editadmin">
            <div className="content">
                <img src={samplepic} alt="" />
                <button className='upload'>UPLOAD</button>
                <button className='cancle'>CANCLE</button>
            </div>
            <form action="">
                <div className="data">
                  <div className="inrow">
                    <h4 className='label'>First Name</h4>
                    <input required type="text" className='firstname'/>
                  </div>
                  <div className="inrow">
                    <h4 className='label'>Last Name</h4>
                    <input required type="text" className='lastname'/>
                  </div>
                  <div className="inrow"> 
                    <h4 className='label'>Username</h4>
                    <input required type="text" className='username'/>
                  </div>
                  <div className="inrow">
                    <h4 className='label'>Email</h4>
                    <input required type="email" className='email'/>
                  </div>
                  <div className="inrow">
                    <h4 className='label'>Password</h4>
                    <input required type="password" className='password'/>
                  </div>
                  <div className="inrow">
                    <h4 className='label'>Confirm Password</h4>
                    <input required type="password" className='cmpassword'/>
                  </div>
                  
                </div>
                <button className='save' type='submit'>SAVE</button>
              </form>
        </div>
     </div>
     </div>
  );
};

// const Page = () => { // reference fetch data
//   const [firstName, setFirstName] = useState("MRS. CHICKEN");
//   const [lastName, setLastName] = useState("RUNNING");
//   const [username, setUsername] = useState("CHICKENRUN");
//   const [email, setEmail] = useState("chicken.admin@gmail.com");
//   const [password, setPassword] = useState("**********");
//   const [confirmPassword, setConfirmPassword] = useState("******");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//   };

//   return (
//     <div className="page">
//         <div className="title">Edit Admin User</div>
//       <div className="header">
//         <div className="content">
//                  <img src={samplepic} alt="" />
//                  <button className='upload'>UPLOAD</button>
//                  <button className='cancle'>CANCLE</button>
//              </div>
//       </div>
//       <form onSubmit={handleSubmit} className="form">
//         <div className="form-field">
//           <label htmlFor="firstName">First name*</label>
//           <input
//             type="text"
//             id="firstName"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="lastName">Last name*</label>
//           <input
//             type="text"
//             id="lastName"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="username">Username*</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="email">Email*</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="password">Password*</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="confirmPassword">Confirm Password*</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="submit-button">
//           SAVE
//         </button>
//       </form>
//     </div>
//   );
// };
// }

export default AdminPage