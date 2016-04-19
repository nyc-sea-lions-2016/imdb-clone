class SessionsController < ApplicationController
  def sign_up
  end

  def sign_in
  end

  def sign_out
    sessions.clear
    redirect_to 'root_path'
  end
end
