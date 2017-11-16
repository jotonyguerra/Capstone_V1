Rails.application.routes.draw do
  root 'homes#index'
  resources :home, only: [:index, :more]
  get 'more', to: 'homes#show'
  devise_for :users

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
