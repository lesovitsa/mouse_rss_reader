require 'rails_helper'

class Feed
    include Capybara::DSL
    def visit_homepage
      visit('http://localhost:3001')
    end
  end
  feature "Visit homepage" do
    let(:home) {Feed.new}
    scenario "Able to see text, Word Nerds", :js => true do
      home.visit_homepage
      expect(page).to have_content("Mouse's RSS Feed Reader")
    end
  end