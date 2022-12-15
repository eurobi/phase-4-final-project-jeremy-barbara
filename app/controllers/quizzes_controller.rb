class QuizzesController < ApplicationController
    def index
        quizzes = Quiz.all
        render json: quizzes
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

    private

    def quiz_params
        params.permit(:user_id, :title, :questions => [], :answers => [])
    end
end
