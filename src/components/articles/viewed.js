
import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
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
                     <img src={ this.getImage(article) } alt='' />
                   </td> 
                  <td>
                    <div className='responsive'> 
                    <Link  to={`/viewed-articles/${article.id}`}>  
                        <div className='row'>                      
                            <div className='col-md-11'>{ article.title }</div> 
                            <div className='col-md-1' style={{fontSize: '16px', color: 'gray', fontWeight: 'bold'}}>
                                <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                            </div>                                  
                        </div>   
                        </Link >      
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