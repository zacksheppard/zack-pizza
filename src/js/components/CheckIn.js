import React, { Component } from 'react';
import { decodeHtmlEntity } from '../helpers';

class CheckIn extends Component {
  getToppings() {
    if(this.props.details.toppings.length > 0) {
      return this.props.details._embedded["wp:term"]["0"];
    }

    return [];
  }

  getFeaturedImage() {
    if(this.props.details.featured_media) {
      return this.props.details._embedded["wp:featuredmedia"]["0"]
        .media_details.sizes.thumbnail.source_url;
    }
    return false;
  }
  
  render() {

    const date = new Date(this.props.details.date);
    const formattedDate = 
      `${1 + date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;
      
    return (
        <div 
          className="checkin col-md-5 col-md-push-1 col-sm-6 col-sm-push-0 col-xs-10 col-xs-push-1"
        >
          <div className="whiteboard">
            <p className="date">{formattedDate}</p>
            <h3 className="location">
              @ <span> {decodeHtmlEntity(this.props.details.title.rendered)}</span>
            </h3>
            <p className="description">
              {decodeHtmlEntity(this.props.details.acf.name)}
            </p>
            <p className="topping-list">{this.getToppings()
                .map( (t, i) => <span key={i} >{t.name} </span>)}
            </p>
          </div>
        </div>
    )
  }
}

export default CheckIn;