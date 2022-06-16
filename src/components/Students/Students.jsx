import React from 'react';
import "./Students.scss";
import "../Main.scss";
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';

function Students() {
  return (
    <div className='main d-flex position-relative'>
      <Navbar />
      <div className='main__data col-9'>
        <Header />
        <div className='student'>
          <div className='student__intro-box d-flex align-items-center justify-content-between'>
            <div className='student__title-box d-flex align-items-center'>
              <h2 className='student__title'>
                O'quvchilar
              </h2>
              <div className='student__btn-box'>
                <button className='student__btn btn btn-primary'>
                  O'quvchi qo'shish
                </button>
              </div>
            </div>
            <div className='student__search-box col-6 d-flex align-items-center'>
              <i class='bx bx-search'></i>
              <input 
                type="text" 
                name='search' 
                className='student__input' 
                required 
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Students
