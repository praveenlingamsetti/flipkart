import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

// import CartContext from '../../Context/CartContext'

import Header from '../Header'
import EachItem from '../EachItem'
// import CartItem from '../CartItem'

import './index.css'
// import {escapeGlobCharacters} from 'jest-config/build/utils'
/* functionalities to be added
    1  add items to cart on clicking add button  localStorage
    2  filter the item by search input 
    3  similar products (suggestions) */

const productsList = [
  {
    id: '1',
    url:
      'https://i.postimg.cc/tTxL96BT/Whats-App-Image-2023-01-05-at-4-16-28-PM-1.jpg',
    brand: 'boat',
    description: 'boat strom call 1.69 inch HD display with bluetooth calling',
  },
  {
    id: '2',
    url:
      'https://i.postimg.cc/mgSZGvtq/Whats-App-Image-2023-01-05-at-4-16-27-PM.jpg',
    brand: 'realme',
    description: 'realme watch 3 1.8 inch Horizon curved Design with bluetooth',
  },
  {
    id: '3',
    url:
      'https://i.postimg.cc/HxHHV3RK/Whats-App-Image-2023-01-05-at-4-16-22-PM.jpg',
    brand: 'boat',
    description:
      'boat wave beat 1.69 HD display with complete health monitoring',
  },
  {
    id: '4',
    url:
      'https://i.postimg.cc/HWtyBhtS/Whats-App-Image-2023-01-05-at-4-16-27-PM-1.jpg',
    brand: 'realme',
    description: 'realme watch 2 pro 1.75 inch 320 X 385p Hi-res Display',
  },
  {
    id: '5',
    url:
      'https://i.postimg.cc/pLmkNHGV/Whats-App-Image-2023-01-05-at-4-16-28-PM.jpg',
    brand: 'boat',
    description:
      'boat wave Arcade with 1.81 inch HD display and Bluetooth calling ',
  },
  {
    id: '6',
    url:
      'https://i.postimg.cc/90PtpXQ1/Whats-App-Image-2023-01-05-at-4-16-27-PM-2.jpg',
    brand: 'noise',
    description: 'Noise ColorFit Icon 2 1.8 Display,Bluetooth Calling,AI Voice',
  },
  {
    id: '7',
    url:
      'https://i.postimg.cc/mDDwTWVg/Whats-App-Image-2023-01-05-at-4-16-26-PM.jpg',
    brand: 'noise',
    description: 'boat wave calling with bluetooth calling,voice assistance',
  },
  {
    id: '8',
    url:
      'https://i.postimg.cc/9MJnBBgr/Whats-App-Image-2023-01-05-at-4-16-26-PM-1.jpg',
    brand: 'samsung',
    description: 'SAMSUNG watch 4,44mm Super AMOLED display bluethooth Calling',
  },
  {
    id: '9',
    url:
      'https://i.postimg.cc/vZF60wV6/Whats-App-Image-2023-01-05-at-4-16-25-PM.jpg',
    brand: 'noise',
    discription: 'Noise ColorFit Icon 2 1.8 Display,Bluetooth Calling',
  },
  {
    id: '10',
    url:
      'https://i.postimg.cc/cCh5XBDv/Whats-App-Image-2023-01-05-at-4-16-25-PM-1.jpg',
    brand: 'samsung',
    discription: 'SAMSUNG Galaxy Watch 341 mm Bluetooth Calling',
  },
  {
    id: '11',
    url:
      'https://i.postimg.cc/DZJvV8Vf/Whats-App-Image-2023-01-05-at-4-16-24-PM.jpg',
    brand: 'samsung',
    description: 'SAMSUNG watch 5 40mm Super AMOLED display Bluetooth Calling',
  },
  {
    id: '12',
    url:
      'https://i.postimg.cc/jjvKnyTS/Whats-App-Image-2023-01-05-at-4-16-24-PM-1.jpg',
    brand: 'boat',
    description: 'boat Strom Pro call with bluetooth  calling',
  },
  {
    id: '13',
    url:
      'https://i.postimg.cc/g2ZnhStk/Whats-App-Image-2023-01-05-at-4-16-23-PM.jpg',
    brand: 'samsung',
    description: 'SAMSUNG Galaxy Watch 4 Classic Bluetooth calling ',
  },
  {
    id: '14',
    url:
      'https://i.postimg.cc/mkswx1c7/Whats-App-Image-2023-01-05-at-4-16-23-PM-1.jpg',
    brand: 'realme',
    description: 'realme Watch 2 with 320 X 320p Ultra 600 nits Display',
  },
  {
    id: '15',
    url:
      'https://i.postimg.cc/HxHHV3RK/Whats-App-Image-2023-01-05-at-4-16-22-PM.jpg',
    brand: 'realme',
    description: 'realme smart watch 2 with Superbright HD display ',
  },
  {
    id: '16',
    url:
      'https://i.postimg.cc/CMQGHD1d/Whats-App-Image-2023-01-05-at-4-16-22-PM-1.jpg',
    brand: 'syska',
    description: 'Syska PLUTO smart Watch',
  },
  {
    id: '17',
    url:
      'https://i.postimg.cc/DfBjV8zK/Whats-App-Image-2023-01-05-at-4-16-21-PM.jpg',
    brand: 'syska',
    description: 'Syska PLUTO smart Watch',
  },
  {
    id: '18',
    url:
      'https://i.postimg.cc/fL6bkwzW/Whats-App-Image-2023-01-05-at-4-16-21-PM-1.jpg',
    brand: 'realme',
    description: 'realme smart Watch With 3.1 inch Bluetooth Calling ',
  },
  {
    id: '19',
    url:
      'https://i.postimg.cc/yY3dq3TJ/Whats-App-Image-2023-01-05-at-4-16-20-PM.jpg',
    brand: 'syska',
    description: 'Syska PLUTO Smart Watch',
  },
  {
    id: '20',
    url:
      'https://i.postimg.cc/cC4nM1qR/Whats-App-Image-2023-01-05-at-4-16-20-PM-1.jpg',
    brand: 'boat',
    description: 'boat wave 3 calling with bluetooth calling,voice assistance',
  },
  {
    id: '21',
    url:
      'https://i.postimg.cc/SsY5Q41G/Whats-App-Image-2023-01-05-at-4-16-19-PM.jpg',
    brand: 'syska',
    discription:
      'Syska PLUTO smartwatch 600 nits Brightness Premium Metal Body',
  },
  {
    id: '22',
    url:
      'https://i.postimg.cc/Ls6mNJC0/Whats-App-Image-2023-01-05-at-4-16-18-PM-1.jpg',
    brand: 'noise',
    description: 'Noise ColorFit Icon 2 1.8 Display,Bluetooth Calling',
  },
  {
    id: '23',
    url:
      'https://i.postimg.cc/RhG9z9DZ/Whats-App-Image-2023-01-05-at-4-16-17-PM.jpg',
    brand: 'samsung',
    description: 'SAMSUNG Galaxy Watch 3 41 mm ',
  },
]

