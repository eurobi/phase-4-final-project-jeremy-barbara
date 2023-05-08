class FixColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :quizzes, :user_id, :author_id
  end
end
