import React from 'react'
import './volunteer.css';
import { useState } from 'react';

export default function Vol() {

    const [fname,setFname] = useState(""); 
    const [address,setAddress] = useState(""); 

    const handleSubmit = ()=>{

    }
    return (
        <div className='vol-body'>
            <div className="vol-container">
                <div className="vol-title">Registration</div>
                <div className="vol-content">


                    <form onSubmit={handleSubmit()}>
                        <div className="vol-scroll">
                            <div className="vol-user-details">
                                <div className="vol-input-box">
                                    <span className="vol-details">Full Name</span>
                                    <input type="text" placeholder="Enter your name" value={fname} onChange={(e)=>{setFname(e.target.value)}} required />
                                </div>
                                <div className="vol-input-box">
                                    <span className="vol-details">Address</span>
                                    <input type="text" placeholder="Enter your Address" value={address} onChange={(e)=>{setAddress(e.target.value)}} required />
                                </div>
                                <div className="vol-input-box">
                                    <span className="vol-details">Contact Number</span>
                                    <input type="text" placeholder="Enter your Contact Number" required />
                                </div>
                                <div className="vol-input-box">
                                    <span className="vol-details">Email</span>
                                    <input type="text" placeholder="Enter your Email" required />
                                </div>
                                <div className="vol-input-box">
                                    <span className="vol-details">Date Of Birth</span>
                                    <input type="text" placeholder="Enter Your Date Of Birth" />
                                </div>
                                <div className="vol-input-box">
                                    <span className="vol-details">Blood Group</span>
                                    <input type="text" placeholder="Enter Your Blood Group" />
                                </div>
                                <div className="vol-input-box">
                                    <span className="vol-details">Education</span>
                                    <input type="text" placeholder="Enter Your Education" />
                                </div>
                                <div className="vol-input-box">
                                    <span className="vol-details">Job/Buissness</span>
                                    <input type="text" placeholder="Enter Your Profession" required />
                                </div>
                                <div className="vol-input-box">
                                    <span className="vol-details">Hobbies</span>
                                    <input type="text" placeholder="Enter Your Hobbies" />
                                </div>

                                <div className="vol-gender-details">
                                    <input type="radio" key="1" name="gender" id="dot-1" />
                                    <input type="radio" key="2" name="gender" id="dot-2" />
                                    <input type="radio" key="3" name="gender" id="dot-3" />
                                    <span className="vol-gender-title">Gender</span>
                                    <div className="vol-category">
                                        <label for="dot-1">
                                            <span className="vol-dot vol-one"></span>
                                            <span className="vol-gender">Male</span>
                                        </label>
                                        <label for="dot-2">
                                            <span className="vol-dot vol-two"></span>
                                            <span className="vol-gender">Female</span>
                                        </label>
                                        <label for="dot-3">
                                            <span className="vol-dot vol-three"></span>
                                            <span className="vol-gender">Prefer not to say</span>
                                        </label>
                                    </div>
                                </div>

                            </div>

                            <div className="vol-input-box vol-bottom">
                                <span className="vol-details">Any Social Work Experience?</span>
                                <textarea className="vol-input-textarea" type="text" placeholder="" ></textarea>
                            </div>
                            <div className="vol-input-box vol-bottom">
                                <span className="vol-details">What Kind Of Help Can You Do For Foundation?</span>
                                <textarea className="vol-input-textarea" type="text" placeholder="" ></textarea>
                            </div>

                        </div>


                        <div className="vol-button">
                            <input type="submit" />
                        </div>

                    </form>


                </div>
            </div>
        </div>
    )
}
