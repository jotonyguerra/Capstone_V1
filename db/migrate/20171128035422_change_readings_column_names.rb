class ChangeReadingsColumnNames < ActiveRecord::Migration[5.1]
  def change
    rename_column :readings, :index, :Index
  end
end
