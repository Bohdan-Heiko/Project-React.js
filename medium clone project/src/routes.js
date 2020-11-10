import React from 'react'
import {Switch, Route} from 'react-router-dom'

import GlobalFeed from './pages/globalFeed/index'
import YourFeed from './pages/yourFeed/index'
import TagFeed from './pages/tagFeed/index'
import Article from './pages/article/index'
import Authentication from './pages/authentication/index'
import CreateArticle from './pages/createArticle/index'
import EditArticle from './pages/editArticle/index'
import Settings from './pages/settings/index'
import UserProfile from './pages/userProfile/index'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact />
      <Route path="/profiles/:slug" component={UserProfile} />
      <Route path="/profiles/:slug/favorites" component={UserProfile} />
      <Route path="/settings" component={Settings} exact />
      <Route path="/articles/new" component={CreateArticle} />
      <Route path="/articles/:slug/edit" component={EditArticle} />
      <Route path="/feed" component={YourFeed} exact />
      <Route path="/tags/:slug" component={TagFeed} />
      <Route path="/articles/:slug" component={Article} />
      <Route path="/login" component={Authentication} />
      <Route path="/register" component={Authentication} />
    </Switch>
  )
}
export default Routes
