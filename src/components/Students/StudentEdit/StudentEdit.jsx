import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { studentContext } from '../../../store/StudentContext/StudentProvider';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';
import "./StudentEdit.scss";

function StudentEdit() {
  const { arr, confirmHandler } = useContext(studentContext);

  let location = useLocation();
  let [id, setId] = useState()
  let [name, setName] = useState();
  let [number, setNumber] = useState();
  let [group, setGroup] = useState();

  useEffect(() => {
    arr.map(element => {
      if(+element.id === +location.pathname.split('/').at(-1)){
        setId(element.id)
        setName(element.name);
        setNumber(element.number);
        setGroup(element.group);
      }
    });
  }, []);

  return (
    <div className='main d-flex position-relative'>
      <Navbar />
      <div className='main__data col-9'>
        <Header />
        <div className='student'>
          <div className='student__intro-box d-flex align-items-center justify-content-between'>
            <div className='student__title-box d-flex align-items-center'>
              <h2 className='student__title'>
                O'quvchini tahrirlash
              </h2>
            </div>
          </div>
          <div className='student-edit'>
            {
              arr.map(element => {
                if(+element.id === +location.pathname.split("/").at(-1)){
                  return (
                    <div key={"c" + element.id} className='student-edit__header d-flex justify-content-between'>
                      <div className='student-edit__left d-flex'>
                        <div className='student-edit__img-box'>
                          <img src={`https://picsum.photos/id/${+element.id}/80/80`} alt="user" />
                        </div>
                        <div className='student-edit__name-box'>
                          <div className='student-edit__name'>
                            {element.name}
                          </div>
                          <div className='student-edit__number'>
                            {element.number}
                          </div>
                        </div>
                      </div>
                      <div className='student-edit__info'>
                        <div className='student-edit__stats'>
                          Guruhlar:
                          <span className='student-edit__stats-num'>
                            {element.groupNum} ta 
                          </span> 
                        </div>
                        <div className='student-edit__stats'>
                          Jami qoldirilgan darslar: 
                          <span className='student-edit__stats-num'>
                            0 ta
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                }
              })
            }
            <ul className='student-edit__list'>
              <li className="student-edit__item">
                <div className='student-edit__input-box'>
                  <input 
                    type="text" 
                    name='name' 
                    className='student-edit__input' 
                    required
                    id='name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="name" className='student-edit__label'>
                    O'quvchining ismini kiriting
                  </label>
                </div>
              </li>
              <li className="student-edit__item">
                <div className='student-edit__input-box'>
                  <input 
                    type="date" 
                    name='birth' 
                    className='student-edit__input'
                    id='birth'
                  />
                  <label htmlFor="birth" className='student-edit__label'>
                    O'quvchining tug'ulgan sanasini kiriting
                  </label>
                </div>
              </li>
              <li className="student-edit__item">
                <div className='student-edit__input-box'>
                  <input 
                    type="tel" 
                    name='tel' 
                    className='student-edit__input' 
                    required
                    id='tel' 
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    pattern="[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                  />
                  <label htmlFor="tel" className='student-edit__label'>
                    O'quvchining telefon raqamini kiriting
                  </label>
                </div>
              </li>
              {/* <li className='student-edit__item'>
                <ul className='student-edit__inner-list'>
                  {
                    group.map(item => {
                      return (
                        <li className='student-edit__inner-item d-flex align-items-center justify-content-between' key={item + "c"}>
                          <div className='student-edit__group-name'>
                            Guruh # {item}
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
              </li> */}
            </ul>
            <div className='student-edit__btns d-flex justify-content-end'>
              <Link to={"/students"}>
                <button 
                  type="button" 
                  className="btn btn-outline-primary me-3"
                >
                  Bekor qilish
                </button>
              </Link>
              <Link to={"/students"}>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => confirmHandler(id, name, number)}
                >
                  Saqlash
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentEdit
