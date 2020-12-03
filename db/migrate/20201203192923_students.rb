class Students < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.integer :teacher_id, null: false
      t.integer :group_id

      t.timestamps
    end

    add_index :students, :group_id, unique: true
    add_index :students, :teacher_id, unique: true
  end
end
