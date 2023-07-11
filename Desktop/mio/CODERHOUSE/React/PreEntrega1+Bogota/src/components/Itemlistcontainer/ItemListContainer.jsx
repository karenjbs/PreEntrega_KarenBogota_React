import Carousel from 'react-bootstrap/Carousel';
import "./ItemListContainer.css";

export const ItemListContainer = ({ greeting0, greeting1, greeting2}) => (
    <div className="item-list">
    
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1669903659826-464314558cde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>{ greeting0 }</h1>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1688777147321-668bd72f4f96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>{ greeting1 }</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1669903659826-464314558cde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>{ greeting2 }</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
    </div>
  );

export default ItemListContainer;