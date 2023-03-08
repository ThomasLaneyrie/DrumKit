Rails.application.routes.draw do

  root to: "static_pages#drum_kit"
  get 'static_pages/home'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
