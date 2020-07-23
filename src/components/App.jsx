import React, { Component } from 'react';
import Product from './productVariant/Product.jsx'
import CustomerReviewsContainer from './CustomerReviewsContainer';
import CWBA from './CustomerWhoBoughtAlsoCmpnt/CustomersWhoBoughtAlsoAll'
import QAcomponent from './QAcomponent';
import CImagesAll from './CustomerImageCmpnt/CustomerImagesAll';

class App extends Component {
    render(){
        return(
            <div>
                <h1>My React App</h1>
                <Product />
                <CWBA/>
                <CustomerReviewsContainer />
                <QAcomponent />
                <CImagesAll />
            </div>
        )
    }
}

export default App;

