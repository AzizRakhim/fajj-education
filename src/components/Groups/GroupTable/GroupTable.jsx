import React from 'react'
import { useContext } from 'react'
import { groupContext } from '../../../store/GroupContext/GroupProvider'

function GroupTable() {
  const { groups } = useContext(groupContext);
  return (
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">GURUH NOMI</th>
            <th scope="col">HISOB HOLATI</th>
            <th scope="col">FAN NOMI</th>
            <th scope="col">TA'LIM SHAKLI</th>
            <th scope="col">TO'LOV MIQDORI</th>
            <th scope="col">O'QITUVCHI</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            groups.map(item => {
              return (
                <tr key={`c` + item.id}>
                  <th scope='row'>
                    {item.id}
                  </th>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    {item.status}
                  </td>
                  <td>
                    {item.subject}
                  </td>
                  <td>
                    {item.educationType}
                  </td>
                  <td>
                    <span>UZS </span>
                    {item.payment}
                  </td>
                  <td>
                    {item.teacher}
                  </td>
                  <td className='d-flex align-items-center table-td'>
                    <button className='table-btn'>
                      <i class='bx bxs-pencil'></i>
                    </button>
                    <button className="table-btn">
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

export default GroupTable
