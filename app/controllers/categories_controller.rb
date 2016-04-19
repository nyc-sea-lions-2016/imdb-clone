class CategoriesController < ApplicationController

  def index
    @categories = Category.all
  end

  def show
    @category = Category.find_by(id: params[:id])
    if @category
      @films = @category.films
    else
      @films = Film.all
    end
  end

end
