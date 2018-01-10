require 'rails_helper'

feature 'signed in user imports dexcom data' do
  context "Normal User" do
   let(:user) {FactoryBot.create(:user)}
   before { login_as(user, scope: :user)}

   scenario "sees a 'import dexcom data' link" do
     visit root_path
     expect(page).to have_content("Import Dexcom Data")
   end
 end
end
