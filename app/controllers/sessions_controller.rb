class SessionsController < ApplicationController
  def user
    render json: {username: current_user.email}
  end
end
