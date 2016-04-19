class UsersController < ApplicationController
  def index
    @users = User.all
  end

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

  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.update(params[:user])
  end

  def sign_up
  end

  def sign_in
  end

  def sign_out
    sessions.clear
    redirect_to 'root_path'
  end

end
