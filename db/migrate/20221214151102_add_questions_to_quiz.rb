class AddQuestionsToQuiz < ActiveRecord::Migration[6.1]
  def change
    add_column :quizzes, :questions, :text, array: true, default: []
  end
end
