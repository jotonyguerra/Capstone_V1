class CommentsController < ApplicationController
  # before_action: authenticate_user!

  def index
    @comments = Comment.all
  end

  def show
  end

  def new

  end

  def create
  end
  def edit
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user)
  end
end
