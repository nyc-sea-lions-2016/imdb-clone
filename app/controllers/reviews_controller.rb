class ReviewsController < ApplicationController

  def index
    @reviews = Review.all
  end

  def new
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
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
     params.permit(:content,:film_id).merge(user: current_user)
  end

end
