class QuizzesController < ApplicationController
    def index
        users = Quiz.all
        render json: users
    end
end
