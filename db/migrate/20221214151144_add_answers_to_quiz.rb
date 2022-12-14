class AddAnswersToQuiz < ActiveRecord::Migration[6.1]
  def change
    add_column :quizzes, :answers, :text, array: true, default: []
  end
end
