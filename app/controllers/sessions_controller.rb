class SessionsController < ApplicationController
  def login
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.authenticate(params[:user][:password])
      session[:id] = @user.id
    else
      render :login
  end

  def logout
    session.clear
  end
end
