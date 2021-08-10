import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import "./API_list.css"

function API_list() {
    return (
        <div className="api-list">
            <div className="para">
                <p className="first">The terms you are tracking</p>
                <p className="second">The data will refresh every 5 min</p>
            </div>

            <div className="list">
                  <table>
                    <tr>
                      <th>Keywords</th>
                      <th></th>
                      <th>Goal</th>
                      <th>Matches</th>
                      <th>Search Status</th>
                      <th>Delete keyword</th>
                    </tr>

                    <tr>
                      <td>Chair</td>
                      <td>
                        <SearchIcon />
                      </td>
                      <td>Lead gen</td>
                      <td>6</td>
                      <td>Done</td>
                      <td>
                        <DeleteIcon />
                      </td>
                    </tr>

                    <tr className="table2">
                      <td>Blockchain</td>
                      <th></th>
                      <td>technology</td>
                      <td>18</td>
                      <td>Done</td>
                      <td className="extra">
                        <DeleteIcon />
                      </td>
                    </tr>

                    <tr>
                      <td>ReactJs</td>
                      <th></th>
                      <td>technology</td>
                      <td>18</td>
                      <td>Done</td>
                      <td className="extra">
                        <DeleteIcon />
                      </td>
                    </tr>

                    <tr>
                      <td>NextJs</td>
                      <th></th>
                      <td>technology</td>
                      <td>18</td>
                      <td>Done</td>
                      <td className="extra">
                        <DeleteIcon />
                      </td>
                    </tr>

                    <tr>
                      <td>Typescript</td>
                      <th></th>
                      <td>technology</td>
                      <td>18</td>
                      <td>Done</td>
                      <td className="extra">
                        <DeleteIcon />
                      </td>
                    </tr>

                    <tr>
                      <td>Javascript</td>
                      <th></th>
                      <td>technology</td>
                      <td>18</td>
                      <td>Done</td>
                      <td className="extra">
                        <DeleteIcon />
                      </td>
                    </tr>

                    <tr>
                      <td>Django</td>
                      <th></th>
                      <td>technology</td>
                      <td>18</td>
                      <td>Done</td>
                      
                      <td className="extra">
                        <DeleteIcon />
                      </td>
                    </tr>
              </table>
            </div>

            <div className="welcome">
              <div className="welcome-rectangle">
                <p>View Results</p>
              </div>
            </div>

        </div>
    )
}

export default API_list
