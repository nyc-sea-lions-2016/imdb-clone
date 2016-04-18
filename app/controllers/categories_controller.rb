class CategoriesController < ApplicationController

  def index
    @categories = Category.all
  end

  def show
    # re-confirm that params have name and not categoryName
    @category = Category.find_by(name: params[:name])
  end

end
