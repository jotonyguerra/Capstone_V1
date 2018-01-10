require 'rails_helper'

feature 'signed in user imports dexcom data' do
  context "Signed in User" do
   let(:user) {FactoryBot.create(:user)}
   before { login_as(user, scope: :user)}

   scenario "sees a 'import dexcom data' link" do
     visit root_path
     expect(page).to have_content("Import Dexcom Data")
   end
   scenario "user attempts to upload improper file" do
     visit root_path
     click_link("Import Dexcom Data")
     save_and_open_page
     click_button('Import Dexcom Data')
     expect(page).to have_content("please select a valid file")
   end
 end
end
