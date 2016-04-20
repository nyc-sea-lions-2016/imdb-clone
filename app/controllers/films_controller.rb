class FilmsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]
  def index
    @films = Film.includes(:ratings).all
    @film.to_json({methods: :average_rating})
  end

  def show
    @film = Film.find_by(id: params[:id])
  end

  def reviews
    @reviews = Review.where('film_id = ?', params[:id])
  end

end
