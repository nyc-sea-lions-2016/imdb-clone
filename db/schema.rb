# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160418151211) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "actors", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "comments", force: :cascade do |t|
    t.text     "content",          null: false
    t.integer  "user_id",          null: false
    t.integer  "commentable_id"
    t.string   "commentable_type"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "comments", ["commentable_type", "commentable_id"], name: "index_comments_on_commentable_type_and_commentable_id", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "film_actors", force: :cascade do |t|
    t.integer "film_id",  null: false
    t.integer "actor_id", null: false
  end

  add_index "film_actors", ["actor_id"], name: "index_film_actors_on_actor_id", using: :btree
  add_index "film_actors", ["film_id"], name: "index_film_actors_on_film_id", using: :btree

  create_table "films", force: :cascade do |t|
    t.string   "name",        null: false
    t.integer  "category_id", null: false
    t.string   "director"
    t.string   "year"
    t.string   "oscar_count"
    t.string   "imdb_link"
    t.string   "country"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "films", ["category_id"], name: "index_films_on_category_id", using: :btree
  add_index "films", ["name"], name: "index_films_on_name", using: :btree

  create_table "ratings", force: :cascade do |t|
    t.integer  "value",      null: false
    t.integer  "user_id",    null: false
    t.integer  "film_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "ratings", ["film_id"], name: "index_ratings_on_film_id", using: :btree
  add_index "ratings", ["user_id"], name: "index_ratings_on_user_id", using: :btree
  add_index "ratings", ["value"], name: "index_ratings_on_value", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.text     "content",    null: false
    t.integer  "film_id"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "reviews", ["film_id"], name: "index_reviews_on_film_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "roles", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "roles", ["name"], name: "index_roles_on_name", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.integer  "role_id",         null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["role_id"], name: "index_users_on_role_id", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

  create_table "votes", force: :cascade do |t|
    t.integer  "value",      null: false
    t.integer  "user_id",    null: false
    t.integer  "review_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "votes", ["review_id"], name: "index_votes_on_review_id", using: :btree
  add_index "votes", ["user_id"], name: "index_votes_on_user_id", using: :btree

end
