Rails.application.routes.draw do

  root 'films#index'
  resources :categories, only: [:index, :show]

  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }

  get 'sessions/user' => 'sessions#user'

  get 'films/:id/reviews' => 'films#reviews'

  resources :films, only: [:show, :index]

  resources :reviews, except: [:destroy]

  resources :votes, only: [:new, :create]

end
