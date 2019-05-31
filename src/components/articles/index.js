
import React from 'react';
import { Table } from 'react-bootstrap';

class Articles extends React.Component {


    render () {
       const { 
                articles: { 
                    articles = []
                }
             } = this.props

        function thumb(article) {
           try{
           let url = article.multimedia && article.multimedia.filter(m => m.subtype === "thumbnail" )[0].url
           return <img src={`https://www.nytimes.com/${url}`}  alt=''/>
           }catch(e) {
            return <img src={`./no-image.jpg`} width='75' height='75' alt='' />  
           }
        } 

        const Article = ({key, article}) => (
            <tr key={article._id}>
            <td>
                { thumb(article)}
            </td> 
           <td>
             <div className='responsive'> 
                 <div className='row'>
                     <div className='col-md-12'>{ article.snippet }</div>                         
                 </div>   
                 <div className='row'>
                     <div className='col-md-12' style={{fontSize: '13px', color: 'gray'}}>
                     { article.abstract }                      
                     </div>                                    
                 </div>             
             </div>    
           </td> 
        </tr>
            // <a href=''>
            // <div className='row border border-light'>             
            //     <div className='col-sm-1'>{ thumb(article) }</div>
            //     <div className='col-sm-10'>{ article.snippet }</div>
            //     <div className='col-sm-1'>
            //         <img className='img-responsive' src={`./arrow.jpg`} width='25' height='25'/>             
            //    </div>            
            // </div>
            // <br/>
            // </a>
        );
            
        return (
            <div>
                 <Table responsive> 
             <tbody>
             { (articles && articles.response ) ? 
                articles.response.docs.map( article => {
                    return <Article key= {article._id} article = {article} />
                }) : ''
              }
             </tbody>     
             </Table>
             
            </div>
        )
    }
}

export default Articles;