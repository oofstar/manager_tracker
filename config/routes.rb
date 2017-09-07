Rails.application.routes.draw do
  root 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :kylees, only: [:index]
    end
  end

  resources :kylees, only: [:index]
end
