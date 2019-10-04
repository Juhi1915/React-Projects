import React  from 'react'

export const tableData =()=> [
  { name: 'John', age: 15, gender: 'Male' },
  { name: 'Amber', age: 40, gender: 'Female' },
  { name: 'Leslie', age: 25, gender: 'Other' },
  { name: 'Ben', age: 70, gender: 'Male' },
]
 export const AseDec =()=>{
    return (
      <div>
        <table class="ui celled fixed sortable table">
          <thead class="">
            <tr class="">
              <th class="">Name</th>
              <th class="">Age</th>
              <th class="">Gender</th>
            </tr>
          </thead>
          <tbody class="">
            <tr class="">
              <td class="">John</td>
              <td class="">15</td>
              <td class="">Male</td>
            </tr>
            <tr class="">
              <td class="">Amber</td>
              <td class="">40</td>
              <td class="">Female</td>
            </tr>
            <tr class="">
              <td class="">Leslie</td>
              <td class="">25</td>
              <td class="">Other</td>
            </tr>
            <tr class="">
              <td class="">Ben</td>
              <td class="">70</td>
              <td class="">Male</td>
            </tr>
          </tbody>
        </table>
      </div>
    )

}

export default AseDec;