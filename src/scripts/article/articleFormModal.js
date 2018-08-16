//Author: Jonathan Edwards
//Purpose: HTML Representation of the form to add more articles
// <!-- Button trigger modal -->


let buildArticleForm = () => {
  return `<div class="header">
  <h3>Articles</h3>
  <button type="button" class="btn newArticleButton" data-toggle="modal" data-target="#articleForm"><i class="fas fa-plus-square"></i></button>
  </div>
  <div class="modal fade" id="articleForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add a new Article</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <fieldset>
        <label for="article-title">Article Title:</label>
        <input required type="text" id="article-title"><br>

        <label required for="article-synopsis">Synopsis:</label>
        <input required type="text" id="article-synopsis"><br>

        <label required for="article-url">Link:</label>
        <input type="input" id="article-url"><br>
        </fieldset>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" id="saveArticle" data-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
`
}

module.exports = buildArticleForm()