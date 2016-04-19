class CategoriesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index,:show]
  def index
    @categories = Category.all
  end

  def show
    @category = Category.find_by(id: params[:id])
    if @category
      binding.pry
      @films = Film.where(category_id: @category.id)
    else
      @films = Film.all
    end
  end

end
