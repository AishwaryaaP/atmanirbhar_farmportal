import React from "react";
import { List ,Grid,Image,Header} from "semantic-ui-react";
import {Row,Col} from 'reactstrap';
const ArticleItem = (props) => {
  const { article } = props;
  return (
    <List.Item style={{ padding: 30 }}>
      <Row>
        <Col md={7} >
          <Header as="h3">{article.title}</Header>
          <List.Description style={{ margin: "20px 0" }}>
            {article.description}
          </List.Description>
          <List bulleted horizontal>
            <List.Item>
              <a href={article.url} style={{color:"blue"}}>{article.source.name}</a>
            </List.Item>
            <List.Item>{article.publishedAt}</List.Item>
          </List>
        </Col>
        <Col md={5}>
          <Image src={article.urlToImage} style={{height:200,width:300}} />
        </Col>
      </Row>
    </List.Item>
  );
};

const ArticleList = (props) => {
  return (
    <List divided style={{ maxWidth: 1000, margin: "0 auto" }}>
      {props.articles.map((article, index) => (
        <ArticleItem article={article} key={article.title + index} />
      ))}
    </List>
  );
};

export default ArticleList;