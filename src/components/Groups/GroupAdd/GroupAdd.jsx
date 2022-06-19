import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import Navbar from '../../Navbar/Navbar'
import "./GroupAdd.scss";

function GroupAdd() {
  return (
    <div className='main d-flex position-relative'>
      <Navbar />
      <div className='main__data col-9'>
        <Header />
        <div className='student'>
          <h2 className='student__title'>
            Guruh qo'shish
          </h2>
          <div className='student-add'>
            <ul className='student-add__list'>
              <li className="student-add__item">
                <div className='student-add__input-box'>
                  <select 
                    name="subject" 
                    id="subject" 
                    className='student-add__input student-edit__input'
                  >
                    <option value="Fan">
                      Fan
                    </option>
                    <option value="Matematika">
                      Matematika
                    </option>
                    <option value="Ingliz Tili">
                      Ingliz Tili
                    </option>
                  </select>
                  <label htmlFor="subject" className='student-edit__label'>
                    Guruhda o'rgatiladigan fanni tanlang
                  </label>
                </div>
              </li>
              <li className="student-add__item">
                <div className='student-add__input-box'>
                  <select 
                    name="education" 
                    id="education" 
                    className='student-add__input student-edit__input'
                  >
                    <option value="Ta'lim shakli">
                      Ta'lim shakli
                    </option>
                    <option value="Sanoqli">
                      Sanoqli
                    </option>
                    <option value="Oylik">
                      Oylik
                    </option>
                  </select>
                  <label htmlFor="stat" className='student-edit__label'>
                    O'qituvchi holatini tanlang
                  </label>
                </div>
              </li>
              <li className="student-add__item">
                <div className='student-add__input-box'>
                  <select 
                    name="stat" 
                    id="stat" 
                    className='student-add__input student-edit__input'
                  >
                    <option value="holat">
                      Holat
                    </option>
                    <option value="Aktiv">
                      Aktiv
                    </option>
                    <option value="Muzlatilgan">
                      Muzlatilgan
                    </option>
                  </select>
                  <label htmlFor="stat" className='student-edit__label'>
                    O'qituvchi holatini tanlang
                  </label>
                </div>
              </li>
              <li className="student-edit__item">
                <div className='student-add__input-box'>
                  <input 
                    type="number" 
                    name='payment' 
                    className='student-edit__input student-add__input' 
                    required
                    id='payment'
                    placeholder='Hisob holati'
                  />
                  <label htmlFor="payment" className='student-edit__label'>
                    O'qituvchining hisob holatini kiriting
                  </label>
                </div>
              </li>
              <li className="student-add__item">
                <div className='student-add__input-box'>
                  <input 
                    type="number" 
                    name='group' 
                    className='student-edit__input student-add__input' 
                    required
                    id='group'
                    placeholder='Guruhi'
                  />
                  <label htmlFor="group" className='student-edit__label'>
                    O'qituvchining guruhini kiriting
                  </label>
                </div>
              </li>
            </ul>
            <div className='student-edit__btns d-flex justify-content-center'>
              <Link to={"/groups"}>
                <button 
                  type="button" 
                  className="btn btn-outline-primary me-3"
                >
                  Ortga
                </button>
              </Link>
              <Link to={"/groups"}>
                <button 
                  type="button" 
                  className="btn btn-primary"
                >
                  Qo'shish
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupAdd
