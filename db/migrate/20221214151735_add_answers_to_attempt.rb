class AddAnswersToAttempt < ActiveRecord::Migration[6.1]
  def change
    add_column :attempts, :answers, :text, array: true, default: []
  end
end
