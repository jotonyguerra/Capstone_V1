class Comments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :body, null: false, default: ""
      t.references :user, foreign_key: true
    end
  end
end
