class RatingsController < ApplicationController

  def new
  end

  def create
  end


  private

  def rating_params
    params.permit(:).require
  end

end
