import React, { Component } from 'react';

class News2 extends Component {

    constructor(){
        super();

        this.state={
            articles: [],
            searchResults:''
        }
    }



    componentDidMount= async()=>{
        let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=713c8aaef64445869dfa951229e58456";

        let response = await fetch(url);
        
        let data = await response.json();
        console.log(data);
        this.setState({
            articles: data.articles
        }, ()=>{
            console.log(this.state.articles);
        })
    }


    handleInput=(event)=> {
        let filteredList = articles.filter(articleObj =>{
            return articleObj.title.toLowerCase().includes(searchResults.toLowerCase());
        })
        this.setState({
            searchResults: event.target.value,
            articles: filteredList
        })
    }
  render() {

    // const {articles, searchResults} = this.state;

    let filteredList = articles.filter(articleObj =>{
        return articleObj.title.toLowerCase().includes(searchResults.toLowerCase());
    })
    let articleList= filteredList.map((article, index)=>{
        return <li key={index}>
            <h4>{article.titile}</h4>
            <img src={article.urlToImage} alt=""/>
            <p>{article.description}</p>
        </li>
    })
    return (
      <>
        <h1>News articles</h1>
        <input type="text" value={searchResults} onChange={(e)=>this.handleInput(e)}/>

        {articleList}
      </>
    )
  }
}
//a hook -outside modules

//life cycle methods
//class based components
export default News2;