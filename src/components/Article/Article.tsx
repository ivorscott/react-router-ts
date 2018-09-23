import * as React from 'react';
import { getArticle } from '../../api';
import { IArticlePageState, IArticlePageProps, IArticleDetails } from '../_types';

export default class Article extends React.Component<IArticlePageProps, IArticlePageState> {
  constructor(props: IArticlePageProps) {
    super(props);

    this.state = {
      article: null
    };
  }

  componentDidMount() {
    const { teamId, articleId } = this.props;
    this.getArticle(teamId, articleId);
  }

  componentDidUpdate() {
    const { teamId, articleId } = this.props;
    this.getArticle(teamId, articleId);
  }

  getArticle = (teamId: string, articleId: string) => {
    getArticle(teamId, articleId).then((article: IArticleDetails) => {
      this.setState(() => ({
        article
      }));
    });
  };

  render() {
    return this.props.children(this.state.article);
  }
}
