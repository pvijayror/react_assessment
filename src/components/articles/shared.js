
import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchSharedArticles } from '../../actions/articles/shared'

class Shared extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchSharedArticles(1))
    }

    getImage = article => {
        let image = ''
        if (article.media[0]) {
            image =  article.media[0]['media-metadata'][0].url 
        }
        return image
        
    }

    getSharedArticles = (results) => (
        results.map( article =>  
               <tr key={article.id}>
                   <td>
                     <img src={ this.getImage(article) } alt='' />
                   </td> 
                  <td>
                    <div className='responsive'> 
                        <div className='row'>
                            <div className='col-md-12'>{ article.title }</div>                         
                        </div>   
                        <div className='row'>
                            <div className='col-md-9' style={{fontSize: '13px', color: 'gray'}}>
                            { article.abstract }                      
                            </div>
                            <div className='col-md-3' style={{fontSize: '13px', color: 'gray'}}>
                            { article.published_date }
                            </div>                      
                        </div>             
                    </div>    
                  </td> 
               </tr>
            )     
        )
    render () {
        const { 
            articles: { 
                articles: { 
                    results
                 } = []
              }
              } = this.props
     return (
         <div>
             <Table responsive> 
             <tbody>
                 { results && this.getSharedArticles(results) }
             </tbody>     
             </Table>
             
         </div>
     )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        articles: state.shared
    }
}

export default connect(mapStateToProps)(Shared);