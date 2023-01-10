import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarouselPage = () => (
  <Carousel>
    <div className="img">
      <img
        alt="img"
        src="https://i.postimg.cc/pLmkNHGV/Whats-App-Image-2023-01-05-at-4-16-28-PM.jpg"
      />
    </div>
    <div>
      <img
        alt="img"
        src="https://i.postimg.cc/tTxL96BT/Whats-App-Image-2023-01-05-at-4-16-28-PM-1.jpg"
      />
    </div>
    <div>
      <img
        alt="img"
        src="https://i.postimg.cc/mgSZGvtq/Whats-App-Image-2023-01-05-at-4-16-27-PM.jpg"
      />
    </div>
  </Carousel>
)

export default CarouselPage
