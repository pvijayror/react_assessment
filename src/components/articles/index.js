
import React from 'react';

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
           return <img src={`https://www.nytimes.com/${url}`} className='img-responsive' style={{"width": "100%" }}/>
           }catch(e) {
            return <img src={`./no-image.jpg`} width='75' height='75'className='img-responsive' style={{"width": "100%" }} />  
           }
        } 

        const Article = ({key, article}) => (
            <a href=''>
            <div className='row border border-light'>             
                <div className='col-sm-1'>{ thumb(article) }</div>
                <div className='col-sm-10'>{ article.snippet }</div>
                <div className='col-sm-1'>
                    <img className='img-responsive' src={`./arrow.jpg`} width='25' height='25'/>             
               </div>            
            </div>
            <br/>
            </a>
        );
            
        return (
            <div>
              { (articles && articles.response ) ? 
                articles.response.docs.map( article => {
                    return <Article key= {article._id} article = {article} />
                }) : ''
              }
            </div>
        )
    }
}

export default Articles;