class VotesController < ApplicationController

  def new
    @vote = Vote.new
  end

  def create
    binding.pry
    @vote = Vote.new({user_id: current_user.id})
    if @vote.save

    else
      # return error (i.e. someone has already submited a vote for this review)
    end
  end

end
