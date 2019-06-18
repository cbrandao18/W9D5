class Api::PokemonController < ApplicationController
    def index
        @pokemon = Pokemon.all
    end

    def show
        @pokemon = Pokemon.find(params[:id])
    end

    def create
        @pokemon = Pokemon.new(pokemon_params);
        @pokemon.item_ids = [];
        if @pokemon.save
            render :show
        else
            render json: @pokemon.errors.full_messages, status: 422
        end
    end

    def pokemon_params
        params.require(:pokemon).permit(:name, :image_url, :poke_type, :attack, :defense, moves: [])
    end
end