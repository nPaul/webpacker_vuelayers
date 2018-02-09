Rails.application.routes.draw do
  get 'main/index'

  root 'main#index'

  get 'map1', to: 'main#map1'
  get 'map2', to: 'main#map2'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
