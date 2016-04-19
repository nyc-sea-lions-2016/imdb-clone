class CategoriesController < ApplicationController

  def index
    @categories = Category.all
  end

  def show
    @category = Category.find_by(id: params[:id])
    if @category
      @films = Film.where(category_id: @category.id)
    else
      @films = Film.all
    end
  end

end
