# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                      root GET    /                                                                                        static_pages#root
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#               api_session GET    /api/session(.:format)                                                                   api/sessions#show {:format=>:json}
#                           DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#              api_students GET    /api/students(.:format)                                                                  api/students#index {:format=>:json}
#                           POST   /api/students(.:format)                                                                  api/students#create {:format=>:json}
#               api_student GET    /api/students/:id(.:format)                                                              api/students#show {:format=>:json}
#                           PATCH  /api/students/:id(.:format)                                                              api/students#update {:format=>:json}
#                           PUT    /api/students/:id(.:format)                                                              api/students#update {:format=>:json}
#                           DELETE /api/students/:id(.:format)                                                              api/students#destroy {:format=>:json}
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :students, only: [:index, :create, :show, :update, :destroy]
  end

end
