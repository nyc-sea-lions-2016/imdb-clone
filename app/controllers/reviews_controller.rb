class ReviewsController < ApplicationController

  def index
    @reviews = Review.all
  end

  def new
    @review = Review.new
  end

  def create
    @review = Review.new({
      user_id: review_params[:user][:id],
      content: review_params[:content],
      film_id: review_params[:filmId]
      })
    if @review.save
      render json: @review
    else
      #errors
    end
  end

  def show
  end

  def destroy
  end

  def update
  end

  private
  def review_params
     params.permit(:content,:filmId).merge(user: current_user)
  end

end
