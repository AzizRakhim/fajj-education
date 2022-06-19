import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { studentContext } from '../../../store/StudentContext/StudentProvider';
import "./Table.scss";

function Table() {
  const { arr, cancelHandler } = useContext(studentContext);

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
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            arr.map((item, idx) => {
              return (
                <tr key={`a` + idx}>
                  <th scope='row'>
                    {idx + 1}
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
                  <td className='d-flex align-items-center table-td'>
                    <Link to={`/students/edit/${item.id}`} className="student__tdn">
                      <button className='table-btn'>
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

export default Table
