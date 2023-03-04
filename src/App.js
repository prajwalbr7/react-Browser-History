import {Component} from 'react'
import './App.css'
import ListCreation from './components/ListCreation'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {searchInput: '', appDetails: initialHistoryList}

  onChangeText = event => {
    console.log(event.target.value)
    this.setState({searchInput: event.target.value})
  }

  DeleteList = id => {
    const {appDetails} = this.state
    const filterData = appDetails.filter(list => list.id !== id)
    this.setState({appDetails: filterData})
  }

  render() {
    const {searchInput, appDetails} = this.state
    const searchResult = appDetails.filter(list =>
      list.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="cont-1">
        <div className="cont-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="img-1"
            alt="app logo"
          />
          <div className="cont-3">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="img-2"
              alt="search"
            />
            <input
              type="search"
              placeholder="Search history"
              className="input-style"
              onChange={this.onChangeText}
            />
          </div>
        </div>
        <div className="cont-part-2">
          {searchResult.length > 0 ? (
            <ul className="ul-list-style">
              {searchResult.map(eachItem => (
                <ListCreation
                  initialHistoryList={eachItem}
                  deleteItem={this.DeleteList}
                  key={eachItem.id}
                />
              ))}
            </ul>
          ) : (
            <p className="">There is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}

export default App
