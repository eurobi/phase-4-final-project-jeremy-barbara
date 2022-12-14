class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def show
        if session[:user_id]
            user = User.find_by(id: session[:user_id])
            render json: user, status: :created
        else
            render json: {error: "Unauthorized"}, status: :unauthorized
        end
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

    private
    def user_params
        params.permit(:username, :profile_img_url, :password, :password_confirmation)
    end
end
