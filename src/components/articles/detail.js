import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CardColumns, Card } from 'react-bootstrap';

import { fetchViewedArticles } from '../../actions/articles/viewed'

class Detail extends Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchViewedArticles(1))
    }

    getImage = article => {
        let image = ''
        if (article.media && article.media[0]) {
            image =  article.media[0]['media-metadata'][2].url 
        }
        return image     
    }

    render() {

        const { article } = this.props
        return(
            <div>
                <br />  
                <CardColumns> 
                    <Card.Img src= {this.getImage(article)} height="300"/>
                </CardColumns>
                <br />
                <Card>
                    <Card.Body>
                    <Card.Title>{ article.title }</Card.Title>
                    <Card.Text>
                       { article.source}
                    </Card.Text>
                    <Card.Text>
                       { article.abstract}
                    </Card.Text>
                     
                    </Card.Body>
                </Card>
                <br />
              <div><Link to="/viewed-articles" style={ {fontWeight: 'bold'}}>Back</Link></div>
         </div>
        )
    }
}

const mapToStateProps = (state, props) => {
    const id = props.match.params.id;
    const { articles: {  results } = [] } = state.viewed

    const articles = results && results.filter(o => parseInt(o.id) === parseInt(id) )


    return {
        article: articles && articles.length > 0 ? articles[0] :  {}
    }
}

export default connect(mapToStateProps)(Detail) 