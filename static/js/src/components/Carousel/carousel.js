import React, {Component} from 'react';
import content from './content';
import styles from './carousel'

class Carousel extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render() {
    return (
  <section className="section has-text-centered">
      <div className="container">
        <div className="columns">
          <div 
          className="column">
            <img
             style={{
               "display": "inline-block",
               "width": "100%",
               "height": "200px",
             }}
             className="has-text-centered is-centered"
             src="https://images.unsplash.com/photo-1543996991-8e851c2dc841?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
            />
          </div>
        </div>
      </div>
  </section>
    )
  }
}

export default Carousel
