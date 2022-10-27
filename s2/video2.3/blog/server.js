var express = require('express'),
    app = express(),
    articles = require('./controllers/articles');

//CRUD
//CREATE READ UPDATE DELETE

/*
    a post is going to look like this:
    {
        title:"",
        body:"",
        author:"",
        comments:[],
    }

    a comment would like
    {
        name:"foo",
        text:"assdffsda"
    }
*/


var notImplimented = function(req, res) {
    res.sendStatus(501);
}

app.use(
  express.urlencoded({
    extended: true,
  })
);

//articles
app.get('/articles', articles.index); // show them all blog posts
app.get("/articles/new", articles.new); 
app.get('/articles/:articleId', notImplimented); // reading one
app.post('/articles', articles.create); // making a new one
app.put('/articles/:articleId', notImplimented); // updating one
app.delete('/articles/:articleId', notImplimented); // delete one

//comments
app.post('/articles/:articleId/comments', notImplimented);
app.delete("/articles/:articleId/comments/commentId", notImplimented);

app.listen(8080);