class CreateQuizzes < ActiveRecord::Migration[6.1]
  def change
    create_table :quizzes do |t|
      t.integer :user_id
      t.float :avg_score
      t.string :title

      t.timestamps
    end
  end
end
