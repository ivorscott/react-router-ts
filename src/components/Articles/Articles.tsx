import * as React from 'react';
import { Route } from 'react-router-dom';
import { Sidebar } from '../Sidebar';
import { IPage, IArticlesPageState, IArticleDetails } from '../_types';
import { getTeamsArticles } from '../../api';
import { Article } from '../Article';

export default class Articles extends React.Component<IPage, IArticlesPageState> {
  constructor(props: IPage) {
    super(props);
    this.state = {
      loading: true,
      teamArticles: []
    };
  }

  componentDidMount() {
    getTeamsArticles(this.props.match.params.teamId).then((teamArticles: IArticleDetails[]) => {
      this.setState(() => ({
        loading: false,
        teamArticles: teamArticles.map((article: IArticleDetails): string => article.title)
      }));
    });
  }

  render() {
    const { loading, teamArticles } = this.state;
    const { params, url } = this.props.match;
    const { teamId, articleId } = params;
    return loading === true ? (
      <h1>LOADING</h1>
    ) : (
      <div className="container two-column">
        <Sidebar loading={loading} title="Articles" list={teamArticles} {...this.props} />

        <Route
          path={`${url}/:articleId`}
          render={() => (
            <Article articleId={articleId} teamId={teamId}>
              {(article: IArticleDetails) =>
                !article ? (
                  <h1>LOADING</h1>
                ) : (
                  <div className="panel">
                    <article className="article" key={article.id}>
                      <h1 className="header">{article.title}</h1>
                      <p>{article.body}</p>
                    </article>
                  </div>
                )
              }
            </Article>
          )}
        />
      </div>
    );
  }
}
