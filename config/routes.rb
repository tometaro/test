Rails.application.routes.draw do
  resources :products
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  match '/hoge/', to: 'test/sample#show', via: [:get]
  match '/hoge2/', to: 'test/sample#hot', via: [:get]

end
