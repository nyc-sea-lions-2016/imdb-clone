class CommentsController < ApplicationController

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save

    else
      #raise error
    end
  end

  def destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:content)
  end

end
