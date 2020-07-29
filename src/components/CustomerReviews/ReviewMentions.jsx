import React, { Component } from 'react';
import "./CustomerReviews.css" 


class ReviewMentions extends Component {


    render() { 

        return ( 
            <div>
                <div className="review-mention">
                    <h3>Read reviews that mention</h3>
                    <span><button className="button">filtered button</button></span>
                </div>
                   {/* <span><button>top reviews</button></span> */}

                   <div className="dropdown">
                        <button className="dropbtn">Top reviews</button>
                        <div className="dropdown-content">
                            <a href="#">Most recent</a>
                        </div>
                   </div>

                <br />
                <br />
                <div>
                    <div className="profile-avatar"><img className="profile-avatar-img" src="https://www.amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"></img>
                    <span className="profile-name">Customer Name</span></div>
                </div>
                <tr>
                    <td><span>*Star rating icon* <a href="link to customer review summary page">Review title!</a></span>
                    </td>    
                </tr>
                <div>Review Date</div>
                <div>Verified Purchase</div>
                
                <div><p>Submitted review form goes here</p></div>

                {/* <div className="row"><button>Helpful</button>
                    <a href="/">Comment</a>
                </div> */}

                <table>
                    <tr>
                        <td><button>Helpful</button></td>
                        <td><a href="/">Comment</a></td>
                    </tr>
                </table>
            </div>
         );
    }
}
 
export default ReviewMentions;