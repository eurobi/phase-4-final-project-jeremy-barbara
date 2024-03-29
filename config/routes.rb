Rails.application.routes.draw do
  resources :users
  resources :quizzes
  resources :attempts
  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get '/me', to: "users#show"
  get '/auth', to: "users#show"
  get '/users/:id/attempts', to: "attempts#show"
  get '/users/:id/quizzes', to: "quizzes#userquizzes"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