class Home extends Component {
  state = {searchInput: '', homeCart: ''}

  onSubmitSearchInput = () => {
    const {searchInput} = this.state
    const filteredList = productsList.filter(each => each.brand === searchInput)

    this.setState({List: filteredList})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResults = () => {
    const {searchInput} = this.state
    const searchResults = productsList.filter(eachApp =>
      eachApp.brand.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return searchResults
  }

  renderHome = () => {}

  render() {
    const {searchInput, List, homeCart} = this.state
    console.log(homeCart, List)

    const searchResults = this.getSearchResults()

    return (
      <div className="bg-home">
        <Header className="header" />

        <nav className="home-nav">
          <h1>Watches</h1>
          <h1>Mobile</h1>
          <h1>Fashion</h1>

          <div>
            <input
              className="search-input"
              type="search"
              value={searchInput}
              placeholder="Search Brands"
              onChange={this.onChangeInput}
            />
            <button
              type="button"
              className="search-button"
              onClick={this.onSubmitSearchInput}
            >
              <AiOutlineSearch className="search-icon" />
            </button>
          </div>
          <h1>Grocery</h1>
          <h1>Electronics</h1>
          <h1>Appliances</h1>
        </nav>

        <footer className="footer-phone">
          <p>Watches</p>
          <p>Mobiles</p>
          <div className="input-phone">
            <input
              className="search-input"
              type="search"
              value={searchInput}
              placeholder="Search brands"
              onChange={this.onChangeInput}
            />
            <button
              type="button"
              className="search-button"
              onClick={this.onSubmitSearchInput}
            >
              <AiOutlineSearch className="search-icon" />
            </button>
          </div>
          <p>Fashion</p>
          <p>Appliances</p>
        </footer>
        <div className="items-container">
          {searchResults.map(each => (
            <EachItem
              details={each}
              key={each.id}
              onAddToCart={this.onAddToCart}
              add={this.onAddToCart}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Home
