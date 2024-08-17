class FeedsController < ApplicationController   
    # ADD
    def add_feed
        @feed = Feed.create(url: create_params[:url])

        if @feed.valid?
            Rails.logger.info "Feed #{create_params[:url]} added"
            render json: { feed: @feed }, status: 200
        else
            Rails.logger.warn "Failed to create feed #{create_params[:url]}"
            render json: { error: "Failed to create feed #{create_params[:url]}" }, status: 500
        end
    end

    # REMOVE
    def remove_feed
        @feed = Feed.find_by(find_params)

        if !@feed
            Rails.logger.warn "Couldn't find feed"
            render json: { error: "Couldn't find feed" }, status: 404
        else
            @feed.destroy
            Rails.logger.info "Feed removed successfully"
            render json: { feed: @feed }, status: 200
        end
    end        

    # EDIT
    def update_feed # something's wrong
        @feed = Feed.find_by(id: find_params[:id])

        if !@feed
            Rails.logger.warn "Couldn't find feed"
            render json: { error: "Couldn't find feed" }, status: 404
        else
            if @feed.update(url: find_params[:url])
                @feed.reload
                Rails.logger.info "Feed updated successfully"
                render json: { feed: @feed }, status: 200
            else
                Rails.logger.warn "Failed to update feed"
                render json: { error: "Failed to update feed" }, status: 500
            end
        end
    end

    # GET ALL
    def get_feeds
        @feeds = Feed.all

        render json: { feeds: @feeds }, status: 200
    end

    private

    def create_params
        params.permit(:url)
    end
    
    def find_params
        params.permit(:id, :url)
    end
end
