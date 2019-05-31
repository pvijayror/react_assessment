
import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchViewedArticles } from '../../actions/articles/viewed'

class Viewed extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchViewedArticles(1))
    }

    getImage = article => {
        let image = ''
        if (article.media[0]) {
            image =  article.media[0]['media-metadata'][0].url 
        }
        return image
        
    }

    getViewArticles = (results) => (
        results.map( article =>  
               <tr key={article.id}>
                   <td>
                     <img src={ this.getImage(article) } />
                   </td> 
                  <td>{ article.title }</td> 
               </tr>
            ) 
          
    )

    render () {
           const { 
               articles: { 
                   articles: { 
                       results
                    }
                 }
                 } = this.props
        return (
            <div>
                <Table responsive> 
                <tbody>
                    { results && this.getViewArticles(results) }
                </tbody>     
                </Table>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        articles: state.viewed
    }
}

export default connect(mapStateToProps)(Viewed);