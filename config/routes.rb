Rails.application.routes.draw do
  root 'homes#index'

  resources :homes, only: [:index, :more]
  resources :readings, only: [:index]
  get 'more', to: 'homes#show'

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :readings, only: [:index]
    end
  end

  authenticate :user do
    resources :readings, only: [:new, :create, :show, :edit, :update, :destroy] do
      collection { post :import }
    end
    resources :comments, only: [:new, :create, :edit, :update, :destroy]
  end

  resources :comments, only: [:index, :show]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
