class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])
    @user.role_id = 1 if @user.role == nil
    if @user.save
      session[:id] = @user.id
    else
      render :new
    end
  end

  def profile
    @user = User.includes(:reviews, :votes, :ratings, :role).find(current_user)
  end

end
