class SessionsController < ApplicationController
  def login
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.authenticate(params[:user][:password])
      session[:id] = @user.id
      # TODO determine where to redirect
    else
      # TODO determine what to render if incorrect login details entered
  end

  def logout
    session.clear
    # TODO determine where to redirect
  end
end
