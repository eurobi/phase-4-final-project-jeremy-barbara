class QuizzesController < ApplicationController
    # skip_before_action :authorized, only: :index
    def index
        quizzes = Quiz.all
        render json: quizzes, include: :user
    end

    def show
        quiz = Quiz.find_by(id: params[:id])
        render json: quiz
    end

    def create
        quiz = Quiz.create(quiz_params)
        if quiz.valid?
            render json: quiz, status: :created
        else
            render json: {errors: quiz.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        quiz = Quiz.find_by(id: params[:id])
        quiz.destroy
    end

    private

    def quiz_params
        params.permit(:user_id, :title, :questions => [], :answers => [])
    end
end
