Rails.application.routes.draw do

  root 'films#index'
  resources :categories, only: [:index, :show]

  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }

  get 'sessions/user' => 'sessions#user'
  get 'users/:id' => 'users#show'
  get 'users/profile/:id' => 'users#profile'

  get 'films/:id/reviews' => 'films#reviews'

  resources :films, only: [:show, :index]

  resources :reviews, except: [:destroy] do
    resources :comments, only: [:new, :create, :destroy]
  end

  resources :votes, only: [:new, :create]

end
