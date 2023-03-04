import './ListCreation.css'
import {Component} from 'react'

class ListCreation extends Component {
  render() {
    const {initialHistoryList, deleteItem} = this.props
    const {timeAccessed, logoUrl, title, domainUrl, id} = initialHistoryList
    const deleteId = () => {
      deleteItem(id)
    }
    return (
      <li className="list-container1">
        <div className="container2">
          <div className="container3">
            <div className="cont-time-style">
              <p className="time-style">{timeAccessed}</p>
            </div>
            <div className="container4">
              <img src={logoUrl} className="img-style" alt="domain logo" />
              <p className="para-style">{title}</p>
              <p className="para-style-2">{domainUrl}</p>
            </div>
          </div>
          <div className="">
            <button
              data-testid="delete"
              className="button"
              onClick={deleteId}
              type="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                className=""
                alt="delete"
              />
            </button>
          </div>
        </div>
      </li>
    )
  }
}
export default ListCreation
