require 'rails_helper'

# [] Visiting the `/` path should contain a top bar.
# [] Visiting the `/more` path should show a page with more information on diabetes
# [] Visiting the root path should display a button to import a csv file.
# [] Visiting the root path should display a link to the root path

feature 'visitor sees  welcome page with a top bar with the title and nav links' do
  scenario "sees a 'Diacomm' link in left top-bar" do
    visit root_path
    expect(page).to have_content "Diacomm"

    click_link "Diacomm"
    expect(page).to have_content "Welcome"
  end
  # should this be a in a separte file?
  scenario "click button to upload dexcom csv data" do
    visit root_path

    expect(page).to have_content("Import Dexcome Data")
  end


end
