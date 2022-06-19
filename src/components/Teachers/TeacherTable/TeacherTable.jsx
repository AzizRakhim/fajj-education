import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { teacherContext } from '../../../store/TeacherContext/TeacherProvider';
import "./TeacherTable.scss";


function TeacherTable() {
  const { arr, cancelHandler } = useContext(teacherContext);

  return (
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ISM</th>
            <th scope="col">GURUH</th>
            <th scope="col">TELEFON RAQAMI</th>
            <th scope="col">GURUHLAR</th>
            <th scope="col">HOLATI</th>
            <th scope="col">HISOB HOLATI</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            arr.map((item, idx) => {
              return (
                <tr key={`bd` + item.idx}>
                  <th scope='row'>
                    {idx+1}
                  </th>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    <span>Guruh #</span>
                    {item.group.map((el, index) => {
                      return (
                        <>
                          {index > 0 ? <span> / #</span> : ""}
                            {el} 
                        </>
                      );
                    })}
                  </td>
                  <td>
                    {item.number}
                  </td>
                  <td>
                    {item.groupNum} <span>ta</span>
                  </td>
                  <td>
                    {item.status}
                  </td>
                  <td>
                    <span>UZS </span>
                    {item.payment}
                  </td>
                  <td className='d-flex align-items-center table-td'>
                    <Link to={`/teachers/edit/${item.id}`} className="table-td">
                      <button className='table-btn table-td'>
                        <i class='bx bxs-pencil'></i>
                      </button>
                    </Link>
                    <button className="table-btn" onClick={() => cancelHandler(item.id)}>
                      <i class='bx bx-x'></i>
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default TeacherTable
