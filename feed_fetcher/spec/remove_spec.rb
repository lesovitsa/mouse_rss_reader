require 'rails_helper'

RSpec.describe "Feeds", type: :request do

    before do
        @feed = Feed.create(url: "http://rss.cnn.com/rss/cnn_topstories.rss")
    end

    scenario "Sends a post request to delete a feed" do

        post "http://localhost:3000/feeds/remove", params: {id: @feed["id"]}

        expect(response).to have_http_status(:success)
        result = JSON.parse(response.body)["feed"]
        expect(result["id"]).to eq(@feed["id"])
        expect { Feed.find(@feed["id"]) }.to raise_error(ActiveRecord::RecordNotFound)
    end

    scenario "Sends a post request to delete a feed that does not exist" do

        post "http://localhost:3000/feeds/remove", params: {id: -1}

        expect(response).to have_http_status(404);
    end
end