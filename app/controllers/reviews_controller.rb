class ReviewsController < ApplicationController

  def index
    @reviews = Review.all
  end

  def new
    @review = Review.new
  end

  def create
    binding.pry
    @review = Review.new(review_params)
    @review.save
  end

  def show
  end

  def destroy
  end

  def update
  end

  private
  def review_params
     params.permit(:content).merge(user: current_user)
  end

end
