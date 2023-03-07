class QuizzesController < ApplicationController
    # skip_before_action :authorized, only: :index
    before_action :find_quiz, only: [:show, :destroy]

    def index
        quizzes = Quiz.all
        render json: quizzes, include: :user
    end

    def show
        render json: @quiz, include: :attempts
    end

    def create
        quiz = Quiz.create(quiz_params)
        if quiz.valid?
            render json: quiz, include: :user, status: :created
        else
            render json: {errors: quiz.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        @quiz.destroy
    end

    def userquizzes
        quizzes = Quiz.where(:user_id => params[:id])
        render json: quizzes, include: :user
    end

    private

    def quiz_params
        params.permit(:user_id, :title, :questions => [], :answers => [])
    end

    def find_quiz
        @quiz = Quiz.find_by(id: params[:id])
    end

end
