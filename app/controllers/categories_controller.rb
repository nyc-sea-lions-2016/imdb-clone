class CategoriesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index,:show]
  def index
    @categories = Category.all
  end

  def show
    @category = Category.find_by(id: params[:id])
    if @category
      @films = @category.films
    else
      @films = Film.includes(:ratings).all
      @films.to_json({methods: :average_rating})
    end
  end

end
