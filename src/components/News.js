import React,{Component} from 'react';
import ArticleList from './ArticleList';
import { Container, Header } from "semantic-ui-react";
import axios from 'axios';
class  AgriNews extends Component
{
  constructor(props){
    super(props);
  this.state={
    articles:[],
  }
  }
  componentWillMount() {
    this.getArticles(this.props.default);
  }

  componentWillReceiveProps(nextProps) {
    
    if (nextProps !== this.props) {
      this.setState({ url: `https://newsapi.org/v2/everything?q=Agriculture&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`});
      this.getArticles(nextProps.default);
    }
  }
  
	
getArticles(url) {
   
    // Make HTTP reques with Axios
    axios
      .get(`https://newsapi.org/v2/everything?q=Agriculture&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
      .then(res => {
        const articles = res.data.articles;
        // Set state with result
        console.log(articles);
        this.setState({ articles: articles });
      })
      .catch(error => {
        console.log(error);
      });
  }
	render() {

  return (
    <Container>
      <Header as="h2" style={{ textAlign: "center", margin: 20,'font-size':30 ,color:"brown"}}>
       Agriculture Related Recent Activities across the Globe
      </Header>
      {this.state.articles.length > 0 && <ArticleList articles={this.state.articles} />}
      {<p>Could not fetch any articles. Please try again.</p>}
    </Container>
  );
}
	
}
export default AgriNews;