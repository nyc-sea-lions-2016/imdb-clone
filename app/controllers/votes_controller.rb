class VotesController < ApplicationController

  def new
    @vote = Vote.new
  end

  def create
    @vote = Vote.new({user_id: current_user.id, review_id: params["reviewId"].to_i, value: params["voteValue"].to_i})
    if @vote.save
      # do nothing ...
    else
      # return error (i.e. someone has already submited a vote for this review)
    end
  end

end
