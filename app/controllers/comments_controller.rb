class CommentsController < ApplicationController
  before_action :authenticate_user!

  def index
    @comments = Comment.all
  end

  def show
  end

  def new
    comment = Comment.new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment
      redirect_to root_path, notice: 'Comment submitted!'
    else
      flash[:notice] = "comment not submitted"
      redirect_to root_path
    end
  end

  def edit
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user)
  end
end
