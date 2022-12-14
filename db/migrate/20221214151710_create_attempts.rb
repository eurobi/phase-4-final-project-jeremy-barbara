class CreateAttempts < ActiveRecord::Migration[6.1]
  def change
    create_table :attempts do |t|
      t.integer :user_id
      t.integer :quiz_id
      t.integer :score

      t.timestamps
    end
  end
end
