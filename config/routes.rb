Rails.application.routes.draw do
  devise_for :buyers
  devise_for :sellers
  root    to: "pages#home"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :animals, only: [:index, :show, :new, :create, :edit, :update]

  resource :dashboard, only: :show
end
