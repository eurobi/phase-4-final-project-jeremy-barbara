class UsersController < ApplicationController
    skip_before_action :authorized, only: :create
    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user, methods: :createdquizzes, include: :attempts
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        if user
            user.update(username: params[:username], pofile_img_url: params[:pofile_img_url])
            if user.valid?
                render json: user, status: :created
            end
        end
    end

    def destroy
        if session[:user_id]
            user = User.find_by(id: session[:user_id])
            session.delete(:user_id)
            user.destroy
        else
            render json: {errors: ["unauthorized"]}, status: :unauthorized
        end

    end
    

    private
    def user_params
        params.permit(:username, :pofile_img_url, :password, :password_confirmation)
    end
end
