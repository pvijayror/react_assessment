
import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchEmailedArticles } from '../../actions/articles/emailed'

class Emailed extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchEmailedArticles(1))
    }

    getImage = article => {
        let image = ''
        if (article.media[0]) {
            image =  article.media[0]['media-metadata'][0].url 
        }
        return image
        
    }

    getEmailedArticles = (results) => (
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
                 { results && this.getEmailedArticles(results) }
             </tbody>     
             </Table>
             
         </div>
     )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        articles: state.emailed
    }
}

export default connect(mapStateToProps)(Emailed);