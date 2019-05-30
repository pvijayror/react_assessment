
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
           return <img src={`https://www.nytimes.com/${url}`}/>
           }catch(e) {
            return <img src={`./no_image.png`} width='75' height='75'/>  
           }
        } 

        const Article = ({key, article}) => (
            <div className='row border border-light'>
               <div className='col-sm-1'>{ thumb(article) }</div>
               <div className='col-sm-10'>{ article.snippet }</div>
               <div className='col-sm-1'>
                   <a href='#'>
                        <img src={`./arrow.jpg`} width='25' height='25'/> 
                   </a></div>
            </div>
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